import { useTranslations } from "next-intl";

export default function AboutContent() {
  const t = useTranslations("About");

  return (
    <div className="flex flex-col justify-center space-y-6 text-white p-4 lg:pr-20">
      <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">
        {t("badge")}
      </span>

      <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
        {t("title")}
      </h2>

      <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
        <p>{t("description1")}</p>
        <p>{t("description2")}</p>
      </div>
    </div>
  );
}
