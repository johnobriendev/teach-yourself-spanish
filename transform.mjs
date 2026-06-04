import { readFileSync, writeFileSync } from "fs";

const posMap = {
  prep: "preposition",
  pron: "pronoun",
  art: "article",
  conj: "conjunction",
  adj: "adjective",
  adv: "adverb",
  verb: "verb",
  v: "verb",
  noun: "noun",
  n: "noun",
  num: "other",
  det: "other",
  interj: "other",
  part: "other",
};

const raw = JSON.parse(readFileSync("raw-words.json", "utf8"));

const words = raw.map(({ rank, spanish, pos, translation }) => ({
  rank,
  spanish,
  english: translation,
  pos: posMap[pos] ?? "other",
}));

writeFileSync("data/words.json", JSON.stringify(words, null, 2));
console.log(`Written ${words.length} words to data/words.json`);
