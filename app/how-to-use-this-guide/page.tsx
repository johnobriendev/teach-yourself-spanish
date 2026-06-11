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
          
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            First you need to ask yourself why you want to learn Spanish? Is it to be able to understand movies without the subtitles? Talk to your neighbor? Travel to another country? Asking yourself these and similar questions will help you narrow in your ultimate goal. It's important to always keep in mind why you are doing this.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            The best place to start is the 1000 most frequently used words. 1000 can seem like a lot but break it up into whatever pieces you have to so it doesn't seem like a lot. If you do 100 words a day, you'll have them all in 10 days. In the beginning I recommend you read through the entire list, and then write down the first 100 in a note book.
          </p>
          <CalloutBox variant="shortcuts">
            Memorizing is an unfortunate part of learning a language. In the beginning you need to do a lot of studying so you have a base of words you can understand. Writing the most common words down helps you repeat them in your brain and memorize them. 
          </CalloutBox>
        </section>

        {/* ── Suggested learning path ───────────────────────────── */}
        <section id="learning-path" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Suggested learning path
          </h2>
          
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Everyone must create their own learning path based upon what they think they are lacking. Ask yourself, the last time I tried to speak Spanish, what did I want to say but couldn't? Or if I were to speak to someone in Spanish for the first time, what would I say? The best you thing you can do while memorizing words is starting to think of sentences you can use them in. Once you have a few nouns and verbs memorized you have a good base to expand on. Think about things you wish you could talk about in Spanish and then look up how to say them if you don't have the vocabulary yet. In the beginning of my Spanish journey I was looking up vocabulary about music and guitars because I'm a guitar player. 
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Once you have some vocabulary built up about your common interests, your goal should be to have a short conversation about that topic with someone who speaks Spanish. You can do this before you memorize the 1000 most common words. Find out how to find a language partner in the language partner section.
          </p>
          <CalloutBox variant="why-this-matters">
            The reality is, in the beginning you will be overwhelmed with everything there is to learn. 1000 words, 14 verb tenses, Irregular vs Regular verbs: these are just a few of the many options you have to focus on. That is why if you want to speak, it's recommended to start speaking as soon as possible. 
          </CalloutBox>
        </section>

        {/* ── How the site is laid out ──────────────────────────── */}
        <section id="site-layout" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            How the site is laid out
          </h2>
          
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            This website provides the learner with everything they need to create their own Spanish study plan. You can browse the site as you wish and there is no set plan you have to follow.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            I normally recommend that the first thing people interact with and study is the 1000 most frequently used words. Although they are somewhat random, having the words in the back of your mind or having seen them before even without knowing the exact definition is of benefit. It gives you something to build on.
          </p>
        </section>

        {/* ── Getting the most out of it ────────────────────────── */}
        <section id="getting-most" className="pt-10 pb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Getting the most out of it
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Write everything down in a notebook. Writing things down gives you another repetition and helps cement it in your brain. When you think of a word you will have an image of where you wrote it on the page. 
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Think and use your brain! Think of scenarios where you would be speaking Spanish and think about what you would say. What kind of responses might you hear? Put yourself to the test. Speaking with others gives you immediate feedback about what you need to focus on.  
          </p>
          <CalloutBox variant="notebook-tip">
            It's not necessary to understand all the grammar and words before you start trying to speak. 
          </CalloutBox>
        </section>

      </Sidebar>
    </>
  );
}
