import React from "react";
import Header from "../component/Header";
import Aboutus from "../component/Aboutus";
import Footer from "../component/Footer";
import "../component/style/ABoutUsScreen.css";
import Joindus from "../component/Joindus";

export default function AboutusScreen() {
  return (
    <div class="text-center">
      <Header />
      <div>
        <h1 class="text-4xl my-10 ml-2 lg:text-5xl font-bold leading-9 text-blue-900 text-blue:800 pb-4">
          ~ About us ~
        </h1>
      </div>
      <div class="flex lg:px-20 lg:pb-20 justify-between flex-col md:flex-row  flex-col-reverse ">
        <p class="text-lg px:2 font-medium text-gray-700 md:text-xl dark:text-gray-700 py-10 pb-0  lg:py-10 px-2  md:mx-5   sm:w-3/4 text-justify ">
          Committed to delivering top-notch nursing services, we prioritize
          building lasting relationships and understanding the unique needs of
          our community. Our locally owned and operated status allows us to
          offer skilled and compassionate professionals, including Registered
          Nurses, Enrolled Nurses, Assistants in Nursing, and Disability Support
          Workers. With extensive experience and expertise, we ensure the
          highest standards of care and professionalism. With a dedication to
          person-centered care, we strive to make a positive impact on
          healthcare in our region and become a trusted partner in nursing for
          years to come.
          <span class="mt-10 py-10">
            <ol class="relative border-l border-gray-200 dark:border-gray-700 py-10 sm:py-5 ">
              <li class="mb-10 ml-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Our success story 1
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    Latest
                  </span>
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on January 13th, 2022
                </time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
              </li>
              <li class="mb-10 ml-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Our success story 2
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 7th, 2021
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li class="ml-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Our success story 3
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 2nd, 2021
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
          </span>
        </p>

        <div class="bg-gray-100 shadow-lg    text-white rounded-lg w-full lg:mx-5 md:w-[40rem]  space-y-6 p-10">
          <div class="grid grid-cols-6 col-span-2   gap-2    ">
            <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
              <img
                class="h-full w-full object-cover "
                src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
              <img
                class="h-full w-full object-cover  "
                src="https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
              <img
                class="h-full w-full object-cover  "
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
              <img
                class="h-full w-full object-cover  "
                src="https://images.pexels.com/photos/4421551/pexels-photo-4421551.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <img
                class="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1580869318757-a6c605b061ed?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <img
                class="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1623261887667-dfa1b90422a0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <img
                class="h-full w-full object-cover "
                src="https://images.pexels.com/photos/6129243/pexels-photo-6129243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <Joindus></Joindus>
      <Footer />
    </div>
  );
}
