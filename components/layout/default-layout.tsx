"use client"

import React, { useEffect, useState } from "react"
import Sidebar from "@/components/layout/sidebar"
import Header from "@/components/layout/header"
import profileServices from "@/services/profile"
import { ProfileData } from "@/types/index"
import { useScoreStore } from "@/store/score"

interface DefaultLayoutProps {
  t: any
  children: React.ReactNode
}

export default function DefaultLayout({ t, children }: DefaultLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>()
  const { setCredit } = useScoreStore()
  const { getProfileData } = profileServices
  const getProfile = async () => {
    const res = await getProfileData()
    if (res.data.succeed) {
      setProfileData(res.data.value)
      setCredit(res.data.value.score)
    }
  }
  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar
          t={t}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          profileData={profileData}
        />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            t={t}
            profileData={profileData}
          />
          <main>
            <div className="mx-auto max-w-5xl p-2 md:p-4 2xl:p-5">
              {children}
            </div>
          </main>
        </div>
      </div>
  )
}
