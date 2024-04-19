import React from "react"
import { Logo } from "./Logo"
import { HiChevronRight } from "react-icons/hi2"
import Link from "next/link"
import NewsLetter from "./NewsLetter"

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-slate-900">
      <div className="container relative">
        <div className="grid grid-cols-1">
          <div className="relative py-16">
            <div className="relative w-full">
              <div className="relative -top-40 overflow-hidden rounded-xl bg-white px-6 py-10 shadow-lg lg:px-8">
                <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-2">
                  <div className="z-1 text-center md:text-start">
                    <h3 className="md:paragraph-medium text-2xl font-medium leading-normal text-black md:leading-normal">
                      Subscribe to Newsletter!
                    </h3>
                    <p className="body-medium py-2 text-slate-400">
                      Subscribe to get latest updates and information.
                    </p>
                  </div>
                  <NewsLetter />
                </div>

                <div className="absolute -start-5 -top-5">
                  <div className="uil uil-envelope text-7xl text-black/5 ltr:-rotate-45 rtl:rotate-45 lg:text-[150px]"></div>
                </div>

                <div className="absolute -bottom-5 -end-5">
                  <div className="uil uil-pen rtl:-rotate-9 text-7xl text-black/5 lg:text-[150px]"></div>
                </div>
              </div>

              <div className="-mt-24 grid grid-cols-1 gap-[30px] md:grid-cols-12">
                <div className="md:col-span-12 lg:col-span-4">
                  <Link href="#" className="text-[22px] focus:outline-none">
                    <Logo />
                  </Link>
                  <p className="mt-6 text-gray-300">
                    A great plateform to buy, sell and rent your properties
                    without any agent or commisions.
                  </p>
                </div>

                <div className="md:col-span-4 lg:col-span-2">
                  <h5 className="font-semibold tracking-[1px] text-gray-100">
                    Company
                  </h5>
                  <ul className="footer-list mt-6 list-none">
                    <li>
                      <Link
                        href="#"
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight /> About us
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="#"
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight /> Services
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href=""
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight /> Pricing
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="#"
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight /> Blog
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="#"
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight /> Login
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-4 lg:col-span-3">
                  <h5 className="font-semibold tracking-[1px] text-gray-100">
                    Usefull Links
                  </h5>
                  <ul className="footer-list mt-6 list-none">
                    <li>
                      <Link
                        href="#"
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight />
                        Terms of Services
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="privacy.html"
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight /> Privacy Policy
                      </Link>
                    </li>

                    <li className="mt-[10px]">
                      <Link
                        href="#"
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight /> Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-4 lg:col-span-3">
                  <h5 className="font-semibold tracking-[1px] text-gray-100">
                    Contact Details
                  </h5>

                  <div className="mt-6 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-map-pin me-3 h-5 w-5 text-primary-500"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div className="">
                      <h6 className="mb-2 text-gray-300">
                        C/54 Northwest Freeway, <br /> Suite 558, <br />{" "}
                        Houston, USA 485
                      </h6>
                      <Link
                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                        data-type="iframe"
                        className="lightbox text-primary-500 duration-500 ease-in-out hover:text-primary-800"
                      >
                        View on Google map
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail me-3 h-5 w-5 text-primary-500"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <div className="">
                      <Link
                        href="mailto:contact@example.com"
                        className="text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        contact@example.com
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-phone me-3 h-5 w-5 text-primary-500"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div className="">
                      <Link
                        href="tel:+152534-468-854"
                        className="text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        +152 534-468-854
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 px-0 py-[30px]">
        <div className="container relative text-center">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="text-center md:text-start">
              <p className="mb-0 text-gray-300">
                ©{" "}
                <script
                  type="text/javascript"
                  id="www-widgetapi-script"
                  src="https://www.youtube.com/s/player/1a390536/www-widgetapi.vflset/www-widgetapi.js"
                ></script>
                <script
                  id="iframe_api"
                  src="https://www.youtube.com/iframe_api"
                ></script>
                <script>document.write(new Date().getFullYear())</script>2024 Al
                Asma. Design with <i className="mdi mdi-heart text-red-600"></i>{" "}
                by{" "}
                <Link
                  href="https://shreethemes.in/"
                  target="_blank"
                  className="text-reset"
                >
                  Designer name
                </Link>
                .
              </p>
            </div>

            <ul className="list-none text-center md:text-end">
              <li className="inline-block rounded-md border border-gray-800 p-2 hover:bg-primary-500">
                <Link
                  href="https://1.envato.market/hously"
                  target="_blank"
                  className="btn btn-icon btn-sm text-gray-400 hover:bg-primary-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-cart h-4 w-4"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </Link>
              </li>
              <li className="inline-block rounded-md border border-gray-800 p-2 hover:bg-primary-500">
                <Link
                  href="https://dribbble.com/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm text-gray-400 hover:bg-primary-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-dribbble h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                  </svg>
                </Link>
              </li>

              <li className="inline-block rounded-md border border-gray-800 p-2 hover:bg-primary-500">
                <Link
                  href="http://linkedin.com/company/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm text-gray-400 hover:bg-primary-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin h-4 w-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </li>
              <li className="inline-block rounded-md border border-gray-800 p-2 hover:bg-primary-500">
                <Link
                  href="https://www.facebook.com/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm text-gray-400 hover:bg-primary-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-facebook h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </li>
              <li className="inline-block rounded-md border border-gray-800 p-2 hover:bg-primary-500">
                <Link
                  href="https://www.instagram.com/shreethemes/"
                  target="_blank"
                  className="btn btn-icon btn-sm text-gray-400 hover:bg-primary-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram h-4 w-4"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              </li>
              <li className="inline-block rounded-md border border-gray-800 p-2 hover:bg-primary-500">
                <Link
                  href="https://twitter.com/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm text-gray-400 hover:bg-primary-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter h-4 w-4"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </li>
              <li className="inline-block rounded-md border border-gray-800 p-2 hover:bg-primary-500">
                <Link
                  href="mailto:support@shreethemes.in"
                  className="btn btn-icon btn-sm text-gray-400 hover:bg-primary-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail h-4 w-4"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </Link>
              </li>
              <li className="inline-block rounded-md border border-gray-800 p-2 hover:bg-primary-500">
                <Link
                  href="https://forms.gle/QkTueCikDGqJnbky9"
                  target="_blank"
                  className="btn btn-icon btn-sm text-gray-400 hover:bg-primary-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-file-text h-4 w-4"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
