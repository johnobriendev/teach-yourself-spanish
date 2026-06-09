"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const VERB_SLUGS = [
  "ser", "estar", "tener", "hacer", "ir",
  "poder", "querer", "saber", "venir", "decir",
];

const TIPS_LINKS = [
  { label: "Conversation",      href: "/conversation"      },
  { label: "Listening",         href: "/listening"         },
  { label: "How to Study",      href: "/how-to-study"      },
  { label: "Language Exchange", href: "/language-exchange" },
];

type DropdownKey = "verbs" | "tips";

export default function Nav() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const close = () => setOpenDropdown(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [openDropdown]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <>
      {/* ── Header bar ──────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          solid
            ? "bg-base/95 backdrop-blur-sm shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-lg font-bold text-text hover:text-accent transition-colors"
          >
            Teach Yourself Spanish
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            <DesktopLink href="/words"   label="Words"   current={pathname} />
            <DesktopLink href="/tenses"  label="Tenses"  current={pathname} />

            {/* Verbs dropdown */}
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <DropdownTrigger
                label="Verbs"
                isOpen={openDropdown === "verbs"}
                isActive={pathname.startsWith("/verbs")}
                onToggle={() => setOpenDropdown((o) => (o === "verbs" ? null : "verbs"))}
              />
              {openDropdown === "verbs" && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-base rounded-xl shadow-lg border border-border overflow-hidden">
                  <div className="px-4 py-3 border-b border-border">
                    <Link
                      href="/verbs"
                      className="font-ui text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                    >
                      55 Essential Verbs →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 p-3 gap-x-2">
                    {VERB_SLUGS.map((slug) => (
                      <Link
                        key={slug}
                        href={`/verbs/${slug}`}
                        className="block px-2 py-1.5 rounded font-ui text-sm text-text hover:text-accent hover:bg-surface capitalize transition-colors"
                      >
                        {slug}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tips dropdown */}
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <DropdownTrigger
                label="Tips"
                isOpen={openDropdown === "tips"}
                isActive={TIPS_LINKS.some((l) => l.href === pathname)}
                onToggle={() => setOpenDropdown((o) => (o === "tips" ? null : "tips"))}
              />
              {openDropdown === "tips" && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-base rounded-xl shadow-lg border border-border overflow-hidden">
                  {TIPS_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 font-ui text-sm text-text hover:text-accent hover:bg-surface transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 -mr-2"
          >
            <span
              className={`block w-5 h-0.5 bg-text origin-center transition-all duration-200 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text transition-all duration-200 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text origin-center transition-all duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen overlay ───────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 bg-base flex flex-col lg:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Spacer for header */}
        <div className="h-16 shrink-0" />

        <nav
          className="flex-1 overflow-y-auto px-4 py-6"
          aria-label="Mobile navigation"
        >
          <MobileLink href="/"       label="Home"         current={pathname} />
          <MobileLink href="/words"  label="1000 Words"   current={pathname} />
          <MobileLink href="/tenses" label="14 Tenses"    current={pathname} />
          <MobileLink href="/verbs"  label="55 Essential Verbs" current={pathname} />

          <div className="mt-6 mb-2">
            <p className="px-3 font-ui text-xs font-medium text-muted uppercase tracking-widest mb-1">
              Individual Verbs
            </p>
            <div className="grid grid-cols-2">
              {VERB_SLUGS.map((slug) => (
                <Link
                  key={slug}
                  href={`/verbs/${slug}`}
                  className={`block px-3 py-2 rounded-lg font-ui text-sm capitalize transition-colors ${
                    pathname === `/verbs/${slug}`
                      ? "text-accent font-medium"
                      : "text-muted hover:text-accent"
                  }`}
                >
                  {slug}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="px-3 font-ui text-xs font-medium text-muted uppercase tracking-widest mb-1">
              Tips
            </p>
            {TIPS_LINKS.map((link) => (
              <MobileLink key={link.href} href={link.href} label={link.label} current={pathname} />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

/* ── Helper sub-components ──────────────────────────────────────────────── */

function DesktopLink({ href, label, current }: { href: string; label: string; current: string }) {
  const active = current === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg font-ui text-sm font-medium transition-colors ${
        active
          ? "text-accent"
          : "text-text hover:text-accent hover:bg-surface"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function DropdownTrigger({
  label,
  isOpen,
  isActive,
  onToggle,
}: {
  label: string;
  isOpen: boolean;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-haspopup="true"
      className={`flex items-center gap-1 px-3 py-2 rounded-lg font-ui text-sm font-medium transition-colors ${
        isActive
          ? "text-accent"
          : "text-text hover:text-accent hover:bg-surface"
      }`}
    >
      {label}
      <svg
        className={`w-3.5 h-3.5 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

function MobileLink({ href, label, current }: { href: string; label: string; current: string }) {
  const active = current === href;
  return (
    <Link
      href={href}
      className={`block px-3 py-3 rounded-lg font-ui text-base font-medium transition-colors ${
        active
          ? "text-accent bg-accent-light"
          : "text-text hover:text-accent hover:bg-surface"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
