"use client"

import { findLocalFromUrl } from "@/lib/url"
import { Stack, Typography, useTheme } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface AuthFooterProps {
  page: string
  pageLink: string
  title: string
  subTitle: string
}

const AuthFooter = ({ page, pageLink, title, subTitle }: AuthFooterProps) => {
  const pathname = usePathname()
  const lang = findLocalFromUrl(pathname)
  const theme = useTheme()

  return (
    <Stack mt={5} spacing={1.5}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Typography textAlign="center" variant="h6">
          {subTitle}
          <Link
            href={`/${lang}/${pageLink}`}
            style={{
              paddingRight: 1,
              paddingLeft: 1,
              color: theme.palette.primary.main
            }}
          >
            {title}
          </Link>
        </Typography>
      </Stack>
    </Stack>
  )
}

export default AuthFooter
