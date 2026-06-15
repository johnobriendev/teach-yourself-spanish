import contentData from "@/data/scenario-content.json";

type ConversationLine = { speaker: string; es: string; en: string };
type Phrase = { es: string; en: string };

export type PhraseSection = { id: string; title: string; phrases: Phrase[] };

type UsefulExpression = {
  term: string;
  description: string;
  examples: Phrase[];
  note?: string;
};

type QuickReferenceRow = { expression: string; meaning: string; example: string };

export type UsefulExpressionsSection = {
  title: string;
  expressions: UsefulExpression[];
  quickReference: QuickReferenceRow[];
};

export type ScenarioContent = {
  conversation?: { title: string; lines: ConversationLine[] };
  phraseSections: PhraseSection[];
  usefulExpressions?: UsefulExpressionsSection;
};

const data = contentData as Record<string, ScenarioContent>;

export function getScenarioContent(slug: string): ScenarioContent | undefined {
  return data[slug];
}
