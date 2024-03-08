import React from "react";
import Header from "../component/Header";
import "../component/style/AgedCare.css";
import Joindus from "../component/Joindus";
import Footer from "../component/Footer";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function AgedCareScreen() {
  return (
    <>
      <Header />
      <div>
        {/* <div class="xl:px-10 px-8 py-8 2xl:mx-auto 2xl:container relative z-40">
          <div class="slider">
            <div class="slide-ana">
              <div class="flex">
                <div class="mt-14 md:flex">
                  <div class=" lg:w-1/2 sm:w-96 xl:h-96 h-80 shadow:gray:200 hover:bottom-10">
                    <img
                      src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="image of profile"
                      class="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                    />
                  </div>

                  <div class="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                      <h1 class="text-5xl font-semibold xl:leading-loose text-gray-800 text-blue-800">
                        Aged Care
                      </h1>
                      <p class="text-base font-medium leading-6 mt-4 text-gray-600 dark:text-gray-200 flex-1 text-justify ">
                        CCNA is your trusted partner in healthcare staffing.
                        With a deep commitment to quality care, we provide
                        healthcare facilities with access to a network of highly
                        qualified and compassionate professionals, including
                        registered nurses, doctors, therapists, and allied
                        health specialists. Our tailored staffing solutions are
                        designed to meet your facility's unique needs, ensuring
                        you have the right personnel in place to deliver
                        exceptional patient care. Choose Health Staffing
                        Solutions for reliable, customized staffing support that
                        helps your healthcare facility thrive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <section className="mb-2">
          <h1 class="headingText text-5xl mt-7 mx-2 font-extrabold text-blue-900 text-blue:800">
            ~ Aged Care ~
          </h1>
          <div className="container ">
            <img
              className="img  shadow-gray-600 rounded-xl"
              src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></img>

            <div
              style={{
                marginLeft: "2%",
              }}
            >
              <p
                class="mb-3 mt-5 sm:mt-0  text-lg text-gray-700 font-medium md:text-xl dark:text-gray-700 "
                style={{
                  textJustify: "auto",
                  textAlign: "justify",
                }}
              >
                Aged care stems from compassion and empathy. When these
                attributes combine with the correct sets of skills, it brings
                out the best aged care services. At CCNA, we employ a range of
                aged care workers who have the above-mentioned skills. We
                provide people trained as Assistant Nurses, Registered Nurses,
                Cooks, and Service staff who can provide support in times of
                need at your aged care venue.ized staffing support that helps
                your healthcare facility thrive.
              </p>
              <li>bullet point 1</li>
              <li>bullet point 2</li>
              <li>bullet point 3</li>
            </div>
          </div>
        </section>
        <Joindus></Joindus>
        <Footer></Footer>
      </div>
    </>
  );
}
