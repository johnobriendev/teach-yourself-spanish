import Link from "next/link";

type TopicCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function TopicCard({ title, description, href }: TopicCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <h3 className="font-heading text-xl font-semibold text-text mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="font-body text-muted text-base leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-accent font-ui text-sm font-medium">
        Read more
        <span
          className="transition-transform group-hover:translate-x-1 inline-block"
          aria-hidden="true"
        >
          →
        </span>
      </span>
    </Link>
  );
}
