const steps = [
  "Paste a listing from Facebook Marketplace, Craigslist, or similar.",
  "Add optional details or uploads if you have them.",
  "Press Analyze Listing when you're ready (analysis engine coming soon).",
] as const;

export function HeroSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-700 dark:text-teal-400">
          Used car decision support
        </p>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Should you buy this car at this price?
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          CarSight helps first-time and inexperienced buyers understand private
          seller listings. Paste a listing, add what you know, and get a
          structured report—without hours of scattered research.
        </p>
      </div>
      <ol className="grid gap-3 sm:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step}
            className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-800 dark:bg-teal-950 dark:text-teal-200">
              {index + 1}
            </span>
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
