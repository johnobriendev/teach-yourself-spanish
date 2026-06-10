import { notFound } from "next/navigation";
import Link from "next/link";
import { getScenario, getScenarioSlugs, getAllScenarios } from "@/lib/getScenario";
import type { Metadata } from "next";

type Props = { params: Promise<{ topic: string }> };

export async function generateStaticParams() {
  return getScenarioSlugs().map((slug) => ({ topic: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const data = getScenario(topic);
  if (!data) return {};
  return {
    title: `${data.title} | Teach Yourself Spanish`,
    description: `Learn how to handle "${data.title}" in Spanish.`,
  };
}

export default async function TopicPage({ params }: Props) {
  const { topic } = await params;
  const data = getScenario(topic);
  if (!data) notFound();

  const allScenarios = getAllScenarios();
  const currentIndex = allScenarios.findIndex((s) => s.slug === topic);
  const prevScenario = currentIndex > 0 ? allScenarios[currentIndex - 1] : null;
  const nextScenario =
    currentIndex < allScenarios.length - 1 ? allScenarios[currentIndex + 1] : null;

  return (
    <div className="pt-24 pb-20 max-w-3xl mx-auto px-4">
      <div className="mb-4">
        <Link
          href="/conversation"
          className="font-ui text-sm text-muted hover:text-accent transition-colors"
        >
          ← All Scenarios
        </Link>
      </div>

      <article>
        <header className="mb-12 pb-12 border-b border-border">
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-text leading-tight">
            {data.title}
          </h1>
        </header>

        <section className="mb-16">
          <p className="font-body text-lg text-muted leading-relaxed">
            {/* OWNER: add your content for this scenario here */}
            [Owner will write the content for this scenario.]
          </p>
        </section>

        <nav
          className="flex items-center justify-between pt-8 border-t border-border"
          aria-label="Scenario navigation"
        >
          {prevScenario ? (
            <Link
              href={`/conversation/${prevScenario.slug}`}
              className="group flex flex-col items-start gap-1 max-w-[45%]"
            >
              <span className="font-ui text-xs text-muted uppercase tracking-wide">
                Previous
              </span>
              <span className="font-display text-lg font-bold text-accent group-hover:text-accent-dark transition-colors leading-snug">
                ← {prevScenario.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextScenario ? (
            <Link
              href={`/conversation/${nextScenario.slug}`}
              className="group flex flex-col items-end gap-1 max-w-[45%]"
            >
              <span className="font-ui text-xs text-muted uppercase tracking-wide">
                Next
              </span>
              <span className="font-display text-lg font-bold text-accent group-hover:text-accent-dark transition-colors leading-snug text-right">
                {nextScenario.title} →
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </div>
  );
}
