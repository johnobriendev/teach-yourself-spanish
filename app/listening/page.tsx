import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import Sidebar from "@/components/Sidebar";
import CalloutBox from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "Spanish Listening Tips | Teach Yourself Spanish",
  description:
    "How to train your ear for Spanish — from struggling with native speakers to following films, podcasts, and conversations with ease.",
};

const SIDEBAR_LINKS = [
  { label: "Why listening is hard", href: "#why-its-hard" },
  { label: "Active vs passive listening", href: "#active-vs-passive" },
  { label: "The shadowing technique", href: "#shadowing" },
  { label: "Choosing good resources", href: "#resources" },
  { label: "Taking notes while you listen", href: "#note-taking" },
  { label: "Measuring your progress", href: "#progress" },
];

export default function ListeningPage() {
  return (
    <>
      <SectionHero
        badge="Listening"
        title="Spanish Listening Tips"
        subtitle="Understanding spoken Spanish is one of the hardest skills to develop — and one of the most rewarding. Here is how to train your ear systematically."
      />

      <Sidebar links={SIDEBAR_LINKS}>

        {/* ── Why listening is hard ─────────────────────────────── */}
        <section id="why-its-hard" className="pt-4 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Why listening is hard
          </h2>
          {/* OWNER: write your explanation of why listening comprehension is difficult — connected speech, fast pace, regional accents, dropped syllables */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a "why this matters" callout — understanding the problem is the first step to fixing it */}
            [Owner will write this callout — knowing why native speech sounds so different from textbook Spanish helps you target your practice properly.]
          </CalloutBox>
        </section>

        {/* ── Active vs passive listening ───────────────────────── */}
        <section id="active-vs-passive" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Active vs passive listening
          </h2>
          {/* OWNER: write your explanation of the difference — passive (background TV/music) vs active (focused attention, transcription, replay) */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip for active listening practice */}
            [Owner will write this notebook tip — e.g. after each active listening session, write down 3 new words or phrases you heard and look them up.]
          </CalloutBox>
        </section>

        {/* ── The shadowing technique ───────────────────────────── */}
        <section id="shadowing" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            The shadowing technique
          </h2>
          {/* OWNER: write your explanation of shadowing — what it is, how to do it step by step, why it works for both listening and speaking */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a callout about why shadowing is so effective */}
            [Owner will write this callout — shadowing trains your ear and your mouth at the same time, which is why progress feels so fast.]
          </CalloutBox>
        </section>

        {/* ── Choosing good resources ───────────────────────────── */}
        <section id="resources" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Choosing good listening resources
          </h2>
          {/* OWNER: write your recommendations for listening material at different levels — podcasts, TV shows, YouTube channels, radio, etc. */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip about finding level-appropriate audio */}
            [Owner will write this notebook tip — pick one audio resource at your level and stick with it long enough to get used to the speaker's voice and vocabulary.]
          </CalloutBox>
        </section>

        {/* ── Taking notes while you listen ────────────────────── */}
        <section id="note-taking" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Taking notes while you listen
          </h2>
          {/* OWNER: write your advice on how to use a notebook during or after listening practice — capturing new vocabulary, sentences, patterns */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* ── Measuring your progress ───────────────────────────── */}
        <section id="progress" className="pt-10 pb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Measuring your progress
          </h2>
          {/* OWNER: write your advice on how to notice and celebrate listening improvement — re-listening to old material, comprehension benchmarks */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip about tracking listening progress */}
            [Owner will write this notebook tip — e.g. re-listen to something you heard a month ago and write down how much more you understand now.]
          </CalloutBox>
        </section>

      </Sidebar>
    </>
  );
}
