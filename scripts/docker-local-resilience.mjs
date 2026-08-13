#!/usr/bin/env node

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

import { spawnSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** @module kickoff/scripts/dockerLocalResilience @description Backs up and restores only kickoffDockerLocal infrastructure volumes. */

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspaceRoot = path.resolve(projectRoot, '..');
const generatedRoot = path.join(projectRoot, 'envs', 'kickoffDockerLocal', 'generated');
const backupRoot = path.join(generatedRoot, 'backups');
const environmentPath = path.join(generatedRoot, 'docker.env');
const composePath = path.join(projectRoot, 'envs', 'kickoffDockerLocal', 'docker', 'compose.yaml');
const docker = fs.existsSync('/Applications/Docker.app/Contents/Resources/bin/docker')
  ? '/Applications/Docker.app/Contents/Resources/bin/docker' : 'docker';
const compose = fs.existsSync('/Applications/Docker.app/Contents/Resources/cli-plugins/docker-compose')
  ? '/Applications/Docker.app/Contents/Resources/cli-plugins/docker-compose' : docker;
const dockerEnvironment = { ...process.env, DOCKER_CONFIG: path.join(generatedRoot, 'docker-cli'),
  DOCKER_HOST: process.env.DOCKER_HOST || `unix://${path.join(process.env.HOME || '', '.docker/run/docker.sock')}` };

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { cwd: options.cwd || workspaceRoot, env: options.env || dockerEnvironment,
    encoding: options.binary ? null : 'utf8', input: options.input, maxBuffer: 1024 * 1024 * 1024 });
  if (result.status !== 0) {
    const output = result.stderr?.toString() || result.stdout?.toString() || `${command} failed`;
    throw new Error(output.slice(-2000));
  }
  return result.stdout;
}

function dockerRun(args, options) { return run(docker, args, options); }
function composeRun(args) {
  const prefix = compose === docker ? ['compose'] : [];
  return run(compose, [...prefix, '--env-file', environmentPath, '--file', composePath, ...args],
    { env: { ...dockerEnvironment, NODICS_WORKSPACE_ROOT: workspaceRoot } });
}
function readEnvironment() {
  if (!fs.existsSync(environmentPath)) throw new Error('Run docker-local:preflight before resilience operations.');
  return Object.fromEntries(fs.readFileSync(environmentPath, 'utf8').trim().split(/\n/).map(line => {
    const index = line.indexOf('='); return [line.slice(0, index), line.slice(index + 1)];
  }));
}
function sha256(file) { return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'); }
function ensureBackupDirectory(id) {
  const directory = path.join(backupRoot, id);
  fs.mkdirSync(directory, { recursive: true, mode: 0o700 });
  return directory;
}
function archiveVolume(volume, target) {
  run(docker, ['run', '--rm', '--read-only', '--security-opt', 'no-new-privileges:true',
    '-v', `${volume}:/source:ro`, '-v', `${path.dirname(target)}:/backup`, 'alpine:3.22',
    'tar', '-C', '/source', '-czf', `/backup/${path.basename(target)}`, '.']);
}
function restoreVolume(volume, source) {
  run(docker, ['run', '--rm', '--security-opt', 'no-new-privileges:true',
    '-v', `${volume}:/target`, '-v', `${path.dirname(source)}:/backup:ro`, 'alpine:3.22', 'sh', '-c',
    `find /target -mindepth 1 -maxdepth 1 -exec rm -rf -- {} + && tar -C /target -xzf /backup/${path.basename(source)}`]);
}

function backup() {
  const values = readEnvironment();
  const id = new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-');
  const directory = ensureBackupDirectory(id);
  const mongoArchive = path.join(directory, 'mongodb.archive.gz');
  const mongo = dockerRun(['exec', 'nodics-kickoff-docker-local-mongodb-1', 'mongodump', '--quiet', '--gzip', '--archive',
    '--username', values.MONGO_ROOT_USERNAME, '--password', values.MONGO_ROOT_PASSWORD,
    '--authenticationDatabase', 'admin'], { binary: true });
  fs.writeFileSync(mongoArchive, mongo, { mode: 0o600 });
  dockerRun(['exec', 'nodics-kickoff-docker-local-redis-primary-1', 'redis-cli', '-a', values.REDIS_PASSWORD, 'SAVE']);
  archiveVolume('nodics-kickoff-docker-local-redis', path.join(directory, 'redis.tar.gz'));
  archiveVolume('nodics-kickoff-docker-local-media-staged', path.join(directory, 'media-staged.tar.gz'));
  archiveVolume('nodics-kickoff-docker-local-media-online', path.join(directory, 'media-online.tar.gz'));
  const files = fs.readdirSync(directory).filter(name => name !== 'manifest.json').sort();
  const manifest = { contractVersion: 1, environment: 'kickoffDockerLocal', backupId: id,
    createdAt: new Date().toISOString(), consistency: 'MONGODB_LOGICAL_REDIS_SAVE_MEDIA_VOLUME_SNAPSHOT',
    files: files.map(name => ({ name, bytes: fs.statSync(path.join(directory, name)).size, sha256: sha256(path.join(directory, name)) })) };
  fs.writeFileSync(path.join(directory, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, { mode: 0o600 });
  console.log(JSON.stringify(manifest, null, 2));
  return id;
}

function validateBackup(directory) {
  const manifest = JSON.parse(fs.readFileSync(path.join(directory, 'manifest.json'), 'utf8'));
  for (const item of manifest.files) {
    const file = path.join(directory, item.name);
    if (!fs.existsSync(file) || fs.statSync(file).size !== item.bytes || sha256(file) !== item.sha256) {
      throw new Error(`Backup integrity check failed for ${item.name}`);
    }
  }
  return manifest;
}

function restore(id) {
  if (!process.argv.includes('--confirm-replace-docker-local-data')) {
    throw new Error('Restore requires --confirm-replace-docker-local-data.');
  }
  const values = readEnvironment();
  const directory = path.join(backupRoot, id);
  const manifest = validateBackup(directory);
  composeRun(['stop']);
  restoreVolume('nodics-kickoff-docker-local-redis', path.join(directory, 'redis.tar.gz'));
  restoreVolume('nodics-kickoff-docker-local-media-staged', path.join(directory, 'media-staged.tar.gz'));
  restoreVolume('nodics-kickoff-docker-local-media-online', path.join(directory, 'media-online.tar.gz'));
  composeRun(['up', '--detach', 'mongodb']);
  composeRun(['up', '--detach', '--wait', 'mongodb']);
  dockerRun(['exec', '-i', 'nodics-kickoff-docker-local-mongodb-1', 'mongorestore', '--quiet', '--drop', '--gzip', '--archive',
    '--username', values.MONGO_ROOT_USERNAME, '--password', values.MONGO_ROOT_PASSWORD, '--authenticationDatabase', 'admin',
    '--nsExclude', 'admin.*', '--nsExclude', 'config.*', '--nsExclude', 'local.*'],
    { binary: true, input: fs.readFileSync(path.join(directory, 'mongodb.archive.gz')) });
  composeRun(['up', '--detach', '--wait']);
  console.log(JSON.stringify({ contractVersion: 1, environment: 'kickoffDockerLocal', restoredBackupId: manifest.backupId }, null, 2));
}

const command = process.argv[2];
if (command === 'backup') backup();
else if (command === 'verify') console.log(JSON.stringify(validateBackup(path.join(backupRoot, process.argv[3])), null, 2));
else if (command === 'restore') restore(process.argv[3]);
else throw new Error('Usage: docker-local-resilience.mjs backup | verify <id> | restore <id> --confirm-replace-docker-local-data');
