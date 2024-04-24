import { IconType } from "react-icons"

interface PropertyBadgeProps {
  icon?: IconType
  title: string,
  value: number,
  size?: number,
}

const PropertyBadge = ({ title, icon: Icon, value, size= 18 }: PropertyBadgeProps) => {
  return (
    <div className="flex-start space-2 small-regular">
      {Icon && <Icon size={size} className="text-secondary-800" />}
      <p className="px-0.5">{value} {title}</p>
    </div>
  )
}

export default PropertyBadge
