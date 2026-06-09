import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import Sidebar from "@/components/Sidebar";
import CalloutBox from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "How to Study Spanish | Teach Yourself Spanish",
  description:
    "The notebook method and other strategies for studying Spanish effectively — how to structure your time, what to review, and how to build lasting habits.",
};

const SIDEBAR_LINKS = [
  { label: "The notebook method", href: "#notebook-method" },
  { label: "Daily practice", href: "#daily-practice" },
  { label: "Reading Spanish", href: "#reading" },
  { label: "Spaced repetition", href: "#spaced-repetition" },
  { label: "Reviewing what you've learned", href: "#reviewing" },
  { label: "Building a routine", href: "#routine" },
];

export default function HowToStudyPage() {
  return (
    <>
      <SectionHero
        badge="Method"
        title="How to Study Spanish"
        subtitle="There is no shortcut, but there is a smarter way. This page explains the approach behind this site — low-tech, high-consistency, and grounded in how memory actually works."
      />

      <Sidebar links={SIDEBAR_LINKS}>

        {/* ── The notebook method ───────────────────────────────── */}
        <section id="notebook-method" className="pt-4 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            The notebook method
          </h2>
          {/* OWNER: write your core explanation of the notebook method here — what it is, why handwriting beats apps, how to set up your notebook */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a "why this matters" callout — the case for writing by hand over typing */}
            [Owner will write this callout — why writing by hand creates stronger memory traces than typing or swiping.]
          </CalloutBox>
        </section>

        {/* ── Daily practice ────────────────────────────────────── */}
        <section id="daily-practice" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Daily practice
          </h2>
          {/* OWNER: write your advice on daily practice — how long, what to do in a short session, the power of consistency over intensity */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip for daily practice */}
            [Owner will write this notebook tip — e.g. keep your notebook and a pen visible on your desk so there is zero friction to opening it.]
          </CalloutBox>
        </section>

        {/* ── Reading Spanish ───────────────────────────────────── */}
        <section id="reading" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Reading Spanish
          </h2>
          {/* OWNER: write your advice on extensive reading — when to look up words, how to choose level-appropriate texts, the role of graded readers */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a callout about why reading is the highest-leverage habit */}
            [Owner will write this callout — reading exposes you to vocabulary in context at a pace you control, which is why it compounds faster than almost anything else.]
          </CalloutBox>
        </section>

        {/* ── Spaced repetition ─────────────────────────────────── */}
        <section id="spaced-repetition" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Spaced repetition
          </h2>
          {/* OWNER: write your explanation of spaced repetition — how the forgetting curve works, how to apply the principle without an app, notebook-based SRS */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip for manual spaced repetition */}
            [Owner will write this notebook tip — e.g. use a simple 3-box system in your notebook: new words, words you're learning, and words you know.]
          </CalloutBox>
        </section>

        {/* ── Reviewing what you've learned ────────────────────── */}
        <section id="reviewing" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Reviewing what you&rsquo;ve learned
          </h2>
          {/* OWNER: write your advice on structured review — weekly review sessions, how to revisit old notebook pages, what to do when you've forgotten something */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* ── Building a routine ────────────────────────────────── */}
        <section id="routine" className="pt-10 pb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Building a study routine
          </h2>
          {/* OWNER: write your advice on building a sustainable habit — habit stacking, choosing a consistent time, what to do when motivation dips */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip about planning your study routine */}
            [Owner will write this notebook tip — e.g. write your weekly study plan on Sunday evening and treat it like any other appointment.]
          </CalloutBox>
        </section>

      </Sidebar>
    </>
  );
}
