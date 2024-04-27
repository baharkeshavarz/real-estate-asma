import NavBar from "@/components/layouts/navbar-component"
import Footer from "@/components/layouts/footer/footer-component"
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
