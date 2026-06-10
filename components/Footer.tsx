import Link from "next/link";

const VERB_SLUGS = [
  "ser", "estar", "tener", "hacer", "ir",
  "poder", "querer", "saber", "venir", "decir",
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Learn */}
          <div>
            <h3 className="font-ui font-medium text-xs text-text mb-3 uppercase tracking-widest">
              Learn
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/words"        label="1000 Words"    />
              <FooterLink href="/tenses"       label="14 Tenses"     />
              <FooterLink href="/verbs"        label="Key Verbs"     />
              <FooterLink href="/conversation" label="Conversation"  />
            </ul>
          </div>

          {/* Grammar */}
          <div>
            <h3 className="font-ui font-medium text-xs text-text mb-3 uppercase tracking-widest">
              Grammar
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/regular-vs-irregular" label="Regular vs Irregular" />
            </ul>
          </div>

          {/* Verbs */}
          <div className="col-span-2">
            <h3 className="font-ui font-medium text-xs text-text mb-3 uppercase tracking-widest">
              Key Verbs
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {VERB_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/verbs/${slug}`}
                    className="font-ui text-sm text-muted hover:text-accent capitalize transition-colors"
                  >
                    {slug}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/verbs"
                  className="font-ui text-sm text-accent hover:text-accent-dark transition-colors"
                >
                  All 55 verbs →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href="/"
            className="font-display text-base font-bold text-text hover:text-accent transition-colors"
          >
            Teach Yourself Spanish
          </Link>
          <p className="font-ui text-xs text-muted">
            © {new Date().getFullYear()} Teach Yourself Spanish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="font-ui text-sm text-muted hover:text-accent transition-colors"
      >
        {label}
      </Link>
    </li>
  );
}
