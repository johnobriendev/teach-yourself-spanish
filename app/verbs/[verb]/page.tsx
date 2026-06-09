import { notFound } from "next/navigation";
import Link from "next/link";
import { getVerb, getVerbSlugs, getAllVerbs } from "@/lib/getVerb";
import Sidebar from "@/components/Sidebar";
import ConjugationTable from "@/components/ConjugationTable";
import type { Metadata } from "next";

type Props = { params: Promise<{ verb: string }> };

const TENSE_LABELS: Record<string, string> = {
  present: "Present (Presente)",
  preterite: "Preterite (Pretérito Indefinido)",
  imperfect: "Imperfect (Pretérito Imperfecto)",
  future: "Future (Futuro Simple)",
  conditional: "Conditional (Condicional Simple)",
  subjunctive_present: "Present Subjunctive (Subjuntivo Presente)",
};

const TENSE_IDS: Record<string, string> = {
  present: "present",
  preterite: "preterite",
  imperfect: "imperfect",
  future: "future",
  conditional: "conditional",
  subjunctive_present: "subjunctive",
};

export async function generateStaticParams() {
  return getVerbSlugs().map((slug) => ({ verb: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { verb } = await params;
  const data = getVerb(verb);
  if (!data) return {};
  return {
    title: `How to Conjugate "${data.infinitive}" | Teach Yourself Spanish`,
    description: `Full conjugation tables and usage notes for the Spanish verb ${data.infinitive} — ${data.english}.`,
  };
}

export default async function VerbPage({ params }: Props) {
  const { verb } = await params;
  const data = getVerb(verb);
  if (!data) notFound();

  const allVerbs = getAllVerbs();
  const currentIndex = allVerbs.findIndex((v) => v.slug === verb);
  const prevVerb = currentIndex > 0 ? allVerbs[currentIndex - 1] : null;
  const nextVerb =
    currentIndex < allVerbs.length - 1 ? allVerbs[currentIndex + 1] : null;

  const sidebarLinks = [
    { label: "Overview", href: "#overview" },
    ...Object.entries(TENSE_IDS).map(([key, id]) => ({
      label: TENSE_LABELS[key].split(" (")[0],
      href: `#${id}`,
    })),
    { label: "Notes & Usage", href: "#notes" },
    { label: "Examples", href: "#examples" },
  ];

  return (
    <div className="pt-16">
      <Sidebar links={sidebarLinks}>
        <article className="pb-20">
          {/* Hero / Overview */}
          <section id="overview" className="mb-12 pb-12 border-b border-border">
            <div className="flex flex-wrap items-start gap-4 mb-4">
              <h1
                className="font-display text-5xl lg:text-7xl font-bold text-text"
                lang="es"
              >
                {data.infinitive}
              </h1>
              <span
                className={`mt-3 font-ui text-sm px-3 py-1 rounded-full self-start ${
                  data.type === "irregular"
                    ? "bg-gold-light text-gold"
                    : "bg-accent-light text-accent"
                }`}
              >
                {data.type}
              </span>
            </div>
            <p className="font-body text-xl text-muted mb-8">{data.english}</p>

            {/* OWNER: write your overview for {data.infinitive} here */}
            <p className="font-body text-lg text-muted leading-relaxed">
              [Owner will write an overview of this verb — when to use it, what
              makes it notable, and any key points to know before studying the
              conjugation tables.]
            </p>
          </section>

          {/* Conjugation tables */}
          {(
            Object.entries(data.conjugations) as [
              keyof typeof TENSE_LABELS,
              (typeof data.conjugations)[keyof typeof data.conjugations],
            ][]
          ).map(([tense, conjugation]) => (
            <section
              key={tense}
              id={TENSE_IDS[tense]}
              className="mb-12 scroll-mt-24"
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-text mb-2">
                {TENSE_LABELS[tense]}
              </h2>
              {/* OWNER: add a sentence or two about this tense in the context of {data.infinitive} */}
              <ConjugationTable tense={TENSE_LABELS[tense]} data={conjugation} />
            </section>
          ))}

          {/* Notes & Usage */}
          <section
            id="notes"
            className="mb-12 scroll-mt-24 pt-4 border-t border-border"
          >
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-text mb-4">
              Notes &amp; Usage
            </h2>
            {/* OWNER: write your notes for {data.infinitive} here */}
            <p className="font-body text-lg text-muted leading-relaxed">
              [Owner will write usage notes here — common patterns, pitfalls,
              regional differences, and tips for remembering this verb.]
            </p>
          </section>

          {/* Examples */}
          <section
            id="examples"
            className="mb-16 scroll-mt-24 pt-4 border-t border-border"
          >
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-text mb-4">
              Examples
            </h2>
            {/* OWNER: write example sentences for {data.infinitive} here */}
            <p className="font-body text-lg text-muted leading-relaxed">
              [Owner will write example sentences here.]
            </p>
          </section>

          {/* Prev / Next navigation */}
          <nav
            className="flex items-center justify-between pt-8 border-t border-border"
            aria-label="Verb navigation"
          >
            {prevVerb ? (
              <Link
                href={`/verbs/${prevVerb.slug}`}
                className="group flex flex-col items-start gap-1"
              >
                <span className="font-ui text-xs text-muted uppercase tracking-wide">
                  Previous
                </span>
                <span
                  className="font-display text-xl font-bold text-accent group-hover:text-accent-dark transition-colors"
                  lang="es"
                >
                  ← {prevVerb.infinitive}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextVerb ? (
              <Link
                href={`/verbs/${nextVerb.slug}`}
                className="group flex flex-col items-end gap-1"
              >
                <span className="font-ui text-xs text-muted uppercase tracking-wide">
                  Next
                </span>
                <span
                  className="font-display text-xl font-bold text-accent group-hover:text-accent-dark transition-colors"
                  lang="es"
                >
                  {nextVerb.infinitive} →
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </article>
      </Sidebar>
    </div>
  );
}
