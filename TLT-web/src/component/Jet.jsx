// import React, { useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import PersonalInfo from "../component/content/PersonalInfo";
// import GuardianDetails from "../component/content/Guardiandetails";
// import Documents from "../component/content/Documents";
// import Educational from "../component/content/Educational";
// import Consent from "../component/content/Consent"
// import Sidebar from "../component/Sidebar";
// import SummaryApi from "../Common/SummaryAPI";
// import ThankYou from "../component/content/ThankYou";

// const MultiStepForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     category: "",
//     address: "",
//     dob: "",
//     state: "",
//     city: "",
//     gender: "",
//     guardianName: "",
//     guardianEmail: "",
//     photo: null,
//     aadhar: null,
//     degree: "",
//     college: "",
//     graduationYear: "",
//     masterGraduationYear: "",
//     masterUniversityAndDegree: "",
//     annualIncome: "",
//     accomodationRequirement: "",
//   });

//   const handleChange = (updatedData) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       ...updatedData,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files[0],
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const form = new FormData();
//       for (const key in formData) {
//         form.append(key, formData[key]);
//       }

//       const response = await fetch(SummaryApi["jetForm"].url, {
//         method: SummaryApi["jetForm"].method,
//         body: form,
//       });

//       if (response.ok) {
//         navigate("/thankyou");
//       } else {
//         console.error("Failed to submit form data");
//       }
//     } catch (error) {
//       console.error("Error submitting form data", error);
//     }
//   };

//   return (
//     <div className="bg-white w-[100%] sm:h-[40rem] h-[50%] mt-[0px] sm:mt-[0px] rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row items-center">
//       <Sidebar />
//       <div>
//         <div className="w-full">
//           <Routes>
//             <Route path="/personalinfo" element={<PersonalInfo formData={formData} handleChange={handleChange} />} />
//             <Route path="/guardiandetails" element={<GuardianDetails formData={formData} handleChange={handleChange} />} />
//             <Route path="/documents" element={<Documents formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />} />
//             <Route path="/educational" element={<Educational formData={formData} handleChange={handleChange} />} />
//             <Route path="/consent" element={<Consent formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />} />
//             <Route path="/thankyou" element={<ThankYou />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;


import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PersonalInfo from "../component/content/PersonalInfo";
import GuardianDetails from "../component/content/Guardiandetails";
import Documents from "../component/content/Documents";
import Educational from "../component/content/Educational";
import Consent from "../component/content/Consent";
import Sidebar from "../component/Sidebar";
import SummaryApi from "../Common/SummaryAPI";
import ThankYou from "../component/content/ThankYou";

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    category: "",
    address: "",
    dob: "",
    state: "",
    city: "",
    gender: "",
    guardianName: "",
    guardianEmail: "",
    photo: null,
    aadhar: null,
    degree: "",
    college: "",
    graduationYear: "",
    masterGraduationYear: "",
    masterUniversityAndDegree: "",
    annualIncome: "",
    accomodationRequirement: "",
  });

  const handleChange = (updatedData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...updatedData,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async () => {
    try {
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }

      console.log("Form data before submission:", formData);

      const response = await fetch(SummaryApi["jetForm"].url, {
        method: SummaryApi["jetForm"].method,
        body: form,
      });

      if (response.ok) {
        navigate("/thankyou");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };

  return (
    <div className="bg-white w-[100%] sm:h-[40rem] h-[50%] mt-[0px] sm:mt-[0px] rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row items-center">
      <Sidebar />
      <div>
        <div className="w-full">
          <Routes>
            <Route path="/personalinfo" element={<PersonalInfo formData={formData} handleChange={handleChange} />} />
            <Route path="/guardiandetails" element={<GuardianDetails formData={formData} handleChange={handleChange} />} />
            <Route path="/documents" element={<Documents formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />} />
            <Route path="/educational" element={<Educational formData={formData} handleChange={handleChange} />} />
            <Route path="/consent" element={<Consent formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;

