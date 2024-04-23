import { IconType } from "react-icons"

interface FeaturedLinearCardProps {
  icon?: IconType
  title: string
  size?: number
}

const FeaturedLinearCard = ({
  title,
  icon: Icon,
  size = 18
}: FeaturedLinearCardProps) => {
  return (
    <div className="flex-start small-regular gap-2 gap-x-3">
      <div className="p-[0.15rem] rounded-md bg-primary-500">
        {Icon && (
          <Icon
            size={size}
            className=""
          />
        )}
        </div>
      <p className="body-regular">
        {title}
      </p>
    </div>
  )
}

export default FeaturedLinearCard
