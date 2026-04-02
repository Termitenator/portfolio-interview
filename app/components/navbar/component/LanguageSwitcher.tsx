import type { LanguageSwitcherProps } from "@/types/language";

export default function LanguageSwitcher({
  language,
  setLanguage,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center space-x-2 text-sm font-bold tracking-widest">
      <button
        onClick={() => setLanguage("EN")}
        className={`transition-all duration-300 ${
          language === "EN" ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`}
        aria-label="Switch to English">
        EN
      </button>
      <span className="opacity-30 font-light">|</span>
      <button
        onClick={() => setLanguage("ID")}
        className={`transition-all duration-300 ${
          language === "ID" ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`}
        aria-label="Switch to Indonesian">
        ID
      </button>
    </div>
  );
}
