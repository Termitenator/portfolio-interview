import { useEffect, useState } from "react";
import { useLocale } from "next-intl"; // Import dari next-intl

// Pastikan tipe ini sesuai dengan struktur data `links` kamu
type Language = "EN" | "ID";

interface UseNavbarProps<T> {
  links: Record<Language, T>;
}

export function useNavbar<T>({ links }: UseNavbarProps<T>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Ambil locale yang sedang aktif dari next-intl (biasanya 'en' atau 'id')
  const locale = useLocale();

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset"; // safety cleanup
    };
  }, [isOpen]);

  // Karena next-intl biasanya pakai huruf kecil ('en', 'id'),
  // kita ubah jadi huruf besar ('EN', 'ID') agar cocok dengan key di object `links`
  const currentLanguageKey = locale.toUpperCase() as Language;
  const currentLink = links[currentLanguageKey];

  return {
    isScrolled,
    isOpen,
    setIsOpen,
    currentLink,
    // language dan setLanguage kita hapus dari return
  };
}
