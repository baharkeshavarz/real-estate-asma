"use client"

import LightGallery from "lightgallery/react"

// import styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss"
import "lightgallery/scss/lg-zoom.scss"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

const PropertyGallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized")
  }
  return (
    <div className="flex-center">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <a href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />1111
            </a>
            <a href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </a>
            <a href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="grid gap-4">
            <a href="/assets/images/properties/property-1.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </a>
            <a href="/assets/images/properties/property-2.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </a>
            <a href="/assets/images/properties/property-3.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="grid gap-4">
            <a href="/assets/images/properties/property-1.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </a>
            <a href="/assets/images/properties/property-1.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </a>
            <a href="/assets/images/properties/property-1.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="grid gap-4">
            <a href="/assets/images/properties/property-1.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </a>
            <a href="/assets/images/properties/property-1.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </a>
            <a href="/assets/images/properties/property-1.jpg">
              <img
                className="h-auto  rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </a>
          </div>
        </div> */}

          <a href="/assets/images/properties/property-1.jpg" className="block">
            <img
              alt="img1"
              src="/assets/images/properties/property-2.jpg"
              width={700}
              height={150}
            />
          </a>
          {/* <a href="/assets/images/properties/property-2.jpg" className="block w-60">
            <img
              alt="img2"
              src="/assets/images/properties/property-3.jpg"
              width={200}
              height={200}
            />
          </a>

          <a href="/assets/images/properties/property-3.jpg" className="block w-60">
            <img
              alt="img2"
              src="/assets/images/properties/property-3.jpg"
              width={200}
              height={200}
            />
          </a> */}
      </LightGallery>
    </div>
  )
}

export default PropertyGallery
