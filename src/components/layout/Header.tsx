import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
  current?: boolean;
};

const navItems: NavItem[] = [
  { label: "Analyze", href: "#analyze", current: true },
  { label: "Library", href: "#", disabled: true },
  { label: "Saved", href: "#", disabled: true },
];

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-0.5">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            CarSight
          </Link>
          <p className="hidden text-xs text-zinc-500 sm:block dark:text-zinc-400">
            Vehicle listing decision support
          </p>
        </div>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          {navItems.map((item) =>
            item.disabled ? (
              <span
                key={item.label}
                className="cursor-not-allowed rounded-lg px-3 py-2 text-sm text-zinc-400 dark:text-zinc-600"
                aria-disabled="true"
              >
                {item.label}
              </span>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={
                  item.current
                    ? "rounded-lg bg-teal-50 px-3 py-2 text-sm font-medium text-teal-800 dark:bg-teal-950 dark:text-teal-200"
                    : "rounded-lg px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                }
                aria-current={item.current ? "page" : undefined}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
