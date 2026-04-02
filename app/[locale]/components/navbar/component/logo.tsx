import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  return (
    <Link href="#" className="hover:opacity-70 transition-opacity block">
      <Image
        src="/icon/logos.png"
        alt="logo"
        width={100}
        height={40}
        priority
        style={{ width: "auto", height: "40px" }}
        className="object-contain brightness-110 transition-all duration-300"
      />
    </Link>
  );
}
