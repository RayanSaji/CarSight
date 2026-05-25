type AnalyzeListingButtonProps = {
  disabled?: boolean;
  onClick: () => void;
};

export function AnalyzeListingButton({
  disabled = false,
  onClick,
}: AnalyzeListingButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="w-full rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto dark:focus:ring-offset-zinc-950"
    >
      Analyze Listing
    </button>
  );
}
