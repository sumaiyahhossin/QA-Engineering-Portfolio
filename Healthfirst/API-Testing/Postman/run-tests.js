const { spawn } = require('node:child_process');

const server = spawn(process.execPath, ['server.js'], {
  stdio: ['ignore', 'pipe', 'inherit'],
});
let started = false;

const startupTimeout = setTimeout(() => {
  console.error('The demo API did not start within 5 seconds.');
  server.kill();
  process.exitCode = 1;
}, 5000);

server.on('error', (error) => {
  clearTimeout(startupTimeout);
  console.error(error);
  process.exitCode = 1;
});

server.on('exit', () => {
  if (!started) {
    clearTimeout(startupTimeout);
    process.exitCode = 1;
  }
});

let startupOutput = '';
server.stdout.on('data', (chunk) => {
  process.stdout.write(chunk);
  if (started) return;
  startupOutput += chunk;
  if (!startupOutput.includes('Demo API listening')) return;

  started = true;
  clearTimeout(startupTimeout);
  const tests = spawn(process.execPath, [
    require.resolve('newman/bin/newman.js'),
    'run',
    'Healthcare_API.postman_collection.json',
  ], { stdio: 'inherit' });

  tests.on('error', (error) => {
    console.error(error);
    process.exitCode = 1;
    server.kill();
  });
  tests.on('exit', (code) => {
    process.exitCode = code ?? 1;
    server.kill();
  });
});
