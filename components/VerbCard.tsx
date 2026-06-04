import Link from "next/link";
import type { Verb } from "@/lib/getVerb";

export default function VerbCard({ verb }: { verb: Verb }) {
  return (
    <Link
      href={`/verbs/${verb.slug}`}
      className="group block bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-2">
        <span className="font-display text-2xl font-bold text-text group-hover:text-accent transition-colors" lang="es">
          {verb.infinitive}
        </span>
        <span
          className={`font-ui text-xs px-2 py-1 rounded-full ${
            verb.type === "irregular"
              ? "bg-gold-light text-gold"
              : "bg-accent-light text-accent"
          }`}
        >
          {verb.type}
        </span>
      </div>
      <p className="font-body text-muted text-base">{verb.english}</p>
    </Link>
  );
}
