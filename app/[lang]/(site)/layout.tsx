import NavBar from "@/components/layouts/navbar"
import Footer from "@/components/layouts/footer/footer"
import { ChildrenLocalProps } from "@/types"

export default function MainLayout({
  children,
}: ChildrenLocalProps) {
  return (
    <main>
      <NavBar />
      <div className="pt-10">{children}</div>
      <Footer />
    </main>
  )
}
