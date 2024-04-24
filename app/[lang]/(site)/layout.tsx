import NavBar from "@/components/layouts/NavBar"
import Footer from "@/components/layouts/footer/Footer"
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
