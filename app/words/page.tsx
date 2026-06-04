import type { Metadata } from "next";
import Link from "next/link";
import SectionHero from "@/components/SectionHero";
import WordList from "@/components/WordList";
import Pagination from "@/components/Pagination";
import { getWords, getTotalPages, type PosFilter } from "@/lib/getWords";

export const metadata: Metadata = {
  title: "The 1000 Most Common Spanish Words",
  description:
    "Browse and study the 1000 most common Spanish words, filterable by part of speech.",
};

const POS_FILTERS: { label: string; value: PosFilter; active: string; inactive: string }[] = [
  { label: "All",          value: "all",         active: "bg-accent text-white",       inactive: "bg-accent-light text-accent border border-accent/30 hover:bg-accent hover:text-white" },
  { label: "Nouns",        value: "noun",        active: "bg-accent text-white",       inactive: "bg-accent-light text-accent border border-accent/30 hover:bg-accent hover:text-white" },
  { label: "Verbs",        value: "verb",        active: "bg-gold text-white",         inactive: "bg-gold-light text-gold border border-gold/30 hover:bg-gold hover:text-white" },
  { label: "Adjectives",   value: "adjective",   active: "bg-pink-600 text-white",     inactive: "bg-pink-100 text-pink-700 border border-pink-300 hover:bg-pink-600 hover:text-white" },
  { label: "Adverbs",      value: "adverb",      active: "bg-purple-600 text-white",   inactive: "bg-purple-100 text-purple-700 border border-purple-300 hover:bg-purple-600 hover:text-white" },
  { label: "Prepositions", value: "preposition", active: "bg-orange-500 text-white",   inactive: "bg-orange-100 text-orange-700 border border-orange-300 hover:bg-orange-500 hover:text-white" },
  { label: "Pronouns",     value: "pronoun",     active: "bg-sky-600 text-white",      inactive: "bg-sky-100 text-sky-700 border border-sky-300 hover:bg-sky-600 hover:text-white" },
  { label: "Conjunctions", value: "conjunction", active: "bg-cyan-600 text-white",     inactive: "bg-cyan-100 text-cyan-700 border border-cyan-300 hover:bg-cyan-600 hover:text-white" },
  { label: "Articles",     value: "article",     active: "bg-indigo-600 text-white",   inactive: "bg-indigo-100 text-indigo-700 border border-indigo-300 hover:bg-indigo-600 hover:text-white" },
  { label: "Other",        value: "other",       active: "bg-zinc-500 text-white",     inactive: "bg-zinc-100 text-zinc-600 border border-zinc-300 hover:bg-zinc-500 hover:text-white" },
];

type Props = {
  searchParams: Promise<{ page?: string; pos?: string }>;
};

export default async function WordsPage({ searchParams }: Props) {
  const { page: pageParam, pos: posParam } = await searchParams;

  const pos = (POS_FILTERS.find((f) => f.value === posParam)?.value ?? "all") as PosFilter;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const words = getWords(page, pos);
  const totalPages = getTotalPages(pos);

  return (
    <>
      <SectionHero
        badge="Vocabulary"
        title="1000 Most Common Spanish Words"
        subtitle="The words that make up 90% of everyday Spanish. Filter by part of speech or browse them all."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Part-of-speech filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {POS_FILTERS.map(({ label, value, active, inactive }) => (
            <Link
              key={value}
              href={`/words?pos=${value}&page=1`}
              className={`px-3 py-1.5 rounded-full font-ui text-sm transition-colors ${
                pos === value ? active : inactive
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <WordList words={words} />

        {totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            basePath={`/words?pos=${pos}`}
          />
        )}
      </div>
    </>
  );
}
