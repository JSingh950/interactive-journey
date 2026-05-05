import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuestCard } from "@/components/QuestCard";
import { skills, traits, quests } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeeyan Mhajan — AI meets Finance · Quest Log" },
      {
        name: "description",
        content:
          "Personal portfolio of Jeeyan Mhajan — CS & Business at NJIT, ML engineer, founder of Affinity. Explore quests, skills, and experience in a playful interactive log.",
      },
      { property: "og:title", content: "Jeeyan Mhajan — AI meets Finance · Quest Log" },
      {
        property: "og:description",
        content: "ML systems that make real decisions. Explore the quest log.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5">
        <Hero />
        <SkillsPanel />
        <Traits />
        <FeaturedQuests />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20">
      <div className="dot-grid absolute inset-x-0 top-0 -z-10 h-[420px] opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-xp/40 bg-xp/10 px-3 py-1 text-xs font-medium text-ink"
      >
        <span className="size-1.5 animate-pulse rounded-full bg-xp" />
        Quest accepting · Open to Summer 2026 Internships
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
      >
        AI meets finance.
        <br />
        <span className="italic text-rust">Both, on purpose.</span>
      </motion.h1>

      <p className="mt-5 max-w-xl font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        CS &amp; Business · NJIT · Founder · Researcher
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
            I build ML systems that make real decisions — risk models, compliance tools, stock
            predictors — and I understand the business context they operate in. Currently
            co-founding <span className="font-semibold text-rust">Affinity</span>, a privacy-first
            AI company, while doing undergrad research at NJIT's Ying Wu College of Computing.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-md border border-ink bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-[3px_3px_0_0_var(--rust)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              ⚔️ See my quests →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-ink bg-card px-5 py-3 text-sm font-semibold text-ink shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              Let's talk
            </Link>
          </div>
        </div>

        {/* Player card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="quest-card p-5"
        >
          <div className="flex items-center justify-between border-b border-dashed border-border pb-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Player Card
            </p>
            <span className="chip">Lv. 22</span>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="float-soft grid size-16 place-items-center rounded-md border border-ink bg-rust text-3xl text-rust-foreground shadow-[3px_3px_0_0_var(--ink)]">
              🧑‍💻
            </div>
            <div>
              <p className="font-display text-xl font-semibold leading-tight">Jeeyan Mhajan</p>
              <p className="text-xs text-muted-foreground">Class · ML Engineer / Founder</p>
              <p className="text-xs text-muted-foreground">Guild · NJIT Ying Wu CoC</p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <StatBar label="ML / AI" value={92} />
            <StatBar label="Finance" value={85} />
            <StatBar label="Full-stack" value={84} />
            <StatBar label="Leadership" value={88} />
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-dashed border-border pt-3">
            <span className="chip">🏆 Founder</span>
            <span className="chip">🧪 Researcher</span>
            <span className="chip">📊 PE Intern</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="font-mono font-semibold text-ink">{value} XP</span>
      </div>
      <div className="xp-bar mt-1.5">
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SkillsPanel() {
  return (
    <section className="py-10">
      <div className="quest-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-dashed border-border bg-parchment/60 px-5 py-3">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Skill Tree
          </p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Proficiency
          </p>
        </div>
        <ul className="divide-y divide-dashed divide-border">
          {skills.map((s, i) => (
            <motion.li
              key={s.code}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="grid grid-cols-[60px_1fr_120px] items-center gap-4 px-5 py-3 text-sm sm:grid-cols-[80px_1fr_180px]"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-rust">
                {s.code}
              </span>
              <span className="text-foreground/90">{s.label}</span>
              <div className="xp-bar">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.04 }}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Traits() {
  return (
    <section className="py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Passive Abilities
          </p>
          <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl">What I bring</h2>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {traits.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="quest-card p-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Ability · {t.id}
              </span>
              <span className="text-2xl">{t.icon}</span>
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{t.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturedQuests() {
  const featured = quests.slice(0, 3);
  return (
    <section className="py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Featured Quests
          </p>
          <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl">Selected work</h2>
        </div>
        <Link
          to="/work"
          className="hidden items-center gap-1 text-sm font-semibold text-rust hover:underline sm:inline-flex"
        >
          View full quest log →
        </Link>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {featured.map((q, i) => (
          <QuestCard key={q.title} {...q} index={i} />
        ))}
      </div>
      <div className="mt-8 text-center sm:hidden">
        <Link to="/work" className="text-sm font-semibold text-rust hover:underline">
          View full quest log →
        </Link>
      </div>
    </section>
  );
}
