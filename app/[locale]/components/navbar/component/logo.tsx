import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  return (
    <Link href="#" className="hover:opacity-70 transition-opacity block">
      <Image
        src="/icon/logos.png"
        alt="logo"
        width={100}
        height={100}
        priority
        // Hapus logika invert di bawah ini, sisakan class dasarnya saja
        className="w-auto h-10 object-contain transition-all duration-300"
      />
    </Link>
  );
}
