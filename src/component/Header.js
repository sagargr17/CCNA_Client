import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import primaryImage from "../Static/primaryPNG.png";

import "flowbite";

export default function Header() {
  const [activation, setActivation] = useState(true);

  // useEffect(() => {
  //   setActivation(true);
  // }, [activation]);

  return (
    <>
      <div
        class="flex  flex-wrap   rounded-md shadow-lg  items-center  mb-2 bg-blue justify-around"
        role="group"
      >
        <div class="flex rounded-md mb-2 bg-blue justify-center  flex-wrap  items-center  ">
          <h3
            style={{
              color: "green",
            }}
            class="text-sm sm:text-sm mt-1 text-blue flex mx-4  "
          >
            <svg
              style={{
                color: "orange",

                borderColor: "gray",
              }}
              class="w-6 h-6  mx-1 text-orange"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 19 18"
            >
              <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
            </svg>{" "}
            +977-9841150390
          </h3>
          <h3
            style={{
              color: "green",
            }}
            class="text-sm sm:text-sm mt-1 mx-2 flex items-center"
          >
            <svg
              class="w-6 h-6 mx-2 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
              style={{
                color: "orange",
              }}
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5h5M5 8h2m6-3h2m-5  3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>{" "}
            ourdomain@abc.com
          </h3>
        </div>
        <div class="item">
          <a href="/submitressume">
            <button
              type="button"
              style={{
                color: "white",
                // background: "#192655",
                border: "1px solid",
                borderColor: "white",
              }}
              class="px-4 py-2 text-lg text-sm sm:text-sm   hover:bg-blue-900 hover:text-blue-700 bg-blue-800 focus:z-10 "
            >
              Submit Resume
            </button>
          </a>
          <a href="/submitvaccancy">
            <button
              type="button"
              style={{
                color: "white",
                // background: "#192655",
                border: "1px solid",
                borderColor: "white",
              }}
              class="px-4 py-2 text-lg text-sm sm:text-sm   hover:bg-blue-900 hover:text-blue-700 bg-blue-800 focus:z-10 "
            >
              Submit vacancy
            </button>
          </a>
        </div>
      </div>
      <nav
        style={{
          position: "sticky",
          top: 0,
          borderBottomColor: "2px solid gray",
          zIndex: 1,
          boxShadow: " 2px 1px #e8e4e3",
        }}
        class="bg-white border-gray-200  md:p-4 dark:bg-gray-900 dark:border-gray-700  "
      >
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a href="/" class="flex items-center">
            <img src={primaryImage} class="h-20 mr-3 " alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul
              style={{
                zIndex: 100,
              }}
              class="flex flex-col font-medium p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <a
                  href="/"
                  class="flex items-center font-normal  sm:text-lg   font-medium justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-500 dark:focus:text-white dark:border-red-700 dark:hover:bg-red-700 md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => setActivation(false)}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center sm:text-lg font-normal  justify-between w-full font-medium py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-500 dark:focus:text-white dark:border-red-700 dark:hover:bg-red-700 md:dark:hover:bg-transparent"
                >
                  Services{" "}
                  <svg
                    class="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  style={{
                    zIndex: 100,
                  }}
                  id="dropdownNavbar"
                  class={
                    activation
                      ? "hidden  "
                      : "absolute" +
                        "  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  }
                >
                  <ul
                    onClick={() => setActivation(true)}
                    class="py-2 text-sm text-gray-700 dark:text-gray-400 "
                    aria-labelledby="dropdownLargeButton"
                    style={{
                      zIndex: 100,
                    }}
                  >
                    <li>
                      <a
                        href="/services/agedcare/"
                        class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Aged Care
                      </a>
                    </li>
                    <li onClick={() => setActivation(true)}>
                      <a
                        href="/services/homecare/"
                        class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Home Care
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/disabilitysupport/"
                        class="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Dissability Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/training/"
                        class="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Training
                      </a>
                    </li>
                  </ul>
                  {/* <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Training
                    </a>
                  </div> */}
                </div>
              </li>

              <li>
                <a
                  href="/findus/"
                  class="block py-2 pl-3 pr-4 sm:text-lg font-normal  font-medium text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Find Jobs
                </a>
              </li>
              <li>
                <a
                  href="/aboutus/"
                  class="block py-2 pl-3 pr-4 font-normal sm:text-lg  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/contactus/"
                  class="block py-2 pl-3 pr-4 sm:text-lg  font-normal font-medium text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
