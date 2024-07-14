import React from "react";
import ProjectCard from "../Components/ProjectCard";
import web1 from "../assets/images/web1.png";
import web2 from "../assets/images/web2.png";
import web3 from "../assets/images/web3.png";
import Title from "../Components/Title";

const Projects = () => {
  return (
    <div
      id="Projects"
      className=" text-white pt-[20px] "
    >
      <Title title="My Projects.. " className=" ml-[45px] " />
      <div className=" flex flex-wrap gap-[20px] xl:gap-[40px] justify-evenly pt-[20px] ">
      <ProjectCard src={web1} projectCartTitle="something" projectDescription=" lorem ipsum is something  lorem ipsum is something  lorem ipsum is something  lorem ipsum is something  lorem ipsum is something  lorem ipsum is something  lorem ipsum is something  lorem ipsum is something  lorem ipsum is something  lorem ipsum is something " />
      <ProjectCard src={web2} />
      <ProjectCard src={web3} />
      <ProjectCard src={web3} />
      <ProjectCard src={web3} />
      <ProjectCard src={web3} />
      <ProjectCard src={web3} />
      <ProjectCard src={web3} />    
      </div>
    </div>
  );
};

export default Projects;
