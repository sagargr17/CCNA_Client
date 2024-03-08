import React from "react";
import Header from "../component/Header";
import "../component/style/DisabilitySupport.css";
import Joindus from "../component/Joindus";
import Footer from "../component/Footer";

export default function DisabilitySupport() {
  return (
    <div>
      <Header />
      <section className="mb-5">
        <h1 class="headingText text-5xl mt-7 mx-2 font-extrabold text-blue-900 text-blue:800">
          ~ Disability Support ~
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
            src="https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
              Experience the transformative power of exceptional disability
              service workers with CCNA. Our dedicated team is committed to
              enhancing the quality of life for individuals with disabilities by
              providing personalized support and assistance tailored to their
              unique needs and preferences. From promoting independence and
              empowerment to advocating for rights protection and ensuring
              safety and well-being, our skilled professionals go above and
              beyond to make a positive impact in the lives of our clients. With
              CCNA, you can trust that your loved ones are in caring and capable
              hands, receiving the highest standard of person-centered care and
              support. Contact us today to learn more about how we can help you
              or your loved ones thrive.ized staffing support that helps your
              healthcare facility thrive.
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
