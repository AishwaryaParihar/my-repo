import React, { useState } from "react";
import PYpaperform from "./PYpaperform";

import dl from "../../assets/dl.png";
import gi from "../../assets/gj.png";
import mp from "../../assets/mp.png";
import uk from "../../assets/uk.png";
import Headings from "../utiliti/heading/Heading";
const PYpaper = [
  {
    img: dl,
    Ptitle: "DELHI JUDICIAL SERVICE EXAM 2023 (PRELIMS)",
    href: "PYpaperform",
  },
  {
    img: dl,
    Ptitle: "DELHI JUDICIAL SERVICE EXAM' 2022, (MAINS)",
  },
  {
    img: dl,
    Ptitle: "DELHI JUDICIAL SERVICE EXAM' 2019, (PRELIMS)",
  },
  {
    img: dl,
    Ptitle: "DELHI JUDICIAL SERVICE EXAM' 2018, (PRELIMS)",
  },
  {
    img: dl,
    Ptitle: "DELHI QUESTIONS PAPER 2022",
  },
  {
    img: gi,
    Ptitle: "GUJARAT QUESTION PAPER 2022",
  },
  {
    img: mp,
    Ptitle: "MADHYA PRADESH QUESTION PAPER 2022",
  },
  {
    img: uk,
    Ptitle: "UTTARAKHAND QUESTION PAPER 2022",
  },
];
export const PYpapers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap gap-12 my-8">
        <Headings heading={"h2"}>
          Previous <span className="text-primary"> Year Papers</span>
        </Headings>

        <div className="flex justify-center flex-wrap gap-12 my-8">
          {PYpaper.map((item, index) => (
            <div
              key={index}
              className="flex justify-content-center items-center text-center flex-col w-80 md:w-60"
            >
              <div>
                <img src={item.img} className="w-80 md:w-60" />
              </div>
              <div className="text-lg font-medium opacity-75">
                {item.Ptitle}
              </div>
              <button
                className="text-sm font-bold text-white bg-primary px-2 py-1 mt-1 rounded-sm"
                onClick={handleBuyNowClick}
              >
                Download as PDF
              </button>
            </div>
          ))}

          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
              <div className="bg-white p-3 rounded-lg w-96 bg-opacity-100">
                <button
                  className="absolute text-3xl  font-bold   text-black"
                  onClick={handleCloseModal}
                >
                  X
                </button>
                <PYpaperform/>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
