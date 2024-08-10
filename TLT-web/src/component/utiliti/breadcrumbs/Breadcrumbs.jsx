import React from "react";
import "./helper";
import Headings from "../heading/Heading";
// import bannerImg from "../../../assets/banner1.png"

const Breadcrumbs = ({ children, heading }) => {
  return (
    <>
      <div className="h-[40vh] lg:h-[65vh] w-full flex items-center justify-center m-0 relative">
        <div className="flex text-center justify-center items-center w-full h-full  px-5 md:px-20 banner2">
          <div className="flex flex-col gap-2 text-center justify-center items-center">
            <Headings heading={'h2'}> 
              {heading ? heading.firstLetterCapital() : "About"}
            </Headings>
            <button className="text-primary text-lg font-medium rounded-full px-6 py-1 mt-2 border border-red-500">
              {heading ? `Home / ${heading.firstLetterCapital()}` : "Home / About"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
    </>
  );
};

export default Breadcrumbs;
