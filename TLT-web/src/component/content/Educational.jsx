import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Educational = ({ formData, handleChange }) => {
  const navigate = useNavigate();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleNext = (event) => {
    event.preventDefault();
    setHasSubmitted(true);

    const { degree, college, graduationYear, masterGraduationYear, masterUniversityAndDegree } = formData;
    if (degree && college && graduationYear && masterGraduationYear && masterUniversityAndDegree) {
      console.log("Form data before navigation:", formData);
      navigate("/jet/consent");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex row w-full h-full sm:pl-[100px]">
      <div className="w-full sm:w-[60%] p-4">
        <h1 className="mt-10 text-3xl font-bold mb-10 text-primary-marineBlue">
          Educational Details
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6">
            {/* ------- Graduation/Degree in: -------- */}
            <div className="flex flex-col w-full sm:w-[60%]">
              <label className="text-primary-marineBlue font-medium mb-2">
                Graduation/Degree in:
              </label>
              <input
                value={formData.degree || ""}
                onChange={(e) => handleChange({ degree: e.target.value })}
                className={`jinput ${formData.degree || !hasSubmitted ? "focus:outline-primary-marineBlue" : "focus:outline-primary-strawberryRed"} outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                type="text"
                placeholder="Degree"
              />
              {(!formData.degree && hasSubmitted) && (
                <span className="text-primary-strawberryRed font-medium">
                  This field is required
                </span>
              )}
            </div>
            {/* ------- College/University:--------- */}
            <div className="flex flex-col w-full sm:w-[60%]">
              <label className="text-primary-marineBlue font-medium mb-2">
                College/University:
              </label>
              <input
                value={formData.college || ""}
                onChange={(e) => handleChange({ college: e.target.value })}
                className={`jinput ${formData.college || !hasSubmitted ? "focus:outline-primary-marineBlue" : "focus:outline-primary-strawberryRed"} outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                type="text"
                placeholder="College/University"
              />
              {(!formData.college && hasSubmitted) && (
                <span className="text-primary-strawberryRed font-medium">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6">
            {/* ------- Graduation year: -------- */}
            <div className="flex flex-col w-full sm:w-[60%]">
              <label className="text-primary-marineBlue font-medium mb-2">
                Graduation year:
              </label>
              <input
                value={formData.graduationYear || ""}
                onChange={(e) => handleChange({ graduationYear: e.target.value })}
                className={`jinput ${formData.graduationYear || !hasSubmitted ? "focus:outline-primary-marineBlue" : "focus:outline-primary-strawberryRed"} outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                type="text"
                placeholder="Graduation year"
              />
              {(!formData.graduationYear && hasSubmitted) && (
                <span className="text-primary-strawberryRed font-medium">
                  This field is required
                </span>
              )}
            </div>
            {/* ------- Master Graduation year:--------- */}
            <div className="flex flex-col w-full sm:w-[60%]">
              <label className="text-primary-marineBlue font-medium mb-2">
                Master Graduation year:
              </label>
              <input
                value={formData.masterGraduationYear || ""}
                onChange={(e) => handleChange({ masterGraduationYear: e.target.value })}
                className={`jinput ${formData.masterGraduationYear || !hasSubmitted ? "focus:outline-primary-marineBlue" : "focus:outline-primary-strawberryRed"} outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                type="text"
                placeholder="Master Graduation year"
              />
              {(!formData.masterGraduationYear && hasSubmitted) && (
                <span className="text-primary-strawberryRed font-medium">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* ------- Master's University and Degree: -------- */}
          <div className="flex flex-col w-full mb-8">
            <label className="text-primary-marineBlue font-medium mb-2">
              Master's University and Degree in:
            </label>
            <input
              value={formData.masterUniversityAndDegree || ""}
              onChange={(e) => handleChange({ masterUniversityAndDegree: e.target.value })}
              className={`jinput ${formData.masterUniversityAndDegree || !hasSubmitted ? "focus:outline-primary-marineBlue" : "focus:outline-primary-strawberryRed"} outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
              type="text"
              placeholder="Master's University and Degree"
            />
            {(!formData.masterUniversityAndDegree && hasSubmitted) && (
              <span className="text-primary-strawberryRed font-medium">
                This field is required
              </span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/jet/documents")}
              className="text-neutral-coolGray font-medium capitalize transition-all duration-300 hover:text-primary-marineBlue"
            >
              Go back
            </button>

            <button
              className="bg-primary text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
              onClick={handleNext}
              type="button"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educational;
