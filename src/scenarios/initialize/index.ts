import { Scenario, ScenarioUrls, ConformanceCheck } from '../../types.js';
import { InitializeTestServer } from './server.js';

export class InitializeScenario implements Scenario {
  name = 'initialize';
  description = 'Tests MCP client initialization handshake';

  private server: InitializeTestServer | null = null;

  async start(): Promise<ScenarioUrls> {
    this.server = new InitializeTestServer();
    const port = await this.server.start();
    return {
      serverUrl: `http://localhost:${port}`
    };
  }

  async stop(): Promise<void> {
    if (this.server) {
      await this.server.stop();
      this.server = null;
    }
  }

  getChecks(): ConformanceCheck[] {
    if (!this.server) {
      return [];
    }
    return this.server.getChecks();
  }
}

export const initializeScenario = new InitializeScenario();
