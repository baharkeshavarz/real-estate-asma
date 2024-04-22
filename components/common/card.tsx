import { ChildrenProps } from "@/types"

const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="rounded overflow-hidden shadow-md w-full p-10 mb-5">
        {children}
    </div>
  )
}

export default Card
