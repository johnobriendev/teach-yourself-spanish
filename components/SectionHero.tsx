type SectionHeroProps = {
  title: string;
  subtitle?: string;
  badge?: string;
};

export default function SectionHero({ title, subtitle, badge }: SectionHeroProps) {
  return (
    <section className="bg-surface border-b border-border pt-32 pb-16 lg:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {badge && (
          <span className="inline-block bg-accent-light text-accent text-xs font-ui font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            {badge}
          </span>
        )}
        <h1 className="font-display text-3xl lg:text-5xl text-text font-bold leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-muted font-body leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
