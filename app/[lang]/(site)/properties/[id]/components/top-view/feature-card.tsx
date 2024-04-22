import { IconType } from "react-icons"

interface PropertyCardProps {
  icon?: IconType
  title: string
  value: number | string
  size?: number
}

const PropertyCard = ({
  title,
  icon: Icon,
  value,
  size = 24
}: PropertyCardProps) => {
  return (
    <div className="flex-start small-regular gap-2">
      <div className="group rounded-md border border-secondary-300 bg-secondary-800 p-3 hover:bg-white">
        {Icon && (
          <Icon
            size={size}
            className="text-white group-hover:text-secondary-300"
          />
        )}
      </div>
      <div className="flex-start body-regular flex-col gap-y-2 text-white">
        <p>{title}</p>
        <p>{value}</p>
      </div>
    </div>
  )
}

export default PropertyCard
