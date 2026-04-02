"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = (newLocale: string) => {
    if (currentLocale === newLocale) return;

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center space-x-2 text-sm font-bold tracking-widest">
      <button
        onClick={() => switchLanguage("en")}
        disabled={isPending}
        className={`transition-all duration-300 ${
          currentLocale === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`}>
        EN
      </button>

      <span className="opacity-30 font-light">|</span>

      <button
        onClick={() => switchLanguage("id")}
        disabled={isPending}
        className={`transition-all duration-300 ${
          currentLocale === "id" ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`}>
        ID
      </button>
    </div>
  );
}
