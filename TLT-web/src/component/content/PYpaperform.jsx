// // src/component/content/PYpaperform.jsx
// import React, { useState } from "react";
// import writtenImg from "../../assets/written.jpg";
// import "tailwindcss/tailwind.css";

// const PYpaperform = () => {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     number: "",
//   });

//   const [nameAlert, setNameAlert] = useState(false);
//   const [emailAlert, setEmailAlert] = useState(false);
//   const [numAlert, setNumAlert] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;
//     if (data.name === "") {
//       setNameAlert(true);
//       valid = false;
//     } else {
//       setNameAlert(false);
//     }
//     if (data.email === "") {
//       setEmailAlert(true);
//       valid = false;
//     } else {
//       setEmailAlert(false);
//     }
//     if (data.number === "") {
//       setNumAlert(true);
//       valid = false;
//     } else {
//       setNumAlert(false);
//     }

//     if (valid) {
//       console.log("Form data: ", data);
//       downloadFile(writtenImg);
//     }
//   };

//   const downloadFile = (url) => {
//     const filename = url.split("/").pop();
//     const aTag = document.createElement("a");
//     aTag.href = url;
//     aTag.setAttribute("download", filename);
//     document.body.appendChild(aTag);
//     aTag.click();
//     aTag.remove();
//   };

//   return (
//     <div className="flex justify-center flex-wrap gap-12 my-8">
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <div className="flex flex-col justify-center">
//           <div className="flex flex-wrap sm:flex-nowrap w-full flex-col mb-6">
//             <label className="flex text-primary-marineBlue font-medium mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={data.name}
//               onChange={handleChange}
//               className={`jinput ${
//                 nameAlert
//                   ? "focus:outline-primary-strawberryRed"
//                   : "focus:outline-primary-marineBlue"
//               } outline outline-1 outline-neutral-lightGray rounded p-3`}
//               placeholder="e.g. Stephen King"
//               required
//             />
//             {nameAlert && (
//               <span className="text-primary-strawberryRed font-medium text-sm">
//                 This field is required
//               </span>
//             )}
//           </div>

//           <div className="flex flex-wrap sm:flex-nowrap w-full flex-col mb-6">
//             <label className="flex text-primary-marineBlue font-medium mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={handleChange}
//               className={`jinput ${
//                 emailAlert
//                   ? "focus:outline-primary-strawberryRed"
//                   : "focus:outline-primary-marineBlue"
//               } outline outline-1 outline-neutral-lightGray rounded p-3`}
//               placeholder="e.g. stephenking@lorem.com"
//               required
//             />
//             {emailAlert && (
//               <span className="text-primary-strawberryRed font-medium text-sm">
//                 This field is required
//               </span>
//             )}
//           </div>

//           <div className="flex flex-wrap sm:flex-nowrap w-full flex-col mb-6">
//             <label className="flex text-primary-marineBlue font-medium mb-2">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="number"
//               value={data.number}
//               onChange={handleChange}
//               className={`jinput ${
//                 numAlert
//                   ? "focus:outline-primary-strawberryRed"
//                   : "focus:outline-primary-marineBlue"
//               } outline outline-1 outline-neutral-lightGray rounded p-3`}
//               placeholder="e.g. 123-456-7890"
//               required
//             />
//             {numAlert && (
//               <span className="text-primary-strawberryRed font-medium text-sm">
//                 This field is required
//               </span>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="text-sm font-bold text-white bg-primary px-1 w-48 py-1 mt-2 rounded-sm"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PYpaperform;

import React, { useState } from "react";
import writtenImg from "../../assets/written.jpg";
import "tailwindcss/tailwind.css";
import SummaryApi from "../../Common/SummaryAPI";

const PYpaperform = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [nameAlert, setNameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [numAlert, setNumAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    if (data.name === "") {
      setNameAlert(true);
      valid = false;
    } else {
      setNameAlert(false);
    }
    if (data.email === "") {
      setEmailAlert(true);
      valid = false;
    } else {
      setEmailAlert(false);
    }
    if (data.number === "") {
      setNumAlert(true);
      valid = false;
    } else {
      setNumAlert(false);
    }

    if (valid) {
      try {
        const response = await fetch(SummaryApi["prepaper"].url, {
          method: SummaryApi["prepaper"].method,
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
        downloadFile(writtenImg);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

  const downloadFile = (url) => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="flex justify-center flex-wrap gap-12 my-8">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap sm:flex-nowrap w-full flex-col mb-6">
            <label className="flex text-primary-marineBlue font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className={`jinput ${
                nameAlert
                  ? "focus:outline-primary-strawberryRed"
                  : "focus:outline-primary-marineBlue"
              } outline outline-1 outline-neutral-lightGray rounded p-3`}
              placeholder="e.g. Stephen King"
              required
            />
            {nameAlert && (
              <span className="text-primary-strawberryRed font-medium text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-wrap sm:flex-nowrap w-full flex-col mb-6">
            <label className="flex text-primary-marineBlue font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className={`jinput ${
                emailAlert
                  ? "focus:outline-primary-strawberryRed"
                  : "focus:outline-primary-marineBlue"
              } outline outline-1 outline-neutral-lightGray rounded p-3`}
              placeholder="e.g. stephenking@lorem.com"
              required
            />
            {emailAlert && (
              <span className="text-primary-strawberryRed font-medium text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-wrap sm:flex-nowrap w-full flex-col mb-6">
            <label className="flex text-primary-marineBlue font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              value={data.number}
              onChange={handleChange}
              className={`jinput ${
                numAlert
                  ? "focus:outline-primary-strawberryRed"
                  : "focus:outline-primary-marineBlue"
              } outline outline-1 outline-neutral-lightGray rounded p-3`}
              placeholder="e.g. 123-456-7890"
              required
            />
            {numAlert && (
              <span className="text-primary-strawberryRed font-medium text-sm">
                This field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="text-sm font-bold text-white bg-primary px-1 w-48 py-1 mt-2 rounded-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PYpaperform;
