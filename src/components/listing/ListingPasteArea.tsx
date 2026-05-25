type ListingPasteAreaProps = {
  value: string;
  onChange: (value: string) => void;
};

export function ListingPasteArea({ value, onChange }: ListingPasteAreaProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="listing-text"
        className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
      >
        Listing text
      </label>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Paste the full listing description from the seller&apos;s post.
      </p>
      <textarea
        id="listing-text"
        name="listingText"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Example: 2018 Toyota Camry SE — 87,000 miles — $12,500 — Clean title, one owner, new tires..."
        rows={10}
        className="min-h-[220px] w-full resize-y rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm leading-relaxed text-zinc-900 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        aria-label="Pasted vehicle listing text"
      />
    </div>
  );
}
