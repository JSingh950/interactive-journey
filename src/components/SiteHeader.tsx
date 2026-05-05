import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/about", label: "About", icon: "👤" },
  { to: "/work", label: "Quests", icon: "⚔️" },
  { to: "/experience", label: "Inventory", icon: "🎒" },
  { to: "/contact", label: "Tavern", icon: "📮" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-md border border-ink bg-rust text-rust-foreground font-display text-lg shadow-[2px_2px_0_0_var(--ink)] transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
            J
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Jeeyan Mhajan</span>
          <span className="chip ml-2 hidden sm:inline-flex">Lv. 22 · CS &amp; Biz</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <span className="mr-1.5 opacity-70">{n.icon}</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 rounded-md border border-ink bg-rust px-3 py-1.5 text-sm font-semibold text-rust-foreground shadow-[2px_2px_0_0_var(--ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          Start Quest →
        </Link>
      </div>
      {/* Mobile nav */}
      <nav className="flex gap-1 overflow-x-auto border-t border-border/60 px-3 py-2 md:hidden">
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            activeProps={{ className: "bg-accent text-accent-foreground" }}
            className="shrink-0 rounded-md px-2.5 py-1 text-xs font-medium text-foreground/80"
          >
            {n.icon} {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
