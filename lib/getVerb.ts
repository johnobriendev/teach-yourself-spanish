import verbsData from "@/data/verbs.json";

export type Conjugation = {
  yo: string;
  "tú": string;
  "él/ella": string;
  nosotros: string;
  vosotros: string;
  "ellos/ellas": string;
};

export type Example = { es: string; en: string };

export type Verb = {
  slug: string;
  infinitive: string;
  english: string;
  type: "regular" | "irregular";
  conjugations: {
    present: Conjugation;
    preterite: Conjugation;
    imperfect: Conjugation;
    future: Conjugation;
    conditional: Conjugation;
    subjunctive_present: Conjugation;
  };
  overview: string;
  notes: string[];
  examples: Example[];
};

const verbs = verbsData as Verb[];

export function getVerb(slug: string): Verb | undefined {
  return verbs.find((v) => v.slug === slug);
}

export function getAllVerbs(): Verb[] {
  return verbs;
}

export function getVerbSlugs(): string[] {
  return verbs.map((v) => v.slug);
}
