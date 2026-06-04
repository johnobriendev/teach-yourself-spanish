import type { Metadata } from "next";
import Button from "@/components/Button";
import CalloutBox from "@/components/CalloutBox";
import TopicCard from "@/components/TopicCard";

export const metadata: Metadata = {
  title: "Teach Yourself Spanish — Learn Spanish the right way",
  description:
    "No apps. No streaks. No gamification. Learn Spanish through reading, understanding, and writing it down.",
  openGraph: {
    title: "Teach Yourself Spanish",
    description:
      "No apps. No streaks. No gamification. Learn Spanish through reading, understanding, and writing it down.",
  },
};

const TOPICS = [
  {
    title: "1000 Most Common Words",
    description:
      "The foundation of fluency. Master the words that make up 90% of everyday Spanish.",
    href: "/words",
  },
  {
    title: "14 Spanish Tenses",
    description:
      "From the present tense to the subjunctive — every tense explained clearly with examples.",
    href: "/tenses",
  },
  {
    title: "20 Key Verbs",
    description:
      "The most-used Spanish verbs, fully conjugated and explained in plain English.",
    href: "/verbs",
  },
  {
    title: "Regular vs Irregular",
    description:
      "Understand the rules — and the exceptions — that shape how Spanish verbs work.",
    href: "/regular-vs-irregular",
  },
  {
    title: "Conversation Tips",
    description:
      "How to hold a real conversation in Spanish, even as a complete beginner.",
    href: "/conversation",
  },
  {
    title: "Listening Tips",
    description:
      "Train your ear to understand native speakers at natural speed.",
    href: "/listening",
  },
  {
    title: "How to Study",
    description:
      "The notebook method and how to structure your daily practice for real progress.",
    href: "/how-to-study",
  },
  {
    title: "Language Exchange",
    description:
      "Find a partner and practise real Spanish with real people, for free.",
    href: "/language-exchange",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-base overflow-hidden">
        {/* Decorative faded Spanish text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden select-none pointer-events-none"
        >
          <span className="absolute top-1/2 -translate-y-[45%] -right-8 sm:-right-4 lg:right-4 font-display text-[22vw] font-bold leading-none text-accent opacity-[0.045]">
            hablar
          </span>
          <span className="absolute bottom-0 -left-6 sm:-left-2 font-display text-[14vw] font-bold leading-none text-accent opacity-[0.04]">
            aprender
          </span>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-24">
        

          <h1 className="font-display text-5xl lg:text-7xl font-bold text-text leading-[1.05] mb-6 max-w-3xl">
            Trying to Learn Spanish? 
          </h1>

          <p className="font-body text-xl text-muted leading-relaxed max-w-xl">
            Have you been learning with the apps and still can't have a conversation?
          </p>
        </div>

        {/* Bottom fade to next section */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-surface to-transparent"
        />
      </section>

      {/* ── Section 2: The method ────────────────────────────────────────── */}
      <section id="method" className="py-20 lg:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text mb-10">
            I've been there
          </h2>

          <div className="max-w-prose space-y-6 font-body text-lg leading-relaxed text-text">
            <p>
              {/* Owner will write this section */}
              You log into the app, excited to learn. But you spend half the time watching adds and repeating the same words. You're learning at their pace instead of your own.
            </p>
            <p>
              That's why I created Teach Yourself Spanish. Here you learn Spanish at your own pace, as fast or as slow as you want. Learn from someone who has actually learned a language themselves, and has the travel experience to prove it.
            </p>
            <p>
              Stop wasting time following set programs and learn the things you need to know to start communicating and having real conversations with native speakers.
            </p>
          
          </div>

          <CalloutBox variant="shortcuts">
            <p>
              {/* Owner will write this tip */}
              Learn shortcuts that can help you skip the unnecessary fluff and get right to the important parts of language learning.
            </p>
          </CalloutBox>
        </div>
      </section>

      {/* ── Section 3: About ─────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-20 lg:py-32 bg-base min-h-[80vh] flex items-center"
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Text */}
          <div className="mb-12 lg:mb-0">
            <span className="inline-block font-ui text-xs font-medium text-accent uppercase tracking-widest mb-4">
              About
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-text mb-6">
              {/* Owner will write heading */}
              I'm John. I taught myself Spanish and have traveled the world with it
            </h2>
            <div className="space-y-5 font-body text-lg leading-relaxed text-text">
              <p>
                {/* Owner will write this section */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis.
              </p>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="relative">
            <div className="rounded-2xl bg-surface border border-border aspect-[4/5] flex flex-col items-center justify-center gap-3">
              {/* Owner will provide photo */}
              <svg
                className="w-12 h-12 text-border"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <p className="font-ui text-sm text-muted text-center px-8">
                Owner will provide photo
              </p>
            </div>
            {/* Decorative offset border */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 rounded-2xl border border-accent/20 inset-0 -z-10"
            />
          </div>
        </div>
      </section>

      {/* ── Section 4: Topic grid ────────────────────────────────────────── */}
      <section className="py-20 lg:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10 lg:mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-text mb-3">
              What&apos;s on the site
            </h2>
            <p className="font-body text-lg text-muted max-w-xl">
              Everything you need to teach yourself Spanish, from vocabulary to
              grammar to real-world practice.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {TOPICS.map((topic) => (
              <TopicCard key={topic.href} {...topic} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Final CTA ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-40 bg-accent-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text mb-5">
            Ready to start?
          </h2>
          <p className="font-body text-xl text-muted leading-relaxed mb-10">
            Begin with the 1000 most common Spanish words. You can read through
            the whole list in under an hour — and it will change what you hear
            and read in Spanish forever.
          </p>
          <Button as="link" href="/words" size="lg">
            Start with the 1000 words →
          </Button>
        </div>
      </section>
    </>
  );
}
