import type { Word } from "@/lib/getWords";
import WordCard from "./WordCard";

export default function WordList({ words }: { words: Word[] }) {
  return (
    <div className="grid grid-cols-[2rem_auto_1fr_auto] items-center gap-x-4">
      {words.map((word, i) => (
        <WordCard key={word.rank} word={word} isFirst={i === 0} />
      ))}
    </div>
  );
}
