"use client";
import Link from "next/link";
import Logo from "./component/logo";
import NavLink from "./component/NavLink";
import LanguageSwitcher from "./component/LanguageSwitcher";
import { links } from "@/data/navbar";
import { useNavbar } from "@/hooks/useNavbar";

export default function Navbar() {
  const { isScrolled, language, setLanguage, isOpen, setIsOpen, currentLink } =
    useNavbar({ links });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out text-black ${
          isOpen
            ? "bg-white py-4"
            : isScrolled
              ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4"
              : "bg-transparent py-6"
        }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Logo />
          </div>

          <div className="flex-none">
            <NavLink language={language} />
          </div>

          <div className="flex-1 flex justify-end items-center">
            <div className="hidden md:block">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-black hover:opacity-70 transition-opacity"
              aria-label="Toggle Menu">
              {isOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-40 bg-white text-black transform transition-transform duration-500 ease-in-out pt-[88px] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } flex flex-col md:hidden`}>
        <div className="flex flex-col px-6 py-4 space-y-6 overflow-y-auto h-full">
          {currentLink.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold tracking-wide border-b border-black/5 pb-4 hover:opacity-70 transition-opacity">
              {link.name}
            </Link>
          ))}

          <div className="w-full h-[1px] bg-black/10 my-2"></div>

          <div className="pt-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
              {language === "EN" ? "Select Language" : "Pilih Bahasa"}
            </span>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </div>
    </>
  );
}
