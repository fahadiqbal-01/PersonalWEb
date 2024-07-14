import React from "react";
import ProjectCard from "../Components/ProjectCard";
import web1 from "../assets/images/web1.png"
import web2 from "../assets/images/web2.png"
import web3 from "../assets/images/web3.png"

const Projects = () => {
  return (
    <div id="Projects" className=" h-fit xl:h-[100vh] text-white pt-[20px] flex flex-wrap gap-[20px] xl:gap-[40px] justify-evenly ">
      <ProjectCard src={web1} />
      <ProjectCard src={web2} />
      <ProjectCard src={web3} />
      <ProjectCard src={web3} />
      <ProjectCard src={web3} />
      <ProjectCard src={web3} />
      <ProjectCard src={web3} />
      <ProjectCard src={web3} />
    </div>
  );
};

export default Projects;
