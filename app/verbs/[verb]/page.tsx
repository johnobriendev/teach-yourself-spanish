import { getVerbSlugs } from "@/lib/getVerb";
import type { Metadata } from "next";

type Props = { params: Promise<{ verb: string }> };

export async function generateStaticParams() {
  return getVerbSlugs().map((slug) => ({ verb: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { verb } = await params;
  return {
    title: `How to conjugate ${verb}`,
    description: `Full conjugation tables and usage notes for the Spanish verb ${verb}.`,
  };
}

export default async function VerbPage({ params }: Props) {
  const { verb } = await params;
  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4">
      <p className="font-ui text-muted">
        Verb page for <strong>{verb}</strong> — coming in Step 6.
      </p>
    </div>
  );
}
