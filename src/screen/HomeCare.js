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
        <h1 class="headingText text-5xl mt-7 mx-2 font-extrabold text-blue-900 text-blue:800">
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
              We specialize in delivering qualified and compassionate healthcare
              workers to support clients in maintaining independence within the
              familiarity of their own homes. Our person-centered approach
              ensures that each client receives individualized care tailored to
              their unique needs and preferences. Whether you require temporary
              or permanent staff, we are here to provide reliable assistance at
              short notice to home care providers. Our dedicated employees are
              trained to offer a comprehensive range of services, including
              administering medications, wound care, continence and hygiene
              care, nutrition and mobility support, Alzheimer’s, Dementia,
              Diabetes care and management, palliative care, and assistance with
              activities of daily living. With CCNA, rest assured that your
              clients will receive the highest standard of care and support,
              promoting their well-being and independence in the comfort of
              their homes.
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
