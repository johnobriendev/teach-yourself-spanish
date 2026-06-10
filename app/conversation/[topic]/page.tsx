import { notFound } from "next/navigation";
import Link from "next/link";
import { getScenario, getScenarioSlugs, getAllScenarios } from "@/lib/getScenario";
import { getScenarioContent } from "@/lib/getScenarioContent";
import Sidebar from "@/components/Sidebar";
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

  const content = getScenarioContent(topic);

  const allScenarios = getAllScenarios();
  const currentIndex = allScenarios.findIndex((s) => s.slug === topic);
  const prevScenario = currentIndex > 0 ? allScenarios[currentIndex - 1] : null;
  const nextScenario =
    currentIndex < allScenarios.length - 1 ? allScenarios[currentIndex + 1] : null;

  const prevNext = (
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
  );

  if (!content) {
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
          {prevNext}
        </article>
      </div>
    );
  }

  const sidebarLinks = [
    ...(content.conversation ? [{ label: "Conversation", href: "#conversation" }] : []),
    ...content.phraseSections.map((s) => ({ label: s.title.split(" ")[0], href: `#${s.id}` })),
  ];

  return (
    <div className="pt-16">
      <Sidebar links={sidebarLinks}>
        <article className="pb-20">
          <header className="mb-12 pb-12 border-b border-border">
            <div className="mb-4">
              <Link
                href="/conversation"
                className="font-ui text-sm text-muted hover:text-accent transition-colors"
              >
                ← All Scenarios
              </Link>
            </div>
            <h1 className="font-display text-3xl lg:text-5xl font-bold text-text leading-tight">
              {data.title}
            </h1>
          </header>

          {content.conversation && (
            <section id="conversation" className="mb-16 scroll-mt-24">
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-text mb-6">
                {content.conversation.title}
              </h2>
              <div className="grid grid-cols-2 gap-8 pb-2 mb-4 border-b border-border">
                <span className="font-ui text-xs font-medium text-muted uppercase tracking-wide">
                  Spanish
                </span>
                <span className="font-ui text-xs font-medium text-muted uppercase tracking-wide">
                  English
                </span>
              </div>
              <div className="space-y-6">
                {content.conversation.lines.map((line, i) => (
                  <div key={i} className="grid grid-cols-2 gap-8">
                    <div>
                      <span className="font-ui text-xs font-semibold text-accent uppercase tracking-wide block mb-1">
                        {line.speaker}
                      </span>
                      <p className="font-body text-lg text-text" lang="es">
                        {line.es}
                      </p>
                    </div>
                    <p className="font-body text-lg text-muted pt-5">{line.en}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {content.phraseSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-16 scroll-mt-24 pt-6 border-t border-border"
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-text mb-6">
                {section.title}
              </h2>
              <div className="grid grid-cols-2 gap-8 pb-2 mb-2 border-b border-border">
                <span className="font-ui text-xs font-medium text-muted uppercase tracking-wide">
                  Spanish
                </span>
                <span className="font-ui text-xs font-medium text-muted uppercase tracking-wide">
                  English
                </span>
              </div>
              <div>
                {section.phrases.map((phrase, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-2 gap-8 py-3 border-b border-border/50 last:border-0"
                  >
                    <span className="font-body text-lg text-text" lang="es">
                      {phrase.es}
                    </span>
                    <span className="font-body text-lg text-muted">{phrase.en}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {prevNext}
        </article>
      </Sidebar>
    </div>
  );
}
