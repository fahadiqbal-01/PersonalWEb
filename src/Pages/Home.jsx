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
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <>
      <section className=" mt-[50px] pb-[120px] ">
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
      <Link smooth to="#Home">
        <ScrollToTop
          className=" flex justify-center items-center absolute left-2 !bottom-10 xl:!left-3 xl:!bottom-3 !w-[35px] !h-[40px] xl:!w-[50px] xl:!h-[50px] sm:!w-[30px] sm:!h-[40px] md:!w-[40px] !font-bold "
          smooth
          color="#000000"
        />
      </Link>
    </>
  );
};

export default Home;
