import NavBar from "@/components/layouts/NavBar"
import Footer from "@/components/layouts/footer/Footer"
import { getDictionary } from "@/lib/locale"
import { ChildrenLocalProps } from "@/types"

export default async function MainLayout({
  children,
  params
}: ChildrenLocalProps) {
  const translation = await getDictionary(params.lang)

  return (
    <main>
      <NavBar />
      <div className="pt-10">{children}</div>
      <Footer />
    </main>
  )
}
