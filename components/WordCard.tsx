import type { Word } from "@/lib/getWords";

const posColors: Record<string, string> = {
  noun:        "bg-accent-light text-accent",
  verb:        "bg-gold-light text-gold",
  adjective:   "bg-pink-100 text-pink-700",
  adverb:      "bg-purple-100 text-purple-700",
  preposition: "bg-orange-100 text-orange-700",
  pronoun:     "bg-sky-100 text-sky-700",
  conjunction: "bg-cyan-100 text-cyan-700",
  article:     "bg-indigo-100 text-indigo-700",
  other:       "bg-surface text-muted border border-border",
};

export default function WordCard({ word, isFirst }: { word: Word; isFirst?: boolean }) {
  return (
    <>
      {!isFirst && <div className="col-span-4 h-0 border-t border-border" />}
      <span className="py-3 font-ui text-xs text-muted">{word.rank}</span>
      <span className="py-3 font-body text-lg text-text font-medium" lang="es">
        {word.spanish}
      </span>
      <span className="py-3 font-body text-base text-muted text-center">{word.english}</span>
      <div className="py-3 flex items-center justify-end">
        <span
          className={`font-ui text-xs px-2 py-0.5 rounded-full shrink-0 ${posColors[word.pos] ?? posColors.other}`}
        >
          {word.pos}
        </span>
      </div>
    </>
  );
}
