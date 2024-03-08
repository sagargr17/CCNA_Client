import React from "react";
import ReactCardSlider from "react-card-slider-component";

import "./style/Carousel.css";
// import Carousel from "react-multi-carousel";

export default function Ourservice() {
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "Aged Care",
      description: "This is a description",
      //   clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/600/500",
      title: "Home Care",
      description: "This is a second description",
      //   clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/700/600",
      title: "Dissability Support",
      description: "This is a third description",
      //   clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/500/400",
      title: "Training",
      description: "This is a fourth description",
      //   clickEvent: sliderClick,
    },
    // {
    //   image: "https://picsum.photos/200/300",
    //   title: "This is a fifth title",
    //   description: "This is a fifth description",
    //   //   clickEvent: sliderClick,
    // },
    // {
    //   image: "https://picsum.photos/800/700",
    //   title: "This is a sixth title",
    //   description: "This is a sixth description",
    //   //   clickEvent: sliderClick,
    // },
    // {
    //   image: "https://picsum.photos/300/400",
    //   title: "This is a seventh title",
    //   description: "This is a seventh description",
    //   //   clickEvent: sliderClick,
    // },
  ];

  return (
    <>
      <div class="flex-row  hidden lg:block  overflow shadow-lg rounded-md  sm:shadow-none  mx-26 mt-2  ">
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1 class="text-3xl lg:text-5 xl font-bold leading-9 text-blue-900 text-blue:800 ">
            Our Services
          </h1>
        </div>
        <div class="2xl:container 2xl:mx-auto lg:py-16   lg:pb-5 lg:px-20 md:py-9 md:px-6 py-2 px-4   flex flex-col sm:flex-row w-50 ">
          <div class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow my-2 mx-2">
            <div class="relative w-full h-48">
              <img
                src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="object-cover w-full h-full rounded-t"
                alt="Plan"
              />
            </div>
            <div class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div class="text-lg font-semibold">Aged Care</div>
                <p class="text-sm text-gray-900">
                  We never had the chance to. Maybe it was the eleven months he
                  spent in the womb. We never had the chance to. Maybe it was
                  the eleven months he spent in the womb.
                </p>
              </div>
              <button
                type="button"
                class="text-white bg-gradient-to-r mt-5 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                view
              </button>
            </div>
          </div>
          <div class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow my-2  mx-2">
            <div class="relative w-full h-48">
              <img
                src="https://images.unsplash.com/photo-1543333995-a78aea2eee50?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
                class="object-cover w-full h-full rounded-t"
                alt="Plan"
              />
            </div>
            <div class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div class="text-lg font-semibold">Home Care</div>
                <p class="text-sm text-gray-900">
                  We never had the chance to. Maybe it was the eleven months he
                  spent in the womb. We never had the chance to. Maybe it was
                  the eleven months he spent in the womb.
                </p>
              </div>

              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                <a href="/services/homecare/">View</a>
              </button>
            </div>
          </div>
          <div class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow my-2 mx-2 ">
            <div class="relative w-full h-48">
              <img
                src="https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=1600"
                class="object-cover w-full h-full rounded-t"
                alt="Plan"
              />
            </div>
            <div class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div class="text-lg font-semibold">Dissability Support</div>
                <p class="text-sm text-gray-900">
                  We never had the chance to. Maybe it was the eleven months he
                  spent in the womb. We never had the chance to. Maybe it was
                  the eleven months he spent in the womb.
                </p>
              </div>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                <a href="/services/disabilitysupport/">View</a>
              </button>
            </div>
          </div>
          <div class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow my-2 mx-2 ">
            <div class="relative w-full h-48">
              <img
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="object-cover w-full h-full rounded-t"
                alt="Plan"
              />
            </div>
            <div class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div class="text-lg font-semibold">Training</div>
                <p class="text-sm text-gray-900">
                  We never had the chance to. Maybe it was the eleven months he
                  spent in the womb. We never had the chance to. Maybe it was
                  the eleven months he spent in the womb.
                </p>
              </div>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="block lg:hidden mx-2 mt-10  ">
        <h1 class="text-3xl lg:text-5xl mb-5 ml-2  font-bold leading-9 text-blue-900 text-blue:800 ">
          Our Services
        </h1>
        <div
          style={
            {
              // display: "flex",
            }
          }
        >
          <div>
            <ReactCardSlider slides={slides} />
          </div>
        </div>
      </div>
    </>
  );
}
