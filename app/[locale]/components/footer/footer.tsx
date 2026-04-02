import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/data/navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const locale = useLocale();
  const navLinks = locale === "id" ? links.ID : links.EN;

  return (
    <footer className="w-full bg-[#2f3033] text-gray-400 p-4 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <Link href="/" className="flex items-center gap-0.5">
            <Image
              src="/icon/logos.png"
              alt="logo"
              width={100}
              height={40}
              priority
              style={{ width: "auto", height: "40px" }}
              className="object-contain brightness-110 transition-all duration-300"
            />
            <span className="text-white font-semibold text-base">Pande</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="hover:text-white transition">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-center gap-5 text-lg">
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-white transition">
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-white transition">
              <FaLinkedin />
            </a>

            <a
              href="mailto:pandegedesatwikadharma@gmail.com"
              className="hover:text-white transition">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 my-6" />

        <p className="text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} Pande. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
