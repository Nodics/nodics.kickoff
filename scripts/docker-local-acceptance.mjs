#!/usr/bin/env node
/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const values = Object.fromEntries(fs.readFileSync(path.join(projectRoot, 'envs/kickoffDockerLocal/generated/docker.env'), 'utf8')
  .trim().split(/\n/).map(line => { const index = line.indexOf('='); return [line.slice(0, index), line.slice(index + 1)]; }));
const environment = { ...process.env, ...values, NODICS_ACCEPTANCE_RUNTIME: 'kickoffDockerLocal',
  AXIS_PLATFORM_URL: 'http://127.0.0.1:5300', AXIS_WCMS_URL: 'http://127.0.0.1:5312',
  NEXUS_CMS_URL: 'http://127.0.0.1:5314', AXIS_PROCESS_URL: 'http://127.0.0.1:5330',
  AXIS_URL: 'http://127.0.0.1:4100', NEXUS_URL: 'http://127.0.0.1:4200', AXIS_LOGIN_ID: 'admin',
  AXIS_PASSWORD: values.BOOTSTRAP_ADMIN_PASSWORD };
const acceptanceArguments = ['scripts/local-bootstrap-acceptance.mjs', '--leave-started'];
if (process.argv.includes('--expect-documentation-not-installed')) {
  acceptanceArguments.push('--expect-documentation-not-installed');
}
if (process.argv.includes('--qualify-documentation-rollback')) {
  acceptanceArguments.push('--qualify-documentation-rollback');
}
const result = spawnSync(process.execPath, acceptanceArguments,
  { cwd: projectRoot, env: environment, stdio: 'inherit' });
process.exitCode = result.status ?? 1;
