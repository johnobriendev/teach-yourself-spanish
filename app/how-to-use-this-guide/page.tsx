import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import Sidebar from "@/components/Sidebar";
import CalloutBox from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "How to Use This Guide | Teach Yourself Spanish",
  description:
    "New to this site? Start here. Learn how to use the guide, what order to tackle things in, and how to get the most out of your study sessions.",
};

const SIDEBAR_LINKS = [
  { label: "Where to start",          href: "#where-to-start"    },
  { label: "Suggested learning path", href: "#learning-path"     },
  { label: "How the site is laid out",href: "#site-layout"       },
  { label: "Getting the most out of it", href: "#getting-most"   },
];

export default function HowToUseThisGuidePage() {
  return (
    <>
      <SectionHero
        badge="Start Here"
        title="How to Use This Guide"
        subtitle="This site isn't an app or a course — it's a reference guide you work through at your own pace. Here's how to get the most out of it."
      />

      <Sidebar links={SIDEBAR_LINKS}>

        {/* ── Where to start ────────────────────────────────────── */}
        <section id="where-to-start" className="pt-4 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Where to start
          </h2>
          {/* OWNER: write your advice on where a complete beginner should start — probably vocabulary first, then tenses, then verbs */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="shortcuts">
            {/* OWNER: write a callout about the single most important first step */}
            [Owner will write this callout — e.g. the single best thing you can do on day one is work through the 1000 most common words list.]
          </CalloutBox>
        </section>

        {/* ── Suggested learning path ───────────────────────────── */}
        <section id="learning-path" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Suggested learning path
          </h2>
          {/* OWNER: write a recommended order — e.g. 1. Vocabulary 2. Tenses 3. Key Verbs 4. Conversation practice */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="why-this-matters">
            {/* OWNER: write a callout on why following a sequence matters rather than jumping around */}
            [Owner will write this callout — why a structured path beats randomly browsing topics.]
          </CalloutBox>
        </section>

        {/* ── How the site is laid out ──────────────────────────── */}
        <section id="site-layout" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            How the site is laid out
          </h2>
          {/* OWNER: describe each section of the site briefly — Words, Tenses, Verbs, Conversation, Tips */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* ── Getting the most out of it ────────────────────────── */}
        <section id="getting-most" className="pt-10 pb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Getting the most out of it
          </h2>
          {/* OWNER: write practical tips — use a notebook alongside the site, come back regularly, don't try to do everything at once */}
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <CalloutBox variant="notebook-tip">
            {/* OWNER: write a notebook tip for using this site alongside a physical notebook */}
            [Owner will write this notebook tip — e.g. open a notebook every time you use this site and write down anything that surprises you.]
          </CalloutBox>
        </section>

      </Sidebar>
    </>
  );
}
