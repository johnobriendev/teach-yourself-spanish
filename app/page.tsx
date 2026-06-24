import type { Metadata } from "next";
import Image from "next/image";
import johnImage from "@/public/john3.png";
import Button from "@/components/Button";
import CalloutBox from "@/components/CalloutBox";
import TopicCard from "@/components/TopicCard";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Teach Yourself Spanish — Learn Spanish the right way",
  description:
    "Study Spanish the right way.",
  openGraph: {
    title: "Teach Yourself Spanish",
    description:
      "Study Spanish the right way.",
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
    title: "Key Verbs",
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
];

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative lg:min-h-screen flex items-center bg-canvas overflow-hidden">
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
        

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-text leading-[1.05] mb-6 max-w-3xl">
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
            Learning Spanish takes time. But it's worth the effort
          </h2>

          <div className="max-w-prose space-y-6 font-body text-lg leading-relaxed text-text">
            <p>
              {/* Owner will write this section */}
              You log into the app, excited to learn. But you spend half the time watching adds and repeating the same words. 15 minutes a day? Good luck. You're learning at their pace instead of your own.
            </p>
            <p>
              That's why I created Teach Yourself Spanish. Here you learn Spanish at your own pace, as fast or as slow as you want. Learn from someone who has actually learned a language themselves, and has the travel experience to prove it.
            </p>
            <p>
              Stop wasting time following set programs and learn the things you need to know to start communicating and having real conversations with native speakers. Get out of it what you put into it.
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
        className="py-20 lg:py-32 bg-canvas min-h-[80vh] flex items-center"
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
                I&apos;m living proof that you can learn Spanish and use it in
                your everyday life. I have lived in Chile, Argentina, and
                Uruguay and worked in all three countries. I even got work as a
                translator due to my language abilities (both listening and
                speaking). I have tried all the popular learning methods so you
                don&apos;t have to.
              </p>
              <p>
                While a lot of the apps made for learning languages today do
                provide valuable information, they also overwhelm you with ads
                and try to get you to buy their pro version which will
                &ldquo;help you learn better.&rdquo; The reality is, the pro
                version just gives you access to information that&apos;s already
                out there on the web. The only thing that can make you learn a
                language is you! Not an app or learning program.
              </p>
              <p>
                This site is meant to get you directly to the information you
                need to start learning Spanish and using it in your everyday
                life, whether it be to talk to your neighbor or to travel the
                world. Here you will be shown the work ahead of you and how to
                break it up into manageable chunks so that you can continue to
                make progress in your language learning journey.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-4/5 relative bg-canvas isolate">
              <Image
                src={johnImage}
                alt="John"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
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

      {/* ── Section 5: Contact ──────────────────────────────────────────── */}
      <section id="contact" className="py-20 lg:py-32 bg-canvas">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-block font-ui text-xs font-medium text-accent uppercase tracking-widest mb-4">
              Contact
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-text mb-3">
              Have a question?
            </h2>
            <p className="font-body text-lg text-muted leading-relaxed">
              Send me a message and I'll get back to you as soon as I can.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ── Section 6: Final CTA ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-40 bg-accent-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text mb-5">
            Ready to start?
          </h2>
          <p className="font-body text-xl text-muted leading-relaxed mb-10">
            Not sure where to begin? The guide walks you through exactly what
            to tackle first, what order makes sense, and how to use this site
            to make real progress.
          </p>
          <Button as="link" href="/how-to-use-this-guide" size="lg">
            How to use this guide →
          </Button>
        </div>
      </section>
    </>
  );
}
