import { Scenario } from '../types.js';
import { initializeScenario } from './initialize/index.js';

export const scenarios = new Map<string, Scenario>([
  ['initialize', initializeScenario],
]);

export function registerScenario(name: string, scenario: Scenario): void {
  scenarios.set(name, scenario);
}

export function getScenario(name: string): Scenario | undefined {
  return scenarios.get(name);
}

export function listScenarios(): string[] {
  return Array.from(scenarios.keys());
}
