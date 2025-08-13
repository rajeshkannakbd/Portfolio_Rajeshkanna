import React from "react";
import { Element } from "react-scroll";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Skill-container/SkillContainer.css";

const SkillContainer = () => {
  return (
    <Element className="skill_container" id="skills">
      <div className="skill_container_img">
        <img src="/Images/images.jpg" className=" mt-32 ml-32" alt="Full Stack Project" />
      </div>
      <div className="skill_textcontainer">
        <h2>Skill Set</h2>
        <div className="skill_container1">
          <h5>HTML</h5>
          <ProgressBar variant="success" now={97} />
        </div>
        <div className="skill_container1">
          <h5>CSS</h5>
          <ProgressBar variant="info" now={92} />
        </div>
        <div className="skill_container1">
          <h5>JAVA SCRIPT</h5>
          <ProgressBar variant="warning" now={87} />
        </div>
        <div className="skill_container1">
          <h5>REACT</h5>
          <ProgressBar variant="danger" now={82} />
        </div>
        <div className="skill_container1">
          <h5>GIT</h5>
          <ProgressBar variant="info" now={90} />
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
