import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuestCard } from "@/components/QuestCard";
import { quests } from "@/data/portfolio";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Quests — Selected work · Jeeyan Mhajan" },
      {
        name: "description",
        content:
          "Selected work by Jeeyan Mhajan: Affinity Gaia, Zoning AI, NJIT ML research, Stock Predictor, Campus Shield iOS app.",
      },
      { property: "og:title", content: "Quests — Selected work · Jeeyan Mhajan" },
      {
        property: "og:description",
        content: "ML, infra, and product quests — shipped and in flight.",
      },
    ],
  }),
  component: WorkPage,
});

const filters = ["All", "Boss", "S", "A"] as const;
type Filter = (typeof filters)[number];

function WorkPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = quests.filter((q) => filter === "All" || q.rank === filter);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-12">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Quest Log · Chapter II
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-6xl">
          Quests <span className="italic text-rust">accepted &amp; cleared.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-foreground/80">
          A live log of projects I've shipped or am actively building. Each card lists the outcome
          I cared about — not just the tools I touched.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Filter rank:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md border px-3 py-1 text-xs font-semibold transition-colors ${
                filter === f
                  ? "border-ink bg-ink text-cream"
                  : "border-border bg-card text-foreground/80 hover:bg-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {visible.map((q, i) => (
            <QuestCard key={q.title} {...q} index={i} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
