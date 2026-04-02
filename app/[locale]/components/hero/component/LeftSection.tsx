import React from "react";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function LeftSection() {
  const t = useTranslations("Hero");

  return (
    <div className="flex flex-col justify-center items-start space-y-6">
      <div>
        <p className="text-orange-500 font-medium text-lg mb-1">
          {t("greeting")}
        </p>
        <h1 className="text-6xl font-extrabold text-[#3a4768]">Pande</h1>
        <div className="w-12 h-1.5 bg-orange-500 mt-3 rounded-full"></div>
      </div>

      <div className="flex items-center space-x-6 text-[#3a4768] mt-8">
        <a
          href="#"
          className="hover:text-orange-500 transition-colors"
          aria-label="LinkedIn">
          <FaLinkedin size={26} />
        </a>
        <a
          href="#"
          className="hover:text-orange-500 transition-colors"
          aria-label="GitHub">
          <FaGithub size={26} />
        </a>
        <a
          href="#"
          className="hover:text-orange-500 transition-colors"
          aria-label="Dribbble">
          <FaDribbble size={26} />
        </a>
      </div>
    </div>
  );
}
