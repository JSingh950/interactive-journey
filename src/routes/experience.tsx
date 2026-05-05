import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { experience } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Inventory — Experience · Jeeyan Mhajan" },
      {
        name: "description",
        content:
          "Roles, research, and leadership: AI/ML researcher at NJIT, PE intern at Singh Capital Partners, founder of Affinity, and campus leadership.",
      },
      { property: "og:title", content: "Inventory — Experience · Jeeyan Mhajan" },
      {
        property: "og:description",
        content: "Click any role to expand its loot.",
      },
    ],
  }),
  component: ExperiencePage,
});

const tagColor: Record<string, string> = {
  Research: "bg-xp/15 text-ink border-xp/40",
  Finance: "bg-gold/20 text-ink border-gold/50",
  Founder: "bg-rust/15 text-rust border-rust/40",
  Leadership: "bg-accent text-ink border-border",
};

function ExperiencePage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Inventory · Chapter III
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-6xl">
          Experience — <span className="italic text-rust">click any role to expand</span>
        </h1>
        <p className="mt-4 max-w-2xl text-foreground/80">
          Roles I've taken on, in research, finance, product, and leadership. Each one came with
          its own lessons.
        </p>

        <ul className="mt-10 space-y-3">
          {experience.map((e, i) => {
            const isOpen = open === i;
            return (
              <li key={e.role + e.period} className="quest-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="hidden w-24 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:block">
                      {e.period}
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold leading-tight">{e.role}</p>
                      <p className="text-xs text-muted-foreground">{e.org}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:hidden">
                        {e.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`hidden rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider sm:inline ${
                        tagColor[e.tag] ?? "bg-muted text-ink border-border"
                      }`}
                    >
                      {e.tag}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-rust"
                      aria-hidden
                    >
                      ▾
                    </motion.span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden border-t border-dashed border-border bg-parchment/40"
                    >
                      <div className="px-5 py-4 text-sm leading-relaxed text-foreground/85">
                        {e.body}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
