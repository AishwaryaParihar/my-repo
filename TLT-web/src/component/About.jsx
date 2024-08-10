import React from "react";
import AboutFirm from "./content/AboutFirm";
import Mentor from "./content/Mentor";
import Breadcrumbs from "./utiliti/breadcrumbs/Breadcrumbs";
import MissionVision from "./content/MissionVision";

const About = () => {
  return (
    <div>
     <Breadcrumbs   heading={'About'}>
     <AboutFirm />
     <MissionVision/>
     <Mentor />
     </Breadcrumbs>
    </div>
  );
};

export default About;
