import Image from "next/image"
import Link from "next/link"
import React from "react"
import { HiMiniPlay } from "react-icons/hi2"
import { HiCheck } from "react-icons/hi2";
import LinkBtn from "../shared/inputs/link-btn";

const About = () => {
  return (
    <div className="container relative mt-16 lg:mt-24">
      <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative">
            <Image
              src="/assets/images/about.webp"
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
              About Al Asma
            </h4>
            <p className="max-w-xl text-justify leading-[25px] text-secondary-800">
              Our Vision is to achieve 100% customer satisfaction by providing
              high quality services at reasonable cost. Our vision for the
              future is to strive to become an entity in the solutions of
              employment-based and commercial services companies,capable of
              demanding an unconditional response to the target position. We are
              always ready to move our achievements to the next level We are
              constantly growing and we would like to keep pace with growth.
            </p>

            <h4 className="py-6 paragraph-semibold">Our keys for development</h4>
            <ul className="list-unstyled text-secondary-800 space-y-2">
              <li className="flex-start gap-1"><HiCheck/> Desire for Excellence</li>
              <li className="flex-start gap-1"><HiCheck/> Trust and confidence build-up</li>
              <li className="flex-start gap-1"><HiCheck/> Innovation</li>
              <li className="flex-start gap-1"><HiCheck/> Transparency</li>
              <li className="flex-start gap-1"><HiCheck/> Teamwork</li>
            </ul>
            <div className="mt-4">
              <LinkBtn label="Learn More" hrefLink="#"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
