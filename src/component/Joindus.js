import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./style/Joindus.css";

export default function Joindus() {
  return (
    <div class="2xl:container 2xl:mx-auto lg:py-0 lg:px-20 md:py-2 md:px-6  px-4">
      <hr class="mt-20"></hr>
      <hr></hr>
      <hr></hr>
      <div className="joindusContainer flex flex-col md:flex-row justify-center items-center ">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <img
            class="myImage"
            style={
              {
                // borderRadius: 20,
                // boxShadow: "5px 10px #888888",
              }
            }
            src="https://i.gifer.com/5ZQ2.gif"
          ></img>
        </AnimationOnScroll>
        <div className="mx-10 flex-col">
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <h1 class="headingText text-4xl text-orange font-extrabold dark:text-blue mb-7  ">
              Searching for job or vaccancy ?
            </h1>

            <div class="flex justify-center items-center">
              <div>
                <a href="/submitVacancy">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-3 sm:px-5 sm:py-4 text-center mr-2 mb-2  "
                  >
                    Submit Vaccancy
                  </button>
                </a>
              </div>
              <div>
                <a href="/submitresume">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-3 sm:px-5 sm:py-4 text-center mr-2 mb-2  "
                  >
                    Submit Vaccancy
                  </button>
                </a>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <hr></hr>
      <hr></hr>
      <hr class="mb-20"></hr>
    </div>
  );
}
