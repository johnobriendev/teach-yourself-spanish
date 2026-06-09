"use client";

type SidebarLink = { label: string; href: string };

type SidebarProps = {
  links: SidebarLink[];
  children: React.ReactNode;
};

export default function Sidebar({ links, children }: SidebarProps) {
  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value) window.location.href = e.target.value;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
      <div className="lg:hidden mb-8">
        <label htmlFor="section-select" className="block font-ui text-sm text-muted mb-2">
          Jump to section
        </label>
        <select
          id="section-select"
          className="w-full bg-surface border border-border rounded-xl px-3 py-2.5 font-ui text-sm text-text"
          onChange={handleSelect}
          defaultValue=""
        >
          <option value="" disabled>Select a section…</option>
          {links.map((link) => (
            <option key={link.href} value={link.href}>
              {link.label}
            </option>
          ))}
        </select>
      </div>

      <aside className="hidden lg:block">
        <nav className="sticky top-24 space-y-1" aria-label="Page sections">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-lg font-ui text-sm text-muted hover:text-accent hover:bg-surface transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>

      <div>{children}</div>
    </div>
  );
}
