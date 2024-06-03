import React from "react";
import AboutProfile from "../Components/AboutProfile";
import WhatIDO from "../Components/WhatIDO";
import Skills from "../Components/Skills";
import Container from "../Components/Container";
import Education from "../Components/Education";
import "../Components/AllCss.css"

const About = () => {
  return (
    <section className=" pb-[70px] mt-[50px]" id="about">
      <Container className=" scroll-smooth ">
        <AboutProfile />
        <WhatIDO />
        <Education />
        <Skills />
      </Container>
    </section>
  );
};

export default About;
