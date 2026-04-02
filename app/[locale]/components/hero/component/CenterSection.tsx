import Image from "next/image";

export default function CenterSection() {
  return (
    <div className="flex justify-center items-end relative w-full h-[400px] md:h-[450px] lg:h-[550px]">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-100 to-transparent z-0"></div>
      <div className="relative z-10 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[480px] h-full">
        <Image
          src="/assets/Pande2.png"
          alt="Pande Profile"
          fill
          className="object-contain object-bottom drop-shadow-lg"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
