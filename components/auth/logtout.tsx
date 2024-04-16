"use client"

import { Box, useTheme } from "@mui/material"
import React from "react"
import auth from "@/lib/auth"
import { usePathname, useRouter } from "next/navigation"
import { findLocalFromUrl } from "@/lib/url"
import MuiButton from "../common/button"

interface LogtoutProps {
  t: any
}

const Logtout = ({ t }: LogtoutProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const lang = findLocalFromUrl(pathname)
  const theme = useTheme()

  // Handle Logout
  const handleLogout = () => {
    auth.logout(lang, router)
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start"
      }}
    >
      <MuiButton
        onClick={handleLogout}
        sx={{
          background: `${theme.palette.error.main} !important`,
          color: theme.palette.common.white,
          borderRadius: "6px",
          margin: 1
        }}
      >
        {t.pages.general.logout}
      </MuiButton>
    </Box>
  )
}

export default Logtout
