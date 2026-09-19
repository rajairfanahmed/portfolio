"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 md:gap-8" aria-label="Main Navigation">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={pathname === link.href ? "page" : undefined}
          className="group relative flex min-h-[44px] min-w-[44px] items-center justify-center text-sm font-medium transition-colors hover:text-accent-primary active:scale-95 aria-[current=page]:text-accent-primary"
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent-primary opacity-0 shadow-[0_0_8px_var(--color-accent-primary)] transition-all group-hover:w-full group-hover:opacity-100 group-aria-[current=page]:w-full group-aria-[current=page]:opacity-100" />
        </Link>
      ))}
    </nav>
  );
}
