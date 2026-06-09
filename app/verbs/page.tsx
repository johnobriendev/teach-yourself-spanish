import { getAllVerbs } from "@/lib/getVerb";
import VerbCard from "@/components/VerbCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "55 Essential Spanish Verbs | Teach Yourself Spanish",
  description:
    "Master the 55 most important Spanish verbs with full conjugation tables and usage notes.",
};

export default function VerbsPage() {
  const verbs = getAllVerbs();

  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4">
      <header className="mb-12">
        <h1 className="font-display text-3xl lg:text-5xl font-bold text-text mb-6">
          55 Essential Spanish Verbs
        </h1>
        <p className="font-body text-lg text-muted leading-relaxed max-w-2xl">
          {/* OWNER: write your intro paragraph here */}
          [Owner will write this section — a brief explanation of why these 55
          verbs are the foundation of Spanish and how to use these reference
          pages.]
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {verbs.map((verb) => (
          <VerbCard key={verb.slug} verb={verb} />
        ))}
      </div>
    </div>
  );
}
