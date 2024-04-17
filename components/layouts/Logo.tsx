import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  classes?: string,
}

export const Logo = ({classes }: LogoProps) => {
  return (
    <Link href="/" className={classes}>
    <Image
      src="/assets/images/logo.webp"
      width={120}
      height={120}
      alt="Al Asma"
    />
  </Link>
  )
}
