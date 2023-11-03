import React from "react";
import Address from "../Static/location.png";
import Email from "../Static/envelope.png";
import Telephone from "../Static/telephone.png";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Joindus from "../component/Joindus";
import Ourservice from "../component/Ourservice";
import LineForm from "../component/LineForm";

export default function ContactusScreen() {
  return (
    <div>
      <Header />
      <div class="text-center">
        <h1 class="text-4xl my-10 ml-2 lg:text-5xl font-bold leading-9 text-blue-900 text-blue:800 pb-4">
          ~ About us ~
        </h1>
      </div>
      <div
        class="my-20"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Address}
            style={{
              height: "40%",
              width: "40%",
              objectFit: "contain",
            }}
          ></img>
          <h1 class="text-2xl my-5 ml-2 lg:text-3xl font-bold leading-9 text-blue-900 text-blue:800 ">
            Australia
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Email}
            style={{
              height: "40%",
              width: "40%",
              objectFit: "contain",
            }}
          ></img>
          <h1 class="text-2xl my-5 ml-2 lg:text-3xl font-bold leading-9 text-blue-900 text-blue:800 ">
            Email@gmail.com
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Telephone}
            style={{
              height: "40%",
              width: "40%",
              objectFit: "contain",
            }}
          ></img>
          <h1 class="text-2xl my-5 ml-2 lg:text-3xl font-bold leading-9 text-blue-900 text-blue:800 ">
            +97781239832
          </h1>
        </div>
      </div>
      <LineForm />
      <Joindus />
      <div class="mt-6"></div>

      <Footer />
    </div>
  );
}
