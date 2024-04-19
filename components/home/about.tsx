import Image from "next/image"
import Link from "next/link"
import React from "react"
import { HiMiniPlay } from "react-icons/hi2"

const About = () => {
  return (
    <div className="container relative mt-16 lg:mt-24">
      <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative">
            <Image
              src="/assets/images/about.jpg"
              width={711}
              height={711}
              className="rounded-xl shadow-md"
              alt=""
            />
            <div className="absolute bottom-2/4 end-0 start-0 translate-y-2/4 text-center">
              <a
                href="#!"
                data-type="youtube"
                data-id="yba7hPeTSjk"
                className="lightbox dark:shadow-gyay-700 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary-500 shadow-md dark:bg-slate-900"
              >
                <HiMiniPlay className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="lg:ms-4">
            <h4 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl lg:leading-normal">
              About Us
            </h4>
            <p className="max-w-xl text-slate-400">
              Al Asma developed a platform for the Real Estate marketplace that
              allows buyers and sellers to easily execute a transaction on their
              own. The platform drives efficiency, cost transparency and control
              into the hands of the consumers. Al Asma is Real Estate Redefined.
            </p>

            <div className="mt-4">
              <Link
                href=""
                className="btn body-semibold mt-5 rounded-md bg-primary-500 p-3 text-secondary-800 hover:bg-primary-800"
              >
                Learn More{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
