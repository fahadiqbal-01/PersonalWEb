import React from "react";
import Banner from "../Components/Banner";
import AboutProfile from "../Components/AboutProfile";
import WhatIDO from "../Components/WhatIDO";
import Container from "../Components/Container";
import Education from "../Components/Education";
import Projects from "../Components/Projects";
import ContactMessage from "../Components/ContactMessage";
import ContactInfo from "../Components/ContactInfo";
import Flex from "../Components/Flex";
import Skill from "../Components/Skill";

const Home = () => {
  return (
    <section id="Home" className=" mt-[50px] pb-[120px] ">
      <Container>
        <Banner />
        <AboutProfile />
        <WhatIDO />
        <Skill />
        <Education />
        <Projects />
        <Flex
          id="Contacts"
          className=" justify-between flex-col lg:flex-col xl:flex-row"
        >
          <ContactInfo />
          <ContactMessage />
        </Flex>
      </Container>
    </section>
  );
};

export default Home;
