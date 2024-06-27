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
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <>
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
      </section>{" "}
      <ScrollToTop
        className=" flex justify-center items-center absolute left-1 !bottom-1 xl:!left-3 xl:!bottom-3 !w-[25px] !h-[35px] xl:!w-[50px] xl:!h-[50px] sm:!w-[30px] sm:!h-[40px] md:!w-[40px] "
        smooth
        color="#000000"
      />
    </>
  );
};

export default Home;
