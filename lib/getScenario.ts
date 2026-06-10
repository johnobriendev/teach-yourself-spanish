import scenariosData from "@/data/scenarios.json";

export type Scenario = {
  slug: string;
  title: string;
};

const scenarios = scenariosData as Scenario[];

export function getScenario(slug: string): Scenario | undefined {
  return scenarios.find((s) => s.slug === slug);
}

export function getAllScenarios(): Scenario[] {
  return scenarios;
}

export function getScenarioSlugs(): string[] {
  return scenarios.map((s) => s.slug);
}
