"use client";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  const email = "pandegedesatwikadharma@gmail.com";

  // Pisahkan agar mudah debug jika ada error di sini
  const subject = encodeURIComponent(t("subject"));
  const body = encodeURIComponent(t("body"));
  const mailHref = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#3d3e42] rounded-[30px] shadow-2xl py-16 px-6 lg:px-16 text-center text-white">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">{t("desc")}</p>

          <p className="mt-6 text-sm text-gray-400">
            {t("emailLabel")}:{" "}
            <span className="text-white font-medium">{email}</span>
          </p>

          <p className="mt-2 text-sm text-gray-400">{t("availability")}</p>
          <a
            href={mailHref}
            className="inline-block mt-6 px-6 py-3 bg-orange-500 rounded-lg hover:opacity-90 transition font-medium">
            {t("btn")}
          </a>
        </div>
      </div>
    </section>
  );
}
