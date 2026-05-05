import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface Stat {
  label: string;
  value: string;
}

export interface QuestCardProps {
  rank?: string; // e.g. "S", "A", "Boss"
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  tech: string[];
  stats?: Stat[];
  status?: "Live" | "Shipped" | "Active" | "Research";
  index?: number;
  icon?: ReactNode;
}

const rankColor: Record<string, string> = {
  S: "bg-rust text-rust-foreground",
  A: "bg-gold text-ink",
  B: "bg-xp text-rust-foreground",
  Boss: "bg-ink text-cream",
};

export function QuestCard({
  rank = "A",
  title,
  tagline,
  description,
  outcomes,
  tech,
  stats = [],
  status = "Shipped",
  index = 0,
  icon,
}: QuestCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="quest-card relative p-6 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className={`grid size-10 place-items-center rounded-md border border-ink font-display text-lg font-bold shadow-[2px_2px_0_0_var(--ink)] ${rankColor[rank] ?? rankColor.A}`}
          >
            {icon ?? rank}
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Quest · Rank {rank}
            </p>
            <h3 className="font-display text-xl font-semibold leading-tight">{title}</h3>
          </div>
        </div>
        <span className="chip whitespace-nowrap">
          <span className="size-1.5 rounded-full bg-xp" /> {status}
        </span>
      </div>

      <p className="mt-4 font-display text-lg italic text-rust">{tagline}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">{description}</p>

      {outcomes.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-rust" />
              <span className="text-foreground/85">{o}</span>
            </li>
          ))}
        </ul>
      )}

      {stats.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="pixel-border bg-parchment/60 p-3">
              <p className="font-display text-2xl font-bold text-rust">{s.value}</p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
