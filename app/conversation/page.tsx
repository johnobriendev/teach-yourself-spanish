import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import Sidebar from "@/components/Sidebar";
import CalloutBox from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "Spanish Conversation Tips | Teach Yourself Spanish",
  description:
    "Practical strategies for building confidence in Spanish conversation — from your first sentences to keeping a real exchange flowing.",
};

const SIDEBAR_LINKS = [
  { label: "Getting started", href: "#getting-started" },
  { label: "Essential phrases", href: "#essential-phrases" },
  { label: "Keeping it going", href: "#keeping-it-going" },
  { label: "Common mistakes", href: "#common-mistakes" },
  { label: "Dealing with nerves", href: "#dealing-with-nerves" },
  { label: "Building fluency", href: "#building-fluency" },
];

export default function ConversationPage() {
  return (
    <>
      <SectionHero
        badge="Speaking"
        title="Spanish Conversation Tips"
        subtitle="Conversation is where the language comes alive. Here is how to get talking sooner, make fewer mistakes, and keep improving every time you open your mouth."
      />

      <Sidebar links={SIDEBAR_LINKS}>

        {/* ── Getting started ───────────────────────────────────── */}
        <section id="getting-started" className="pt-4 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Getting started
          </h2>
          {/* OWNER: write your advice for absolute beginners here — when to start speaking, how to push past the "I'm not ready" feeling */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a "why this matters" callout — speaking early accelerates everything else */}
            [Owner will write this callout — why starting to speak before you feel ready is one of the best things you can do.]
          </CalloutBox>
        </section>

        {/* ── Essential phrases ─────────────────────────────────── */}
        <section id="essential-phrases" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Essential phrases to have ready
          </h2>
          {/* OWNER: write your list and explanation of conversation survival phrases here — "¿Puedes repetir?", "No entiendo", "¿Cómo se dice…?", etc. */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip — write out your "rescue phrases" and drill them until they're automatic */}
            [Owner will write this notebook tip — write your most important conversation rescue phrases on one page and review them before every practice session.]
          </CalloutBox>
        </section>

        {/* ── Keeping it going ──────────────────────────────────── */}
        <section id="keeping-it-going" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Keeping the conversation going
          </h2>
          {/* OWNER: write your advice for sustaining a conversation — asking follow-up questions, bridging gaps, using fillers naturally */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* ── Common mistakes ───────────────────────────────────── */}
        <section id="common-mistakes" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Common mistakes English speakers make
          </h2>
          {/* OWNER: write about the most common spoken errors — false friends, word order, ser vs estar confusion in speech, gender errors, etc. */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a callout about why knowing your likely errors in advance is useful */}
            [Owner will write this callout — awareness of your likely errors gives you something concrete to watch for in your next conversation.]
          </CalloutBox>
        </section>

        {/* ── Dealing with nerves ───────────────────────────────── */}
        <section id="dealing-with-nerves" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Dealing with nerves
          </h2>
          {/* OWNER: write your advice on managing anxiety in conversation — mindset, preparation, reframing mistakes, the role of immersion */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip about preparing for a conversation session */}
            [Owner will write this notebook tip — e.g. write out 5 topics you could talk about for 2 minutes each before your next session.]
          </CalloutBox>
        </section>

        {/* ── Building fluency ──────────────────────────────────── */}
        <section id="building-fluency" className="pt-10 pb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Building fluency over time
          </h2>
          {/* OWNER: write your long-term advice for reaching fluency in speaking — consistency, deliberate practice, tracking progress */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

      </Sidebar>
    </>
  );
}
