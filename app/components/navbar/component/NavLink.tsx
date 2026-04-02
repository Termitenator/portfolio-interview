import Link from "next/link";
import type { NavLinkProps } from "@/types/navbar";
import { links } from "@/data/navbar";

export default function NavLink({ language }: NavLinkProps) {
  const currentLink = links[language];
  return (
    <nav className="hidden md:flex space-x-10">
      {currentLink.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-semibold uppercase tracking-widest relative group">
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
}
