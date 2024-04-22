import { ChildrenProps } from "@/types"

const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="rounded overflow-hidden shadow-sm w-full p-5 mb-5">
        {children}
    </div>
  )
}

export default Card
