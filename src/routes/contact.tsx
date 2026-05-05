import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Tavern — Contact · Jeeyan Mhajan" },
      {
        name: "description",
        content:
          "Get in touch with Jeeyan Mhajan. Open to Summer 2026 ML / fintech / AI product internships and research collaborations.",
      },
      { property: "og:title", content: "Tavern — Contact · Jeeyan Mhajan" },
      {
        property: "og:description",
        content: "Drop a message — replies within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          The Tavern · Chapter IV
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-6xl">
          Let's build something <span className="italic text-rust">worth building.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-foreground/80">
          Open to Summer 2026 internships in ML engineering, fintech, and AI product. I also take
          interesting research collaborations seriously. I respond within 24 hours.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <aside className="quest-card p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Direct lines
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <ContactRow
                icon="✉️"
                label="Email"
                value="jeeyanmhajan@gmail.com"
                href="mailto:jeeyanmhajan@gmail.com"
              />
              <ContactRow
                icon="🔗"
                label="LinkedIn"
                value="linkedin.com/in/jeeyanmhajan"
                href="https://linkedin.com/in/jeeyanmhajan"
              />
              <ContactRow
                icon="🐙"
                label="GitHub"
                value="JSingh950"
                href="https://github.com/JSingh950"
              />
              <ContactRow icon="📞" label="Phone" value="(917) 770-2814" href="tel:9177702814" />
            </ul>

            <div className="mt-6 rounded-md border border-dashed border-border bg-parchment/40 p-3 text-xs text-muted-foreground">
              💡 <span className="font-semibold text-ink">Quest tip:</span> mention what you're
              working on and what you'd want help with — short notes get faster replies.
            </div>
          </aside>

          <form onSubmit={onSubmit} className="quest-card space-y-4 p-5">
            <Field label="Your name">
              <input
                required
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ink focus:ring-2 focus:ring-rust/20"
                placeholder="Adventurer name"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                required
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ink focus:ring-2 focus:ring-rust/20"
                placeholder="you@guild.com"
              />
            </Field>
            <Field label="Quest type">
              <select
                required
                defaultValue=""
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ink focus:ring-2 focus:ring-rust/20"
              >
                <option value="" disabled>
                  Choose a quest type
                </option>
                <option>Internship · Summer 2026</option>
                <option>Research collaboration</option>
                <option>Founder / advisory chat</option>
                <option>Just saying hi</option>
              </select>
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={5}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ink focus:ring-2 focus:ring-rust/20"
                placeholder="What's the quest, briefly?"
              />
            </Field>

            <button
              type="submit"
              disabled={sent}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-ink bg-rust px-5 py-3 text-sm font-semibold text-rust-foreground shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 disabled:opacity-70"
            >
              {sent ? "✓ Message sent" : "Send message →"}
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-md border border-xp/40 bg-xp/10 px-3 py-2 text-sm text-ink"
              >
                ✓ Message sent! I'll get back to you within 24 hours.
              </motion.p>
            )}
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="flex items-center justify-between gap-3 rounded-md border border-transparent px-2 py-1.5 transition-colors hover:border-border hover:bg-parchment/50"
      >
        <span className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-md border border-ink bg-card text-sm shadow-[2px_2px_0_0_var(--ink)]">
            {icon}
          </span>
          <span>
            <span className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              {label}
            </span>
            <span className="block text-sm font-medium">{value}</span>
          </span>
        </span>
        <span className="text-rust">↗</span>
      </a>
    </li>
  );
}
