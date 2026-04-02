export interface LanguageSwitcherProps {
  language: "EN" | "ID";
  setLanguage: (lang: "EN" | "ID") => void;
}
