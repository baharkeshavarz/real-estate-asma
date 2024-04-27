import LayoutWrapper from "@/components/layouts/layout-wrapper"
import React from "react"
import { useTranslations } from "next-intl"

const About = () => {
  const t = useTranslations()
  return (
    <LayoutWrapper>
        About
    </LayoutWrapper>
  );
}

export default About;