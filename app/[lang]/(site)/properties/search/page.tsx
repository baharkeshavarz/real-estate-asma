import Breadcrumb from "@/components/common/breadcrumb"
import PropertyFilter from "../components/filter/property-filter"
import PropertyList from "../components/property-list"

const PropertyResult = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col">
      <div className="py-5">
        <Breadcrumb
          homeElement={"Search Properties"}
          separator={<span> | </span>}
          activeClasses="text-primary-900"
          containerClasses="flex-start py-4"
          listClasses="hover:underline mx-2 body-regular"
          capitalizeLinks
        />
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <PropertyFilter />
        <PropertyList />
      </div>
    </div>
  )
}

export default PropertyResult
