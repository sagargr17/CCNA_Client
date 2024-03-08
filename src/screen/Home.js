import React, { useState } from "react";
import Header from "../component/Header";
import MYCarousel from "../component/Carousel";
import "flowbite";
import Aboutus from "../component/Aboutus";
import Footer from "../component/Footer";
import Ourservice from "../component/Ourservice";
import Joindus from "../component/Joindus";
import LineForm from "../component/LineForm";

export default function Home() {
  const [isShown, setIsShown] = useState(false);

  const handleClose = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <Header></Header>
      <MYCarousel></MYCarousel>
      <Ourservice />
      <Aboutus></Aboutus>
      <Joindus></Joindus>
      <Footer />
      <div
        class="fixed bottom-4 right-4 bg-gray-100 px-3 py-2 rounded-xl border-gray-400 shadow-xl"
        isVisible={true}
        onClick={() => setIsShown(!isShown)}
        style={{}}
      >
        <svg
          class="h-10 w-10     z-1 left-46 text-blue-800   bottom-2 sm:bottom-5  right-3    sm:right-20 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      </div>
      {isShown ? (
        <div>
          <div
            class="relative z-10 px-36"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div class="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                <LineForm isVisible={true} handle={handleClose}></LineForm>
              </div>
            </div>
          </div>
          <div class=" fixed bottom-4 right-4">
            <div>
              <svg
                class="h-6 h-6  sm:h-8 sm:w-8 text-red-700"
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
          {/* <LineForm handle={handleClose}></LineForm> */}
        </div>
      ) : null}
    </>
  );
}
