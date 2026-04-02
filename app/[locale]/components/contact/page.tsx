import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const mailHref = `mailto:pandegedesatwikadharma@gmail.com?subject=${encodeURIComponent(
    t("subject"),
  )}&body=${encodeURIComponent(t("body"))}`;
  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#3d3e42] rounded-[30px] shadow-2xl py-16 px-6 lg:px-20 text-center text-white">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">{t("desc")}</p>
          <a
            href={mailHref}
            className="inline-block mt-6 px-6 py-3 bg-orange-500 rounded-lg hover:opacity-90 transition">
            {t("btn")}
          </a>
        </div>
      </div>
    </section>
  );
}
