import Link from "next/link";
import type { Scenario } from "@/lib/getScenario";

export default function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <Link
      href={`/conversation/${scenario.slug}`}
      className="group block bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <span className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors leading-snug">
        {scenario.title}
      </span>
    </Link>
  );
}
