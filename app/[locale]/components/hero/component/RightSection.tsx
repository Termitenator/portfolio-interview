import React from "react";
import { useTranslations } from "next-intl"; // Import next-intl

export default function RightSection() {
  const t = useTranslations("Hero"); // Panggil namespace "Hero"

  return (
    <div className="flex flex-col justify-center items-start lg:pl-8 space-y-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#3a4768] leading-snug">
        {t("titleLine1")} <br className="hidden lg:block" />
        {t("titleLine2")}
      </h2>

      <p className="text-gray-500 text-sm lg:text-base leading-relaxed text-justify max-w-md">
        {t("description")}
      </p>

      <div className="flex items-center space-x-6 pt-4">
        <button className="px-8 py-3 bg-[#e6864a] text-white rounded font-medium shadow-md hover:bg-[#d57841] transition-all">
          {t("reachMe")}
        </button>

        <button className="flex items-center space-x-2 text-gray-600 hover:text-[#3a4768] font-medium transition-colors group">
          <svg
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>{t("downloadCV")}</span>
        </button>
      </div>
    </div>
  );
}
