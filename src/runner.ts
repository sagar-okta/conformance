import { createClientInitializationCheck, createServerInfoCheck } from './checks.ts';

const initializeRequest = {
  protocolVersion: '2025-06-18',
  clientInfo: {
    name: 'ExampleClient',
    version: '1.0.0'
  }
};

const checks = [
  createClientInitializationCheck(initializeRequest),
  createServerInfoCheck({
    name: 'ExampleMCPServer',
    version: '1.0.0'
  })
];

console.log(JSON.stringify(checks, null, 2));
