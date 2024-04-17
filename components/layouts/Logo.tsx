import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
    <Image
      src="/assets/images/logo.webp"
      width={120}
      height={120}
      alt="Al Asma"
    />
  </Link>
  )
}
