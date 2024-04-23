import { IconType } from "react-icons"

interface FeaturedBoxCardProps {
  icon?: IconType
  title: string
  value: number | string
  size?: number
}

const FeaturedBoxCard = ({
  title,
  icon: Icon,
  value,
  size = 24
}: FeaturedBoxCardProps) => {
  return (
    <div className="flex-start small-regular gap-2 gap-x-3">
      <div className="group rounded-md border border-gray-700 bg-ternary-300 p-3 hover:bg-white">
        {Icon && (
          <Icon
            size={size}
            className="text-white group-hover:text-secondary-300"
          />
        )}
      </div>
      <div className="flex body-regular flex-col gap-y-2 text-white">
        <p>{title}</p>
        <p>{value}</p>
      </div>
    </div>
  )
}

export default FeaturedBoxCard
