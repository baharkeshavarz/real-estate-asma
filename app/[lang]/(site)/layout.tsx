import NavBar from "@/components/layouts/NavBar"
import Footer from "@/components/layouts/Footer"
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
      <div className="mx-auto w-full">{children}</div>
      <Footer/>
    </main>
  )
}
