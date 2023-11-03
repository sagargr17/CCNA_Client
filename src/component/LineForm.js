import React, { useState } from "react";
import "./style/Line.css";
import axios from "axios";

export default function LineForm(props) {
  // Handful states
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState({
    title: null,
    isVisible: false,
    message: "no mesage",
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (
      fullName !== null &&
      email !== null &&
      subject !== null &&
      message !== null &&
      email !== null &&
      phoneNumber !== null
    ) {
      const formData = new FormData();
      formData.append("full_name", fullName);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("phone_number", phoneNumber);
      formData.append("message", message);
      axios
        .post("http://127.0.0.1:8000/api/lineForm/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((x) => {
          console.log(x);

          setInfo({
            title: "Successfully Sent !",
            isVisible: true,
            message:
              "Your vacancy has been sent successfully, we will reach you soon!",
          });
          setIsLoading(false);
        })
        .catch((y) => {
          console.log(y);
          setIsLoading(false);
          setInfo({
            title: "Invalid Data !",
            isVisible: true,
            message:
              "The data you provided appears invalid. Please ensure your email is being used for the first time, and that your file format and size are valid.",
          });
        });
    } else {
      setInfo({
        title: "Invalid Data!",
        message: "Message you provided seems to be invalid or missing!",
        isVisible: true,
      });
    }
  };

  console.log("IS VISIBLE ", props.isVisible);

  return (
    <>
      <div
        class=" p-5  md:p-10 bg-gray-100 sm:mx-10 rounded-lg shadow-lg"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {props.isVisible ? (
          <div onClick={() => props.handle()} class="text-right ">
            <div
              style={{
                cursor: "pointer",
              }}
            >
              <svg
                class="h-6 w-6 text-red-700"
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
        ) : null}
        <div class="text-center">
          <h1 class="text-3xl my-2 ml-2 lg:text-5xl font-bold leading-9 text-blue-900 text-blue:800 pb-4">
            Any Queries ?
          </h1>
        </div>
        <p
          class="mb-5 text-lg italic text-gray-700 md:text-xl dark:text-gray-700 p-2"
          style={{
            textAlign: "justify",
            textAlign: "center",
          }}
        >
          " Drop a mesage to us , we will reach you as soon as possible ! "
        </p>
        <form onSubmit={handleSubmitForm}>
          <div
            class="grid gap-6 mb-6 md:grid-cols-2 p-2  "
            style={{
              borderRadius: 12,
            }}
          >
            <div class="text-left" >
              <label
                for="first_name"
                class="block mb-2 text-sm  font-medium text-gra-cay-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Shrestha"
                required
              />
            </div>
            <div class="text-left">
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="test@gmail.com"
                required
              />
            </div>
            <div class="text-left">
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="For queries on nursing"
                required
              />
            </div>
            <div class="text-left">
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div class="text-left">
              <label
                for="large-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mesage
              </label>
              <input
              placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                id="large-input"
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          {isLoading ? (
            <div role="text-2xl my-10 sm:my-20   lg:text-5xl font-bold leading-9  text-red:800  ">
              <svg
                aria-hidden="true"
                class="inline  items-center  w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : info.title ? (
            <p>info.title</p>
          ) : (
            <button
              type="submit"
              style={{
                textAlign: "center",
                alignItems: "center",
              }}
              class="submit_button my-10 ml-5 sm:my-4  text-white mx-11 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg "
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
}
