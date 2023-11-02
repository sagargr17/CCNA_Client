import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./style/AboutUS.css";
import {
  Parallax,
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

export default function Aboutus() {
  return (
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-9 md:px-6 py-2 px-4">
      <h1 class="text-4xl ml-2 lg:text-5xl font-bold leading-9 text-blue-900 text-blue:800 pb-4">
        Our Story
      </h1>
      <div class="flex    lg:flex-row flex-col-reverse justify-between gap-8 ">
        <div class="w-full lg:w-5/12 flex flex-col justify-center">
          <p class="font-normal text-lg leading-6 text-gray-600 dark:text-white bg-blue-100 sm:bg-white sm:p-0 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div class="w-full lg:w-8/12 lg:pt-8 hidden sm:block">
          <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div class="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                class="md:block hidden"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Image"
              />
              <img
                class="md:hidden block"
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Image"
              />
              <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Alexa
              </p>
            </div>
            <div class="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                class="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Image"
              />
              <img
                class="md:hidden block"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Image"
              />
              <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Olivia
              </p>
            </div>
            <div class="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                class="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Image"
              />
              <img
                class="md:hidden block"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Image"
              />
              <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Liam
              </p>
            </div>
            <div class="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                class="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured image"
              />
              <img
                class="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured image"
              />
              <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Elijah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
