import { CardProjectProps } from "../types/project";

export const projects: Record<"en" | "id", CardProjectProps[]> = {
  en: [
    {
      title: "NurTani Platform",
      description:
        "Agriculture platform focused on transparency from production to consumption, helping farmers connect with markets through a modern and scalable interface.",
      tech: ["Nuxt.js", "Tailwind"],
      link: "https://nurtani.tracktani.workers.dev/en",
      image: "/assets/project/Nurtani.png",
    },
    {
      title: "Crypto Analytics Platform",
      description:
        "Real-time crypto analytics platform that analyzes social data and market sentiment to identify potential trading opportunities.",
      tech: ["Next.js", "Tailwind", "API Integration"],
      link: "#",
      image: "/assets/project/Aubot.png",
    },
    {
      title: "Ferry Booking Platform",
      description:
        "Booking platform for searching ferry routes, selecting schedules, and managing passenger data with a clean and responsive interface.",
      tech: ["Next.js", "Tailwind", "API Integration"],
      link: "#",
      image: "/assets/project/Reservation.png",
    },
    {
      title: "Digital Wedding Invitation",
      description:
        "Responsive digital wedding invitation website with personalized guest access and smooth navigation across devices.",
      tech: ["Next.js", "Tailwind"],
      link: "#",
      image: "/assets/project/Wedding.png",
    },
  ],

  id: [
    {
      title: "Platform NurTani",
      description:
        "Platform pertanian yang berfokus pada transparansi dari produksi hingga konsumsi, membantu petani terhubung dengan pasar melalui antarmuka modern dan scalable.",
      tech: ["Nuxt.js", "Tailwind"],
      link: "https://nurtani.tracktani.workers.dev/en",
      image: "/assets/project/Nurtani.png",
    },
    {
      title: "Platform Analisis Kripto",
      description:
        "Platform analitik kripto waktu nyata yang menganalisis data sosial dan sentimen pasar untuk mengidentifikasi peluang trading.",
      tech: ["Next.js", "Tailwind", "API Integration"],
      link: "#",
      image: "/assets/project/Aubot.png",
    },
    {
      title: "Platform Pemesanan Kapal",
      description:
        "Platform pemesanan untuk mencari rute feri, memilih jadwal, dan mengelola data penumpang dengan UI yang bersih dan responsif.",
      tech: ["Next.js", "Tailwind", "API Integration"],
      link: "#",
      image: "/assets/project/Reservation.png",
    },
    {
      title: "Undangan Pernikahan Digital",
      description:
        "Website undangan pernikahan digital responsif dengan akses tamu personal dan navigasi yang halus di semua perangkat.",
      tech: ["Next.js", "Tailwind"],
      link: "#",
      image: "/assets/project/Wedding.png",
    },
  ],
};
