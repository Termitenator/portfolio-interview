"use client";

import type { NavLinkProps } from "@/types/navbar";
import { links } from "@/data/navbar";

export default function NavLink({ language }: NavLinkProps) {
  const currentLink = links[language];

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="hidden md:flex space-x-10">
      {currentLink.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleScroll(e, link.href.replace("#", ""))}
          className="text-sm font-semibold uppercase tracking-widest relative group cursor-pointer">
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </nav>
  );
}
