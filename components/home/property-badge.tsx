import { IconType } from "react-icons"

interface PropertyBadgeProps {
  icon?: IconType
  title: string,
  value: number,
}

const PropertyBadge = ({ title, icon: Icon, value }: PropertyBadgeProps) => {
  return (
    <div className="flex-start space-2 small-regular">
      {Icon && <Icon size={24} className="text-secondary-800" />}
      <p className="px-1">{value} {title}</p>
    </div>
  )
}

export default PropertyBadge
