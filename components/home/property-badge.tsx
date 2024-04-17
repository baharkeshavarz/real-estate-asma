import { IconType } from "react-icons"

interface PropertyBadgeProps {
  icon?: IconType
  title: string
}

const PropertyBadge = ({ title, icon: Icon }: PropertyBadgeProps) => {
  return (
    <div className="flex-start space-2 small-regular">
      {Icon && <Icon size={24} className="text-primary-500"/>}
      <p className="px-1">{title}</p>
    </div>
  )
}

export default PropertyBadge
