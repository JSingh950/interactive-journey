import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { traits } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jeeyan Mhajan" },
      {
        name: "description",
        content:
          "About Jeeyan Mhajan: CS & Business student at NJIT, founder of Affinity, ML researcher and builder.",
      },
      { property: "og:title", content: "About — Jeeyan Mhajan" },
      {
        property: "og:description",
        content: "Founder, ML engineer, and CS & Business student at NJIT.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Character Sheet · 01
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-6xl">
          The player <span className="italic text-rust">behind the quests.</span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="quest-card p-5"
          >
            <div className="float-soft mx-auto grid size-24 place-items-center rounded-md border border-ink bg-rust text-5xl text-rust-foreground shadow-[3px_3px_0_0_var(--ink)]">
              🧑‍💻
            </div>
            <div className="mt-4 text-center">
              <p className="font-display text-xl font-semibold">Jeeyan Mhajan</p>
              <p className="text-xs text-muted-foreground">Lv. 22 · NJIT Highlander</p>
            </div>
            <dl className="mt-5 space-y-2 border-t border-dashed border-border pt-4 text-sm">
              <Row k="Class" v="ML Engineer / Founder" />
              <Row k="Guild" v="NJIT Ying Wu CoC" />
              <Row k="Major" v="CS & Business" />
              <Row k="Base" v="New Jersey, USA" />
              <Row k="Status" v="Open to Summer 2026" />
            </dl>
          </motion.aside>

          <div className="space-y-5 text-base leading-relaxed text-foreground/85">
            <p>
              I'm Jeeyan — I build ML systems that make real decisions and care just as much about
              the business context they live in. My favorite work sits in that overlap: a model
              that's mathematically sound <em>and</em> actually moves a number on a P&amp;L.
            </p>
            <p>
              Right now I'm co-founding{" "}
              <span className="font-semibold text-rust">Affinity</span> — a privacy-first AI
              company building Affinity Gaia, an on-premise AI infrastructure product so
              professional services firms can use AI without sending data to the cloud. In parallel
              I do undergrad research at NJIT on AI in finance and transportation.
            </p>
            <p>
              Before that I spent a year in private equity at Singh Capital Partners, building
              valuation models and writing diligence memos used in live deals. That's where I
              learned to read a business the way I read a dataset.
            </p>
            <p>
              Outside of work I lead the Laurel Hall Council, run sustainability programs as an
              EcoHighlander, and serve on the Student Senate E-Board. I like systems — software,
              financial, and human.
            </p>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold">Passive abilities</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {traits.map((t) => (
              <div key={t.id} className="quest-card p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {t.id}
                  </span>
                  <span className="text-2xl">{t.icon}</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-foreground/80">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-md border border-ink bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-[3px_3px_0_0_var(--rust)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            ⚔️ See the quest log
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-ink bg-card px-5 py-3 text-sm font-semibold text-ink shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            Visit the tavern →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{k}</dt>
      <dd className="text-right text-sm font-medium">{v}</dd>
    </div>
  );
}
