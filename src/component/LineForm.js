import React from "react";
import "./style/Line.css";

export default function LineForm(props) {
  return (
    <>
      <div
        class=" p-10 sm-5 md:p-10 bg-gray-100 sm:mx-10 rounded-lg shadow-lg"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {true ? (
          <div
            onClick={() => typeof props.handle === "function" && props.handle()}
            class="text-right "
          >
            <div
              style={{
                cursor: "pointer",
              }}
            >
              <svg
                class="h-8 w-8 text-red-700"
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
                <line x1="18" y1="6" x2="6" y2="18" />{" "}
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
        ) : null}
        <div class="text-center">
          <h1 class="text-3xl my-2 ml-2 lg:text-5xl font-bold leading-9 text-blue-900 text-blue:800 pb-4">
            Any Queries ?
          </h1>
        </div>
        <p
          class="mb-5 text-lg italic text-gray-700 md:text-xl dark:text-gray-700 p-2"
          style={{
            textAlign: "justify",
            textAlign: "center",
          }}
        >
          " Drop a mesage to us , we will reach you as soon as possible ! "
        </p>
        <form>
          <div
            class="grid gap-6 mb-6 md:grid-cols-2 p-2  "
            style={{
              borderRadius: 12,
            }}
          >
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gra-cay-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="test@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="For queries on nursing"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div class="">
              <label
                for="large-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mesage
              </label>
              <input
                type="text"
                id="large-input"
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              textAlign: "center",
              alignItems: "center",
            }}
            class="submit_button my-10 ml-5 sm:my-4  text-white mx-11 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
