import { getAllScenarios } from "@/lib/getScenario";
import ScenarioCard from "@/components/ScenarioCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversation Scenarios | Teach Yourself Spanish",
  description:
    "Practice Spanish in real-life situations — from greetings and introductions to telling stories and recounting conversations.",
};

export default function ConversationPage() {
  const scenarios = getAllScenarios();

  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4">
      <header className="mb-12">
        <h1 className="font-display text-3xl lg:text-5xl font-bold text-text mb-6">
          Conversation Scenarios
        </h1>
        <p className="font-body text-lg text-muted leading-relaxed max-w-2xl">
          {/* OWNER: write your intro paragraph here */}
          [Owner will write this section — a brief explanation of how these
          scenarios cover the most common real-life situations you&apos;ll
          encounter as a Spanish learner.]
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {scenarios.map((scenario) => (
          <ScenarioCard key={scenario.slug} scenario={scenario} />
        ))}
      </div>
    </div>
  );
}
