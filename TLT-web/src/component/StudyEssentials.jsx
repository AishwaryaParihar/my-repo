import React from "react";
import StudyCards from "./content/StudyCards";
import Breadcrumbs from "./utiliti/breadcrumbs/Breadcrumbs";

const StudyEssentials = () => {
  return (
    <>
      <Breadcrumbs heading={"Study Essentials"}>
        <StudyCards />
      </Breadcrumbs>
    </>
  );
};

export default StudyEssentials;
