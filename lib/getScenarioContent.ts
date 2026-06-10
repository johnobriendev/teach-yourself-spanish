import contentData from "@/data/scenario-content.json";

type ConversationLine = { speaker: string; es: string; en: string };
type Phrase = { es: string; en: string };

export type PhraseSection = { id: string; title: string; phrases: Phrase[] };

export type ScenarioContent = {
  conversation?: { title: string; lines: ConversationLine[] };
  phraseSections: PhraseSection[];
};

const data = contentData as Record<string, ScenarioContent>;

export function getScenarioContent(slug: string): ScenarioContent | undefined {
  return data[slug];
}
