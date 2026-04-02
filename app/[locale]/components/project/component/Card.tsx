import Image from "next/image";
import ProjectBadge from "./Badge";
import ProjectButton from "./Button";
import type { CardProjectProps } from "@/types/project";

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  image,
}: CardProjectProps) {
  return (
    <div className="relative w-full h-[500px] rounded-[30px] overflow-hidden shadow-2xl group">
      <Image
        src={image || "/projects/placeholder.png"}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-top group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 p-6 w-full text-white">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-sm text-gray-200 mt-2 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((item, index) => (
            <ProjectBadge key={index} label={item} />
          ))}
        </div>

        <div className="mt-4">
          <ProjectButton link={link} />
        </div>
      </div>
    </div>
  );
}
