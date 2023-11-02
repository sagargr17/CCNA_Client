import React from "react";
import Carousel from "nuka-carousel";
import "flowbite";
import "./style/Carousel.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Typewriter from "typewriter-effect";

export default function MYCarousel() {
  return (
    <>
      <div class="static">
        <div
          className="absolute bigFont z-10 hidden sm:block  sm:left-20 sm:top-1/4 lg:left-44 lg:top-2/4"
       
        >
          <h2 class="mb-4  sm:text-3xl  md:text-3xl   font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl glow">
            Empowering Nurses, Fostering Careers
          </h2>
          <div
            className="mt-6 btn-container "
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <a href="/submitVacancy/">
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-regular rounded-lg   text-md px-3 py-2    sm:text-lg    sm:px-5  sm:py-2 text-center mr-2 mb-2"
              >
                Submit Vaccancy
              </button>
            </a>
            <a href="/submitresume/">
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-regular rounded-lg   text-md px-3 py-2    sm:text-lg    sm:px-5  sm:py-2 text-center mr-2 mb-2"
              >
                Submit Resume
              </button>
            </a>
          </div>
        </div>

        <Carousel
          className="my_carousel"
          wrapAround={true}
          renderBottomCenterControls={({ currentSlide }) => null}
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide}>
              {/* <i className="fa fa-arrow-left" /> */}
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide}>
              {/* <i className="fa fa-arrow-right" /> */}
            </button>
          )}
          autoplay={true}
          style={{}}
        >
          <img
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            className="carousel-image  h-5/6 sm:h-3/5"
            src="https://images.unsplash.com/photo-1604480131833-5d7aea770e1c?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // class="absolute block  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  "
            alt="..."
          />
          <img
            style={{
              width: "100%",
              objectFit: "cover",
              // height: "50%",
              // marginTop: "5%",
            }}
            className="carousel-image h-5/6 sm:h-3/5 "
            src="https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // class="absolute block  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  "
            alt="..."
          />
          <img
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            className="carousel-image h-5/6 sm:h-3/5"
            src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // class="absolute block  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  "
            alt="..."
          />

          <img
            style={{
              width: "100%",
              objectFit: "cover",
              // height: "50%",
            }}
            className="carousel-image h-5/6 sm:h-3/5"
            src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // class="absolute block  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  "
            alt="..."
          />
        </Carousel>

        <div className=" z-10  block sm:hidden  mb-10 ">
          <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl glow">
            Empowering Nurses, Fostering Careers
          </h2>
          <div
            className="mt-6 btn-container "
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href="/submitVacancy/">
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-regular rounded-lg   text-md px-3 py-2   sm:text-lg    sm:px-5  sm:py-2.5 text-center mr-2 mb-2"
              >
                Submit Vaccancy
              </button>
            </a>
            <a href="/submitresume/">
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-regular rounded-lg   text-md px-3 py-2    sm:text-lg    sm:px-5  sm:py-2.5 text-center mr-2 mb-2"
              >
                Submit Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
