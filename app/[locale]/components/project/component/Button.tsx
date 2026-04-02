import { useTranslations } from "next-intl";

type Props = {
  link: string;
};

export default function ProjectButton({ link }: Props) {
  const t = useTranslations("Project");
  return (
    <a
      href={link}
      className="inline-block mt-6 px-4 py-2 bg-orange-500 rounded-lg text-sm hover:opacity-90 transition">
      {t("btn")}
    </a>
  );
}
