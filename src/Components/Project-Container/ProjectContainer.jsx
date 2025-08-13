import React from "react";
import { Element } from "react-scroll";
import Projects from "./Projects";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      img: "/Images/1.png",
      title: "E-commerce Website",
      decs: "A full-stack MERN e-commerce site with payment integration, order tracking, and deployment on Render.",
      link: "#",
    },
    {
      img: "/Images/1.png",
      title: "Blog Platform",
      decs: "A MERN-based blog site with AI-generated descriptions, markdown support, and image uploads.",
      link: "#",
    },
    {
      img: "/Images/1.png",
      title: "Portfolio Website",
      decs: "A responsive portfolio website built with React.js showcasing my projects and skills.",
      link: "#",
    },
  ];

  return (
    <Element className="projectcontainer" id="projects">
      <h1>Projects</h1>
      <p>Here are some projects that I made</p>
      <div className="projectcontainer_projects">
        {projects.map((project, index) => (
          <Projects
            key={index}
            img={project.img}
            title={project.title}
            decs={project.decs}
            link={project.link}
          />
        ))}
      </div>
    </Element>
  );
};

export default ProjectContainer;
