import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import "../../src/index.css";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import "../../src/index.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SubmitRessumeScreen(props) {
  const [yourDateValue, setYourDateValue] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let { id } = useParams();

  console.log("IDDDD", id);

  // Form State
  const [lastName, setLastName] = useState(null);
  const [first_name, setFirstName] = useState(null);
  const [first_address, setFirstAddress] = useState(null);
  const [second_address, setSecond_address] = useState(null);
  const [phone_number, setPhonenumber] = useState(null);
  const [suburb, setSuburb] = useState(null);
  const [email, setEmail] = useState(null);
  const [state, setState] = useState(null);
  const [additionInformation, setAdditionalInformation] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [otherSpecificationPosition, setoOherSpecificationPosition] =
    useState(null);
  const [applyPosition, setApplyPosition] = useState(null);
  const [workExperience, setWorkExperience] = useState(null);
  const [policeCheck, setPoliceCheck] = useState(null);
  const [childrenCheck, setChildrenCheck] = useState(null);
  const [startWorkingDate, setStartWorkingDate] = useState(null);
  const [uploadCV, setUploadCV] = useState(null);
  const [uploadQualification, setUploadQualification] = useState(null);
  const [selectionRelevantQualification, setSelectionRelevantQualification] =
    useState(null);
  const [info, setInfo] = useState({
    title: "No title",
    isVisible: false,
    message: "no mesage",
  });

  const customDateFormat = "MM DD YYYY";

  const handleDateChange = (newDate) => {
    let x = newDate._d;

    // Update your state or variable with the new date
    console.log(`${x.getFullYear()}-${x.getMonth()}-${x.getDate()}`);
    setStartWorkingDate(`${x.getFullYear()}-${x.getMonth()}-${x.getDate()}`);
  };

  const positon = [
    "Registered Nurse",
    "Assistance in Nursing",
    "Disability Support Worker",
  ];

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("RESULT", data);
        setCountries(data.countries);

        setSelectedCountry(data.userSelectValue.label);
      })
      .catch((x) => console.log("Error"));
  }, []);

  const handleSubmmitResume = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (
      lastName !== null &&
      first_name !== null &&
      first_address !== null &&
      second_address !== null &&
      phone_number !== null &&
      suburb !== null &&
      email !== null &&
      state !== null &&
      additionInformation !== null &&
      postalCode !== null &&
      otherSpecificationPosition !== null &&
      applyPosition !== null &&
      workExperience !== null &&
      selectionRelevantQualification !== null &&
      policeCheck !== null &&
      childrenCheck !== null &&
      startWorkingDate !== null &&
      uploadCV !== null &&
      uploadQualification !== null
    ) {
      const formData = new FormData();
      console.log("SELECTED RESULT");
      formData.append("last_name", lastName);
      formData.append("first_name", first_name);
      formData.append("first_address", first_address);
      formData.append("second_address", second_address);
      formData.append("phone_number", phone_number);
      formData.append("suburb", suburb);
      formData.append("email", email);
      formData.append("state", state);
      formData.append("additional_information", additionInformation);
      formData.append("postal_code", postalCode);
      formData.append("other_specific_position", otherSpecificationPosition);
      formData.append("applyPosition", applyPosition);
      formData.append("workExperience", workExperience);
      formData.append("relevantQulification", selectionRelevantQualification);
      formData.append("police_check", policeCheck);
      formData.append("children_check", childrenCheck);
      formData.append("starting_working_day", startWorkingDate);
      formData.append("cvFile", uploadCV);
      formData.append("qualificationFile", uploadQualification);
      axios
        .post("http://127.0.0.1:8000/api/" + "postResume/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((x) => {
          console.log("Good", x);

          setInfo({
            title: "Successfully Sent !",
            isVisible: true,
            message:
              "Your vacancy has been sent successfully, we will reach you soon!",
          });
          setIsLoading(false);
        })
        .catch((y) => {
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
  const handleSubmmitResumeForVaccancy = (event) => {
    event.preventDefault();
    console.log("with ID");
    setIsLoading(true);

    if (
      lastName !== null &&
      first_name !== null &&
      first_address !== null &&
      second_address !== null &&
      phone_number !== null &&
      suburb !== null &&
      email !== null &&
      state !== null &&
      additionInformation !== null &&
      postalCode !== null &&
      otherSpecificationPosition !== null &&
      applyPosition !== null &&
      workExperience !== null &&
      selectionRelevantQualification !== null &&
      policeCheck !== null &&
      childrenCheck !== null &&
      startWorkingDate !== null &&
      uploadCV !== null &&
      uploadQualification !== null
    ) {
      const formData = new FormData();
      console.log("SELECTED RESULT");
      formData.append("last_name", lastName);
      formData.append("first_name", first_name);
      formData.append("first_address", first_address);
      formData.append("second_address", second_address);
      formData.append("phone_number", phone_number);
      formData.append("suburb", suburb);
      formData.append("email", email);
      formData.append("state", state);
      formData.append("additional_information", additionInformation);
      formData.append("postal_code", postalCode);
      formData.append("other_specific_position", otherSpecificationPosition);
      formData.append("applyPosition", applyPosition);
      formData.append("workExperience", workExperience);
      formData.append("relevantQulification", selectionRelevantQualification);
      formData.append("police_check", policeCheck);
      formData.append("children_check", childrenCheck);
      formData.append("starting_working_day", startWorkingDate);
      formData.append("cvFile", uploadCV);
      formData.append("qualificationFile", uploadQualification);
      axios
        .post(
          "http://127.0.0.1:8000/api/" + "postResume/" + id + "/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((x) => {
          console.log("Good", x);

          setInfo({
            title: "Successfully Sent !",
            isVisible: true,
            message:
              "Your vacancy has been sent successfully, we will reach you soon!",
          });
          setIsLoading(false);
        })
        .catch((y) => {
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

  const options = ["upto 6 months", "one", "two", "above two"];
  const defaultOption = options[0];
  const handleWorkExperience = (value) => {
    if (value === "upto 6 months") {
      setWorkExperience("0-6");
    } else if (value === "one") {
      setWorkExperience("1");
    } else if (value === "two") {
      setWorkExperience("2");
    } else if (value === "above two") {
      setWorkExperience("2+");
    }
  };
  const relevantQualification = [
    "Certificate III OR IV in Individual Support",
    "Certificate III OR IV in Disability",
    "Bachelor in Nursing",
  ];

  const handleRelevantQualification = (value) => {
    if (value === "Certificate III OR IV in Individual Support") {
      setSelectionRelevantQualification("1");
    } else if (value === "Certificate III OR IV in Disability") {
      setSelectionRelevantQualification("2");
    } else if (value === "Bachelor in Nursing") {
      setSelectionRelevantQualification("3");
    }
  };

  return (
    <div>
      <Header />
      <div class="text-center">
        <h1 class="text-2xl sm:text-4xl ml-2 lg:text-5xl font-bold leading-9 text-blue-900 text-blue:800  my-5 ">
          ~ Submit Ressume ~
        </h1>
      </div>
      <form
        // method="POST"
        class=" light-bg outline-white border-slate-400 m-5 xl:m-14 p-7 "
        style={{
          borderWidth: 2,
          borderColor: "#e1e5eb",
          borderRadius: 10,
        }}
        onSubmit={
          props.isResumeForVacancy
            ? handleSubmmitResumeForVaccancy
            : handleSubmmitResume
        }
      >
        <label
          for="default-input"
          class="block mb-5 text-red-400 text-lg font-medium text-gray-700 dark:text-white"
        >
          Personal Details :
        </label>
        <div class="mb-6 flex-1 sm:mr-8">
          <label
            for="default-input"
            class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
          >
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Your First Name"
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="flex flex-col sm:flex-row  justify-around ">
          <div class="mb-6 flex-1 sm:mr-8">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              Last Name
            </label>
            <input
              required
              placeholder="Your Last name"
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div class="mb-6 flex-1 sm:flex-col sm:ml-8">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              Address
            </label>
            <input
              onChange={(e) => setFirstAddress(e.target.value)}
              required
              placeholder="Your Street Address"
              type="text"
              id="default-input"
              class="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              onChange={(e) => setSecond_address(e.target.value)}
              required
              placeholder="Your Street Address Line 2"
              type="text"
              id="default-input"
              class="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div class="flex flex-col sm:flex-row ">
              <input
                onChange={(e) => setSuburb(e.target.value)}
                required
                placeholder="Your Suburb"
                type="text"
                id="default-input"
                class="bg-gray-50 mb-3 mr-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                onChange={(e) => setState(e.target.value)}
                required
                placeholder="State / Province"
                type="text"
                id="default-input"
                class="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="flex flex-col sm:flex-row  ">
              <input
                onChange={(e) => setPostalCode(e.target.value)}
                required
                placeholder="Postal Code"
                // style={{
                //   width: "82%",
                // }}
                type="number"
                id="default-input"
                class="bg-gray-50 mr-3 modify-input sm:w-44   mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row  justify-around ">
          <div class="mb-6 flex-1 mr-8">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              When are able to start working with us ?
            </label>
            <div
              class="relative"
              style={{
                borderRadius: 20,
              }}
            >
              <Datetime
                placeholder="yyyy-mm-dd"
                dateFormat={customDateFormat}
                timeFormat={false}
                value={yourDateValue}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div class="mb-6 flex-1 sm:ml-8 "></div>
        </div>
        <div class="mb-6 flex-1 ml-1"></div>
        <div class="flex flex-col sm:flex-row  justify-around ">
          <div class="mb-6 flex-1 sm:mr-8">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              Phone Number*
            </label>
            <input
              onChange={(e) => setPhonenumber(e.target.value)}
              required
              placeholder="Phone Number"
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6 flex-1 sm:ml-8">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              Email*
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              type="email"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div class="flex flex-col sm:flex-row  justify-around ">
          <div class="mb-6 flex-1 sm:ml-1">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              Additional Information
            </label>
            <input
              onChange={(e) => setAdditionalInformation(e.target.value)}
              required
              placeholder="Additional Information"
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div class="flex flex-col sm:flex-row  justify-around ">
          <div class="mb-6 flex-1  sm:mr-8  ">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              Position for which you are applying for?
            </label>
            <Dropdown
              options={positon}
              onChange={(e) =>
                e.value === "Register Nurse"
                  ? setApplyPosition("RN")
                  : e.value === "Assistance in Nursing"
                  ? setApplyPosition("AN")
                  : setApplyPosition("DSW")
              }
              // value={positon[0]}
              placeholder="Select an option"
            />
          </div>

          <div class="mb-6 flex-1 ml-0 sml:ml-10 ">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              if other specific Position
            </label>
            <input
              onChange={(e) => setoOherSpecificationPosition(e.target.value)}
              required
              placeholder="Specific position"
              type="text"
              id="default-input"
              class="bg-gray-50 flex-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div class="mb-6 flex-1 sm:ml-20 mr-19 sm:mr-8">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              Do you have relevant qualification?
            </label>
            <Dropdown
              options={relevantQualification}
              onChange={(x) => handleRelevantQualification(x.value)}
              // value={relevantQualification[0]}
              placeholder="Select an option"
            />
          </div>
        </div>

        <div class="flex flex-col sm:flex-row  justify-around ">
          <div class="mb-6 flex-1 sm:ml-1  sm:mr-8">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              Work Experience
            </label>
            <Dropdown
              options={options}
              onChange={(x) => handleWorkExperience(x.value)}
              // value={defaultOption}
              placeholder="Select an option"
            />
          </div>
          <div class="mb-6 flex-1 sm:ml-1  sm:mr-8">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              Do you have Current Police Check ?
            </label>
            <Dropdown
              options={["yes", "no"]}
              onChange={(x) =>
                x === "yes" ? setPoliceCheck(true) : setPoliceCheck(false)
              }
              // value={"no"}
              placeholder="Select an option"
            />
          </div>
          <div class="mb-6 flex-1 sm:ml-1  sm:mr-8">
            <label
              for="default-input"
              class="block mb-2  text-sm font-medium text-gray-700 dark:text-white"
            >
              Do you have Working with childrens ?
            </label>
            <Dropdown
              options={["yes", "no"]}
              onChange={(x) =>
                x === "yes" ? setChildrenCheck(true) : setChildrenCheck(false)
              }
              // value={"yes"}
              placeholder="Select an option"
            />
          </div>
        </div>

        <div class="flex flex-col sm:flex-row  justify-center items-center mb-7 sm:ml-2  mt-5 sm:mt-0">
          <div class="mb-2  justify-start items-center sm:mt-10 flex-1 sm:ml-2 ">
            <label
              for="default-input"
              class="block mb-3 ml-10    text-md font-medium text-gray-700 dark:text-white sm:mr-8"
            >
              Upload your CV*
            </label>
            <input
              onChange={(e) => setUploadCV(e.target.files[0])}
              class="ml-10 sm:ml-0"
              type="file"
            ></input>
          </div>
          <div class="mb-1  justify-start items-center mt-10 flex-1 sm:ml-2 ">
            <label
              for="default-input"
              class="block mb-3 ml-10    text-md font-medium text-gray-700 dark:text-white sm:mr-8"
            >
              Upload Your qualification*
            </label>

            <input
              onChange={(e) => setUploadQualification(e.target.files[0])}
              class="ml-10 sm:ml-0"
              type="file"
            ></input>
          </div>
        </div>

        <button
          type="submit"
          class="text-white mt-5 sm:ml-5 px-20 sm:px-5 ml-20    bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </form>

      {isLoading ? (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <svg
                aria-hidden="true"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
          </div>
        </div>
      ) : null}

      {info.isVisible ? (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          class="h-6 w-6 text-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          style={{
                            color:
                              info.title === "Invalid Data" ? "red" : "green",
                          }}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          class="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          {info.title}
                        </h3>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">{info.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() =>
                        setInfo({
                          title: "no title",
                          isVisible: false,
                          message: "no message",
                        })
                      }
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Ok
                    </button>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
