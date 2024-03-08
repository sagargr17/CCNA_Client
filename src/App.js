import axios from "axios";
import "flowbite";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutusScreen from "./screen/AboutusScreen";
import AgedCareScreen from "./screen/AgedCareScreen";
import ContactusScreen from "./screen/ContactusScreen";
import DisabilitySupport from "./screen/DisabilitySupport";
import FindJobs from "./screen/FindJobs";
import Home from "./screen/Home";
import HomeCare from "./screen/HomeCare";
import SubmitRessumeScreen from "./screen/SubmitRessumeScreen";
import SubmitVaccancyScreen from "./screen/SubmitVaccancyScreen";
import TrainingScreen from "./screen/TrainingScreen";

function App() {
  const [file, setFile] = useState();

  const handleTest = (file) => {
    const formData = new FormData();
    console.log("FILEEe", file);
    formData.append("last_name", "xx");
    formData.append("first_name", "www");
    formData.append("first_address", "qweqwe");
    formData.append("second_address", "test");
    formData.append("phone_number", 98411503921);
    formData.append("suburb", "kjahsdkjahs");
    formData.append("email", "riteshdd@gmail.com");
    formData.append("state", "kjahsdkjasdjsahs");
    formData.append("additional_information", "sadas");
    formData.append("postal_code", 123);
    formData.append("other_specific_position", "alsdjlaskdj");
    formData.append("applyPosition", "RN");
    formData.append("workExperience", "1");
    formData.append("police_check", true);
    formData.append("children_check", true);
    formData.append("starting_working_day", "2020-12-3");
    formData.append("file", file);

    axios
      .post("http://127.0.0.1:8000/api/" + "postResume/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((x) => console.log(x))
      .catch((y) => console.log(y));
  };

  return (
    <>
      {/* <MuiThemeProvider theme={theme}> */}
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home></Home>} />
            <Route
              path="/contactus"
              index
              element={
                <>
                  <ContactusScreen />
                </>
              }
            />
            <Route
              path="/services/agedcare/"
              index
              element={
                <>
                  <AgedCareScreen></AgedCareScreen>
                </>
              }
            />
            <Route
              path="/services/homecare/"
              index
              element={
                <>
                  <HomeCare></HomeCare>
                </>
              }
            />
            <Route
              path="/services/disabilitysupport/"
              index
              element={
                <>
                  <DisabilitySupport></DisabilitySupport>
                </>
              }
            />
            <Route
              path="/services/training/"
              index
              element={
                <>
                  <TrainingScreen></TrainingScreen>
                </>
              }
            />
            <Route
              path="/submitVacancy/"
              index
              element={
                <>
                  <SubmitVaccancyScreen></SubmitVaccancyScreen>
                </>
              }
            />
            <Route
              path="/submitresume/"
              index
              element={
                <>
                  <SubmitRessumeScreen></SubmitRessumeScreen>
                </>
              }
            />
            <Route
              path="/aboutus"
              element={
                <>
                  <div
                    style={
                      {
                        // marginTop: "50%",
                      }
                    }
                  >
                    <AboutusScreen />
                  </div>
                </>
              }
            ></Route>
            <Route
              path="/submitvaccancy"
              element={
                <>
                  <div>
                    <SubmitVaccancyScreen isResumeForVacancy={false} />
                  </div>
                </>
              }
            ></Route>
            <Route
              path="/submitressume"
              element={
                <>
                  <div>
                    <SubmitRessumeScreen isResumeForVacancy={false} />
                  </div>
                </>
              }
            ></Route>
            <Route
              path="/findus"
              element={
                <>
                  <FindJobs />
                </>
              }
            ></Route>
            <Route
              path="/findus/:id"
              element={
                <>
                  <SubmitRessumeScreen
                    isResumeForVacancy={true}
                  ></SubmitRessumeScreen>
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>

      {/* <input
        type="file"
        onChange={(event) => {
          setFile(event.target.files[0]);
        }}
      ></input>
      <br></br>
      <button onClick={() => handleTest(file)}>Post</button> */}
    </>
  );
}

export default App;
