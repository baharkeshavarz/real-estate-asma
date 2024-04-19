import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  classes?: string
  width?: number
  height?: number
}

export const Logo = ({ classes, width = 120, height = 120 }: LogoProps) => {
  return (
    <Link href="/" className={classes}>
      <Image
        src="/assets/images/logo.webp"
        width={width}
        height={height}
        alt="Al Asma"
      />
    </Link>
  )
}
