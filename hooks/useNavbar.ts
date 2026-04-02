import { useEffect, useState } from "react";

type Language = "EN" | "ID";

interface UseNavbarProps<T> {
  links: Record<Language, T>;
}

export function useNavbar<T>({ links }: UseNavbarProps<T>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>("EN");
  const [isOpen, setIsOpen] = useState(false);

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

  const currentLink = links[language];

  return {
    isScrolled,
    language,
    setLanguage,
    isOpen,
    setIsOpen,
    currentLink,
  };
}
