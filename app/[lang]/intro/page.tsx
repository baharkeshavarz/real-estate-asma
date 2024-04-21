import Image from "next/image"
import { Logo } from "@/components/layouts/Logo"

const Intro = () => {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex-center bg-[#212121] shadow-xl">
        <div className="relative h-[500px] w-[500px] p-10">
          <Image src="/assets/images/about.webp" fill alt="Al Asma" />
        </div>
      </div>

      <div className="flex-center flex-col bg-secondary-100">
        <Logo classes="pt-12" />
        <div className="flex-center flex-col text-center text-black/70">
          <h1 className="h3-semibold pb-2 pt-8">
            Are You Ready to Get Your Dream House?
          </h1>
          <h4 className="body-regular pt-1 text-secondary-800">
            Let’s find the right option for you
          </h4>
        </div>

        <div className="w-full space-y-5 px-5 py-8 md:px-24">
          <div className="flex w-full cursor-pointer flex-col rounded-md bg-white/80 shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
            <div className="relative h-[200px] w-full">
              <Image
                src="/assets/images/intro/united-arab-emirates.jpg"
                fill
                alt="united arab emirates"
                className="rounded-sm shadow-xl"
              />
            </div>
            <h4 className="paragraph-regular py-3 text-center text-black">
              United Arab Emirates
            </h4>
          </div>
          <div className="flex cursor-pointer flex-col rounded-md bg-white/80 shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
            <div className="relative h-[200px] w-full">
              <Image
                src="/assets/images/intro/oman.jpeg"
                fill
                alt="oman"
                className="rounded-sm shadow-xl"
              />
            </div>
            <h4 className="paragraph-regular py-3 text-center text-black">
              Sultanate of Oman
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
