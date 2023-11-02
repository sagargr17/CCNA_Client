import React from "react";

export default function (props) {
  return (
    <div
      id={props.id}
      class="flex-start  border border-gray-200 rounded-lg shadow my-2 sm:mb-10 justify-evenly py-2 px-2  pr-36 mx-2  md:pr-0  "
    >
      <div class="flex flex-col ">
        <h5
          class="mb-1  text-2xl sm:text-3xl text-orange  font-bold tracking-tight text-blue-900 text-blue:800 flex"
          color="orange"
        >
          <svg
            class="h-8 w-8 text-blue-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="3" y1="21" x2="21" y2="21" />{" "}
            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />{" "}
            <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />{" "}
            <line x1="10" y1="9" x2="14" y2="9" />{" "}
            <line x1="12" y1="7" x2="12" y2="11" />
          </svg>
          {props.institution}
        </h5>
        <div class="flex items-center  justify-between min-w-0">
          <div class="flex-auto items-center flex space-x-3 text-xs text-gray-500">
            <span class="text-lg  font-medium flex">
              <svg
                class="h-6 w-6 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="14" y1="12" x2="14" y2="12.01" />{" "}
                <line x1="10" y1="12" x2="10" y2="12.01" />{" "}
                <line x1="12" y1="10" x2="12" y2="10.01" />{" "}
                <line x1="12" y1="14" x2="12" y2="14.01" />{" "}
                <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
              </svg>
              {props.title}
            </span>
          </div>
          <div class="fkex-col space-x-3 text-sm font-medium hidden md:block"></div>
        </div>
        <p class="flex items-center text-lg text-gray-700 font-medium ">
          <svg
            class="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
            <line x1="16" y1="3" x2="16" y2="7" />{" "}
            <line x1="8" y1="3" x2="8" y2="7" />{" "}
            <line x1="4" y1="11" x2="20" y2="11" />{" "}
            <rect x="8" y="15" width="2" height="2" />
          </svg>
          {props.time}
        </p>
        {/* <p class="flex items-center mt-3 italic text-lg text-gray-500 font-medium ml-1  ">
          " {props.description} "
        </p> */}
        <p class="flex items-center mt-3  text-lg text-gray-500 font-medium ml-1  ">
          <svg
            class="h-6 w-6 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />{" "}
            <circle cx="12" cy="10" r="3" />
          </svg>
          {props.location}
        </p>
      </div>
      <div class="text-center sm:text-left my-2 ">
        <a href={"/findus/" + props.id}>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span class="relative px-5 py-3 text-green:800 transition-all ease-in duration-75  bg-white rounded-md group-hover:bg-opacity-0">
              Submit Your Resume
            </span>
          </button>
        </a>
      </div>

      {/* <div class="flex my-3 border-t border-gray-800 w-100 "></div> */}
    </div>
  );
}
