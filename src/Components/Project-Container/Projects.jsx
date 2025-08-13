import React, { useState } from "react";
import "./Projects.css";

const Projects = ({ img, title, decs, link }) => {
  const [show, setShow] = useState(false);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="projects"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show ? (
          <div className="project_content">
            <h4>{title}</h4>
            <p>{decs}</p>
          </div>
        ) : (
          <img src={img} alt={title} />
        )}
      </div>
    </a>
  );
};

export default Projects;
