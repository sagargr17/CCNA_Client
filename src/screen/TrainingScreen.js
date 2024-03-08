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
        <h1 class="headingText text-5xl mt-4 mx-2 font-extrabold text-blue-900 text-blue:800">
          ~ Training ~
        </h1>
        <div className="container mt-0 pt-0">
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
              class="mb-3  sm:mt-0  text-lg text-gray-700 font-medium md:text-xl dark:text-gray-700 "
              style={{
                textJustify: "auto",
                textAlign: "justify",
              }}
            >
              Accelerate your career in the Health Care industry of Australia
              with CCNA. Our industry-leading programs are designed to equip
              aspiring Enrolled Nurses, Registered Nurses, and healthcare
              professionals with the skills and expertise needed to thrive in
              today's healthcare landscape. Led by seasoned educators and
              healthcare experts, our comprehensive training ensures you receive
              top-notch education and practical experience. With flexible
              scheduling options and cutting-edge facilities, we provide the
              ideal environment for your professional growth. Join us at CCNA
              Nursing Training Center and elevate your career to new heights.
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
