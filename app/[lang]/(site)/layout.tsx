import { getDictionary } from "@/lib/locale"
import { ChildrenLocalProps } from "@/types"

export default async function MainLayout({
  children,
  params
}: ChildrenLocalProps) {
  const translation = await getDictionary(params.lang)
  return (
    <main>
      {children}
    </main>
  )
}
