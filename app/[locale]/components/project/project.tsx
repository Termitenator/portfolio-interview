import ProjectCard from "./component/Card";
import { projects } from "../../../../data/project";
import type { CardProjectProps } from "@/types/project";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function ProjectSection() {
  const locale = useLocale() as "en" | "id";

  const t = useTranslations("Project");

  const projectList: CardProjectProps[] = projects[locale];

  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <p className="text-orange-500 text-sm mb-2">{t("title")}</p>

        <h2 className="text-3xl font-bold text-[#3d3e42] mb-10">
          {t("sub_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
