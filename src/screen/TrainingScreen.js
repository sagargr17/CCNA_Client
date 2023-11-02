import React from "react";
import Header from "../component/Header";
import "../component/style/AgedCare.css";
import Joindus from "../component/Joindus";
import Footer from "../component/Footer";

export default function TrainingScreen() {
  return (
    <div>
      <Header />
      <section className="mb-5">
        <h1 class="headingText text-5xl mt-7 mx-2 font-extrabold text-blue-900 text-blue:800">
          ~ Training ~
        </h1>
        <div
          className="container"
          //   style={{
          //     padding: "4%",
          //     marginLeft: "7%",
          //   }}
        >
          <img
            className="img  shadow-gray-600 rounded-xl"
            src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              CCNA is your trusted partner in healthcare staffing. With a deep
              commitment to quality care, we provide healthcare facilities with
              access to a network of highly qualified and compassionate
              professionals, including registered nurses, doctors, therapists,
              and allied health specialists. Our tailored staffing solutions are
              designed to meet your facility's unique needs, ensuring you have
              the right personnel in place to deliver exceptional patient care.
              Choose Health Staffing Solutions for reliable, customized staffing
              support that helps your healthcare facility thrive.
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
  );
}
