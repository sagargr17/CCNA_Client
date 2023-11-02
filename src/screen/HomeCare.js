import React from "react";
import Header from "../component/Header";
import "../component/style/HomeCare.css";
import Joindus from "../component/Joindus";
import Footer from "../component/Footer";

export default function HomeCare() {
  return (
    <div>
      <Header />
    
      <section className="mb-2">
        <h1 
        class="headingText text-5xl mt-7 mx-2 font-extrabold text-blue-900 text-blue:800">
        ~ Home Care ~
        </h1>
        <div className="container ">
          <img
            className="img  shadow-gray-600 rounded-xl"
            src="https://images.unsplash.com/photo-1543333995-a78aea2eee50?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
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
