export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-parchment/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Jeeyan Mhajan · Quest log v1.0</p>
        <p className="font-mono text-xs">Built with curiosity · React · TanStack · Framer Motion</p>
      </div>
    </footer>
  );
}
