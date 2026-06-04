import wordsData from "@/data/words.json";

export type Word = {
  rank: number;
  spanish: string;
  english: string;
  pos: string;
};

export type PosFilter =
  | "all"
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "preposition"
  | "article"
  | "conjunction"
  | "pronoun"
  | "other";

const words = wordsData as Word[];

export function getWords(page = 1, pos: PosFilter = "all"): Word[] {
  const filtered = pos === "all" ? words : words.filter((w) => w.pos === pos);
  const start = (page - 1) * 100;
  return filtered.slice(start, start + 100);
}

export function getTotalPages(pos: PosFilter = "all"): number {
  const count =
    pos === "all" ? words.length : words.filter((w) => w.pos === pos).length;
  return Math.ceil(count / 100);
}

export function getAllWords(): Word[] {
  return words;
}
