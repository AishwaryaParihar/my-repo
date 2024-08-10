import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import productCards from "../../component/data/productCards";
import SummaryApi from "../../Common/SummaryAPI";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MpcjContactForm1 = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    purchasedProduct: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const valid = data.name && data.email && data.contact && data.purchasedProduct;

    if (valid) {
      try {
        const response = await fetch(SummaryApi["tpmForm"].url, {
          method: SummaryApi["tpmForm"].method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Form submitted successfully: ", result);
        toast.success("Form submitted successfully!");
        setIsModalOpen(false);
        
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        toast.error("There was a problem submitting the form. Please try again.");
      }
    } else {
      console.log("Please fill in all the fields");
      toast.error("Please fill in all the fields.");
    }
  };

  return (
    <div className="form-container mx-5">
      <div className="form-box flex justify-center items-center min-h-screen">
        <div className="container-main p-6 rounded-lg max-w-lg mx-auto">
          <h2 className="text-4xl font-bold bg-clip-text text-gray-900 text-center mb-6">
            Get your MPCJ Mains Offline Mock Test Series,
            <span className="text-red-500">Today!</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">
                  Your Name
                </label>
                <div className="underline"></div>
              </div>
            </div>

            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">
                  Email
                </label>
                <div className="underline"></div>
              </div>
            </div>

            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative">
                <input
                  type="tel"
                  name="contact"
                  value={data.contact}
                  onChange={handleChange}
                  className="block w-full focus:border-red-500 outline-none"
                  required
                />
                <label className="absolute left-0 bottom-1 text-gray-500 transition-all">
                  Contact No.
                </label>
                <div className="underline"></div>
              </div>
            </div>

            <div className="form-row flex space-x-4 mb-6">
              <div className="input-data w-full relative">
                <label
                  htmlFor="TPM"
                  className="block mb-2 text-sm font-medium text-gray-500 dark:text-white pl-4"
                ></label>
                <select
                  id="TPM"
                  name="purchasedProduct"
                  value={data.purchasedProduct}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                  required
                >
                  <option value="" disabled>
                    Select Product
                  </option>
                  {productCards.map((item, index) => (
                    <option key={index} value={`${item.title} ${item.price}`}>
                      {item.title} {item.price}
                    </option>
                  ))}
                </select>
                <div className="underline"></div>
              </div>
            </div>

            <div className="form-row submit-btn flex justify-center gap-3">
              <button
                type="submit"
                className="relative inline-block text-white bg-gradient-to-r p-4 px-14 from-red-700 to-red-400 hover:from-red-400 hover:to-red-700 font-semibold py-2 rounded-full transition-ease-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
       <ToastContainer />
    </div>
    
  );
};

export default MpcjContactForm1;
