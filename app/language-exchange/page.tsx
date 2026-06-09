import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import Sidebar from "@/components/Sidebar";
import CalloutBox from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "Language Exchange Tips | Teach Yourself Spanish",
  description:
    "How to find a language exchange partner, structure your sessions, and get the most out of practising Spanish with a native speaker.",
};

const SIDEBAR_LINKS = [
  { label: "What is a language exchange?", href: "#what-is-it" },
  { label: "Finding a partner", href: "#finding-a-partner" },
  { label: "Structuring sessions", href: "#structuring-sessions" },
  { label: "Online platforms", href: "#platforms" },
  { label: "Getting the most out of it", href: "#getting-the-most" },
  { label: "Common pitfalls", href: "#pitfalls" },
];

export default function LanguageExchangePage() {
  return (
    <>
      <SectionHero
        badge="Speaking"
        title="Language Exchange Tips"
        subtitle="A language exchange partner gives you real conversation practice with a native speaker — for free. Here is how to find one and make every session count."
      />

      <Sidebar links={SIDEBAR_LINKS}>

        {/* ── What is a language exchange? ──────────────────────── */}
        <section id="what-is-it" className="pt-4 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            What is a language exchange?
          </h2>
          {/* OWNER: write your explanation of the concept here — mutual teaching, how the time split works, why it's different from a tutor */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a "why this matters" callout — talking to a real person is irreplaceable */}
            [Owner will write this callout — no app or course can replicate the unpredictability of a real conversation with a native speaker.]
          </CalloutBox>
        </section>

        {/* ── Finding a partner ─────────────────────────────────── */}
        <section id="finding-a-partner" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Finding a partner
          </h2>
          {/* OWNER: write your advice on finding a good match — what to look for, how to write a good profile, where to search */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip about preparing your language exchange profile or first message */}
            [Owner will write this notebook tip — write a short paragraph about yourself in Spanish to use as your profile text and first message template.]
          </CalloutBox>
        </section>

        {/* ── Structuring sessions ──────────────────────────────── */}
        <section id="structuring-sessions" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Structuring your sessions
          </h2>
          {/* OWNER: write your advice on how to divide session time, what topics to prepare, how to give and receive corrections gracefully */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip about preparing before each session */}
            [Owner will write this notebook tip — prepare 3 topics or questions before each session so you always have something to say if the conversation stalls.]
          </CalloutBox>
        </section>

        {/* ── Online platforms ──────────────────────────────────── */}
        <section id="platforms" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Online platforms
          </h2>
          {/* OWNER: write your overview of the main language exchange platforms here — Tandem, HelloTalk, italki community, Conversation Exchange, etc. */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* ── Getting the most out of it ────────────────────────── */}
        <section id="getting-the-most" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Getting the most out of it
          </h2>
          {/* OWNER: write your advice for maximising the value of each session — note-taking during conversation, reviewing after, varying topics */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip about capturing and reviewing what you learn in each session */}
            [Owner will write this notebook tip — after each session write down 5 corrections or new phrases you heard, then review them before the next session.]
          </CalloutBox>
        </section>

        {/* ── Common pitfalls ───────────────────────────────────── */}
        <section id="pitfalls" className="pt-10 pb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Common pitfalls
          </h2>
          {/* OWNER: write about the most common language exchange mistakes — switching to English too soon, not preparing, letting the other person do all the talking */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a callout about keeping exchanges equal and sustainable */}
            [Owner will write this callout — a language exchange only works if both people feel the time is well spent, so small investments in preparation make a big difference to retention.]
          </CalloutBox>
        </section>

      </Sidebar>
    </>
  );
}
