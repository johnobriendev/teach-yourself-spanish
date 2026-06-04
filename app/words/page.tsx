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

const POS_FILTERS: { label: string; value: PosFilter }[] = [
  { label: "All",          value: "all" },
  { label: "Nouns",        value: "noun" },
  { label: "Verbs",        value: "verb" },
  { label: "Adjectives",   value: "adjective" },
  { label: "Adverbs",      value: "adverb" },
  { label: "Prepositions", value: "preposition" },
  { label: "Pronouns",     value: "pronoun" },
  { label: "Conjunctions", value: "conjunction" },
  { label: "Articles",     value: "article" },
  { label: "Other",        value: "other" },
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
          {POS_FILTERS.map(({ label, value }) => (
            <Link
              key={value}
              href={`/words?pos=${value}&page=1`}
              className={`px-3 py-1.5 rounded-full font-ui text-sm transition-colors ${
                pos === value
                  ? "bg-accent text-white"
                  : "bg-surface text-muted border border-border hover:text-accent hover:bg-accent-light"
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
