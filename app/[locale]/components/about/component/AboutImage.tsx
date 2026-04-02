import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative w-full flex justify-center items-center p-4 lg:p-10">
      <div className="relative w-full max-w-[600px] aspect-square">
        <Image
          src="/assets/illustration.png"
          alt="Illustration"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 600px, 600px"
        />
      </div>
    </div>
  );
}
