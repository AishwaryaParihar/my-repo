import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Documents = ({ formData, handleChange }) => {
  const navigate = useNavigate(); // Initialize navigate

  const [photoAlert, setPhotoAlert] = useState(false);
  const [aadharAlert, setAadharAlert] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();

    if (!formData.photo) {
      setPhotoAlert(true);
    } else {
      setPhotoAlert(false);
    }
    if (!formData.aadhar) {
      setAadharAlert(true);
    } else {
      setAadharAlert(false);
    }

    if (formData.photo && formData.aadhar) {
      // You can handle additional form submission logic here if needed
      navigate("/jet/educational"); // Navigate to the next page
    } else {
      alert("Please upload documents");
    }
  };

  return (
    <div className="flex w-full h-full sm:pl-[120px]">
      <div className="w-full sm:w-[60%] p-4 pl-[0px]">
        <h1 className="mt-16 text-3xl font-[800] mb-5 text-primary-marineBlue">
          Document Upload
        </h1>

        <div className="flex flex-col relative space-y-4">
          <div className="flex flex-wrap pt-4">
            <div className="flex flex-col w-[100%] mb-5">
              <label className="text-primary-marineBlue font-[500] mb-2">
                Upload Photo
              </label>
              <input
                onChange={(e) => handleChange({ photo: e.target.files[0] })}
                className={`jinput ${
                  photoAlert
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } outline outline-1 outline-neutral-lightGray h-7`}
                type="file"
                accept="image/*"
                name="photo"
              />
              {photoAlert && (
                <span className="text-primary-strawberryRed font-[500]">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap pt-4">
            <div className="flex flex-col w-[100%] mb-5">
              <label className="text-primary-marineBlue font-[500] mb-2">
                Upload Aadhar
              </label>
              <input
                onChange={(e) => handleChange({ aadhar: e.target.files[0] })}
                className={`jinput ${
                  aadharAlert
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } mb-6 outline outline-1 outline-neutral-lightGray h-7`}
                type="file"
                accept="application/pdf,image/*"
                name="aadhar"
              />
              {aadharAlert && (
                <span className="text-primary-strawberryRed font-[500]">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center pt-[20px] sm:pt-[35px]">
            <button
              type="button"
              className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
              onClick={() => navigate("/jet/guardiandetails")} // Use navigate here
            >
              Go back
            </button>

            <button
              className="bg-primary lg:mr-16 text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
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

export default Documents;
