import React from "react";
import ProjectCard from "../Components/ProjectCard";
import web1 from "../assets/images/web1.png";
import web2 from "../assets/images/web2.png";
import web3 from "../assets/images/web3.png";
import web4 from "../assets/images/web4.png";
import Title from "../Components/Title";

const Projects = () => {
  return (
    <div id="Projects" className=" text-white pt-[20px] ">
      <Title title="My Projects... " className=" py-[40px]" />
      <div className=" flex flex-wrap gap-[20px] xl:gap-[40px] justify-evenly pt-[20px] ">
      <ProjectCard
          src={web1}
          projectCartTitle="Single page website using React JS"
          projectDescription=" not responsive yet "
          link="https://pavanmg.netlify.app/"
        />
        <ProjectCard
          src={web4}
          projectCartTitle="Ecommerce website using Tailwind, React JS, Redux and API Fetching"
          projectDescription=" Fully responsive with Ecommerce website functionalites, multiple page functionalites, Data filtering and Firebase database "
          link="https://exclusive-io.netlify.app/"
        />
        <ProjectCard
          src={web3}
          projectCartTitle=" Single page website using HTML, CSS and JS "
          projectDescription=" Responsive on-going "
          link="https://fahadiqbal-01.github.io/hanock/"
        />
        <ProjectCard
          src={web2}
          projectCartTitle=" Single page website using HTML, CSS and Bootstrap "
          projectDescription=" Responsive on-going "
          link="https://fahadiqbal-01.github.io/0mah/"
        />
      </div>
    </div>
  );
};

export default Projects;
