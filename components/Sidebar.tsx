type SidebarLink = { label: string; href: string };

type SidebarProps = {
  links: SidebarLink[];
  children: React.ReactNode;
};

export default function Sidebar({ links, children }: SidebarProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
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
