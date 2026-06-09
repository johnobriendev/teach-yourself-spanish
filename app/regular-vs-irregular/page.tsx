import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import Sidebar from "@/components/Sidebar";
import CalloutBox from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "Regular vs Irregular Spanish Verbs | Teach Yourself Spanish",
  description:
    "Understand the difference between regular and irregular Spanish verbs, learn the main irregularity patterns, and discover which verbs to learn by heart.",
};

const SIDEBAR_LINKS = [
  { label: "What's the difference?", href: "#overview" },
  { label: "Regular -AR verbs", href: "#regular-ar" },
  { label: "Regular -ER & -IR verbs", href: "#regular-er-ir" },
  { label: "Irregular patterns", href: "#irregular-patterns" },
  { label: "Stem-changing verbs", href: "#stem-changing" },
  { label: "Irregular yo forms", href: "#irregular-yo" },
  { label: "Which to learn first", href: "#which-to-learn" },
];

export default function RegularVsIrregularPage() {
  return (
    <>
      <SectionHero
        badge="Grammar"
        title="Regular vs Irregular Verbs"
        subtitle="Most Spanish verbs follow predictable patterns. Once you know the rules, you can conjugate thousands of verbs. But a small set of very common verbs break those rules — and those are worth learning by heart."
      />

      <Sidebar links={SIDEBAR_LINKS}>

        {/* ── What's the difference? ──────────────────────────────── */}
        <section id="overview" className="pt-4 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            What&rsquo;s the difference?
          </h2>
          {/* OWNER: write your overview here — what makes a verb "regular" vs "irregular", and why the distinction matters */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a "why this matters" callout here */}
            [Owner will write this callout — why understanding this distinction is a turning point for learners.]
          </CalloutBox>
        </section>

        {/* ── Regular -AR verbs ──────────────────────────────────── */}
        <section id="regular-ar" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Regular <span lang="es">-AR</span> verbs
          </h2>
          {/* OWNER: write your explanation of regular -AR conjugation here — endings for all tenses, example verb (hablar), how to spot them */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip for -AR verbs */}
            [Owner will write this notebook tip — e.g. write out the present-tense -AR endings and conjugate three new verbs from memory.]
          </CalloutBox>
        </section>

        {/* ── Regular -ER and -IR verbs ──────────────────────────── */}
        <section id="regular-er-ir" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Regular <span lang="es">-ER</span> and <span lang="es">-IR</span> verbs
          </h2>
          {/* OWNER: write your explanation of regular -ER and -IR conjugation here — how they are similar to -AR, where they differ, example verbs (comer, vivir) */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* ── Irregular patterns ────────────────────────────────── */}
        <section id="irregular-patterns" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Irregular patterns
          </h2>
          {/* OWNER: write your overview of the main categories of irregularity here — orthographic changes, completely irregular verbs (ser, ir, etc.) */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a "why this matters" callout — irregular patterns aren't as hard as they look; many follow sub-patterns */}
            [Owner will write this callout — reassurance that irregular verbs fall into groups and aren&rsquo;t just random exceptions to memorise.]
          </CalloutBox>
        </section>

        {/* ── Stem-changing verbs ───────────────────────────────── */}
        <section id="stem-changing" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Stem-changing verbs
          </h2>
          {/* OWNER: write your explanation of stem-changing verbs here — the three patterns (e→ie, o→ue, e→i), the "boot" diagram, examples */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip for stem-changing verbs */}
            [Owner will write this notebook tip — e.g. draw the "boot" diagram and fill it in with a stem-changing verb of your choice.]
          </CalloutBox>
        </section>

        {/* ── Irregular yo forms ────────────────────────────────── */}
        <section id="irregular-yo" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Irregular <span lang="es">yo</span> forms
          </h2>
          {/* OWNER: write your explanation of go-verbs and other irregular yo forms here — tener (tengo), hacer (hago), salir (salgo), etc. */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* ── Which to learn first ──────────────────────────────── */}
        <section id="which-to-learn" className="pt-10 pb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Which irregular verbs to learn first
          </h2>
          {/* OWNER: write your recommendations for priority irregular verbs here — ser, estar, ir, tener, hacer, etc. */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip for learning the most important irregular verbs */}
            [Owner will write this notebook tip — e.g. write out the present tense of the five most common irregular verbs from memory, then check yourself.]
          </CalloutBox>
        </section>

      </Sidebar>
    </>
  );
}
