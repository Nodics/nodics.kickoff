/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = fileURLToPath(new URL('..', import.meta.url));
const require = createRequire(import.meta.url);
const scripts = require('../package.json').scripts;
const foundation = path.dirname(require.resolve('nodics.foundation/package.json'));
const registry = require(path.join(foundation, 'modules/nTooling/src/service/defaultToolingCommandService')).loadCommands(root);
const commands = require(path.join(foundation, 'modules/nTooling/src/service/command/defaultProjectCommandService')).resolveCommands(root);

test('project verification includes its configuration, Commerce and Circa adoption tests', () => {
  const steps = scripts.test.split(' && ');
  assert(steps.includes('npm run test:qualification'));
  assert(scripts['test:qualification'].split(/\s+/).includes('test/configurationInheritanceContract.test.js'));
  assert(steps.includes('npm run test:agora-commerce'));
  assert(steps.includes('npm run test:circa'));
  assert(steps.includes('npm run test:multi-domain'));
  for (const file of [
    'test/applicationConfigurationOwnershipContract.test.js',
    'test/localPublishingRouteSecurityMatrix.test.js',
    'test/communicationActivationDataContract.test.js',
    'test/loyaltyRuntimeCompositionContract.test.js',
    'test/wasteRuntimeCompositionContract.test.js',
    'test/dockerLocalRuntimePrepare.test.js',
    'modules/kickoffInt/test/editorialProcessAdapterContract.test.mjs',
  ]) assert(scripts['test:qualification'].split(/\s+/).includes(file), file);
  assert.equal(scripts['test:circa'], 'npm test --prefix modules/circa.ewaste');
  const workflow = fs.readFileSync(path.join(root, '.github/workflows/verification.yml'), 'utf8');
  assert(workflow.includes('ref: ${{ vars.NODICS_FRAMEWORK_SHA }}'));
  assert(workflow.includes('NODICS_FRAMEWORK_SHA: ${{ vars.NODICS_FRAMEWORK_SHA }}'));
  assert(workflow.includes('[[ ! "$NODICS_FRAMEWORK_SHA" =~ ^[0-9a-fA-F]{40}$ ]]'));
  assert(workflow.indexOf('name: Validate framework revision') < workflow.indexOf('name: Checkout selected Nodics framework commit'));
  assert(workflow.includes('run: npm test'));
  assert(!workflow.includes('ref: feature/'));
});

test('reference project adopts complete owner suites without local implementations', () => {
  const aliases = {
    'acceptance:agora-commerce': 'acceptance:commerce-journey',
    'acceptance:agora-commerce-publication': 'acceptance:commerce-publication',
    'qualification:agora-commerce:live': 'qualification:commerce-live',
    'acceptance:waste-backoffice-discovery': 'acceptance:waste-backoffice',
    'acceptance:waste-management': 'acceptance:waste-management',
    'acceptance:loyalty-reward-checkout': 'acceptance:loyalty-reward-checkout',
    'acceptance:local': 'acceptance:local',
    'acceptance:functional': 'acceptance:functional',
    'acceptance:editorial-live': 'acceptance:editorial-live',
    'acceptance:runtime-grants': 'acceptance:runtime-grants',
    'acceptance:capability-registry': 'acceptance:capability-registry',
    'acceptance:guided-initialization': 'acceptance:guided-initialization',
    'qualification:deployment': 'qualification:deployment',
  };
  for (const [alias, command] of Object.entries(aliases)) {
    assert.equal(scripts[alias], 'nodics project:run ' + command);
    assert.equal(registry[command].acceptanceContract, true, command);
    assert(!registry[command].sourcePath.startsWith(root), command);
    assert.equal(commands[command].type, 'frameworkCommand', command);
    assert.equal(commands[command].home, 'project', command);
    assert.equal(commands[command].command, command);
  }
  const directory = path.join(root, 'scripts/acceptance');
  assert.deepEqual(fs.existsSync(directory) ? fs.readdirSync(directory).filter(file => file.endsWith('Service.mjs')) : [], []);
});

test('project uses canonical qualification, fresh-reset and configuration-placement gates', () => {
  assert.equal(scripts['nexus:test'], 'nodics nexus:check');
  assert.equal(scripts['qualification:deployment:local'], 'nodics project:run qualification:deployment:local');
  assert.deepEqual(commands['qualification:deployment:local'].args, ['--execute-local']);
  assert.equal(scripts['acceptance:local:fresh'], 'nodics project:run acceptance:local:fresh');
  assert.equal(commands['acceptance:local:fresh'].command, 'acceptance:local');
  assert.equal(commands['acceptance:local:fresh'].type, 'frameworkCommand');
  assert.deepEqual(commands['acceptance:local:fresh'].args, ['--drop-local-db', '--start-runtimes']);
  assert.equal(fs.existsSync(path.join(root, 'nodics.project.json')), false);
  const failures = [];
  require(path.join(foundation, 'modules/nTooling/src/service/quality/defaultDesignPrincipleAuditService'))
    .auditConfigurationSources(failures, root, { customerProject: true });
  assert.deepEqual(failures, [], failures.join('\n'));
});

test('media and data aliases retain application selectors only', () => {
  for (const name of ['acceptance:media-seed', 'acceptance:staged-sample-data']) {
    assert.equal(commands[name].type, 'frameworkCommand');
    assert.equal(commands[name].home, 'project');
  }
  assert.equal(scripts['acceptance:agora-cms-media-seed'],
    'nodics project:run acceptance:media-seed --manifest-modules=agora.apparel,agora.electronics,agora.telco');
  assert.equal(scripts['acceptance:nexus-cms-media-seed'],
    'nodics project:run acceptance:media-seed --manifest-modules=nexus.web');
  assert.equal(scripts['acceptance:agora-commerce-data'],
    'nodics project:run acceptance:staged-sample-data --target-role=COMMERCE_STAGED --release-modules=agora.apparel,agora.electronics,agora.telco');
});
