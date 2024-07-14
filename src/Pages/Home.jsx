import React from "react";
import Banner from "../Components/Banner";
import ContactMessage from "../Components/ContactMessage";
import ContactInfo from "../Components/ContactInfo";
import Flex from "../Components/Flex";
import About from "../SubPages/About";
import Skill from "../SubPages/Skill";
import Projects from "../SubPages/Projects";
import NavBarSec from "../Components/NavBarSec";

const Home = () => {
  return (
    <>
      <section className=" mt-[50px] pb-[120px] static xl:flex ">
        <div className=" flex flex-col w-full xl:w-[95%] px-0 xl:px-[20px] ">
          <Banner />
          <About />
          <Skill />
          <Projects />
          <Flex
            id="Contacts"
            className=" h-full xl:h-[100vh] justify-between flex-col lg:flex-col xl:flex-row py-[80px] "
          >
            <ContactInfo />
            <ContactMessage />
          </Flex>
        </div>
        <NavBarSec />
      </section>
    </>
  );
};

export default Home;
