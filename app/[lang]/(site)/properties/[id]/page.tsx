import PropertyFilter from "../components/filter/property-filter"
import PropertyList from "../components/property-list"

const PropertyResult = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl gap-5 pt-9">
        <PropertyFilter />
        <PropertyList />
    </div>
  )
}

export default PropertyResult
