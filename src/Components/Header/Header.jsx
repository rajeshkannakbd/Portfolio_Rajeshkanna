import React from 'react';
import { Button, Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headercontainer_left"><h3>Develo<span>er</span></h3></div>
      <div className="headercontainer_right">
        <Link to="about"  smooth={true} duration={500} ><h4>About me</h4></Link>
        <Link to="skills"  smooth={true} duration={500} ><h4>Skills</h4></Link>
        <Link to="projects"><h4>Projects</h4></Link>
        <Link to="experience"><h4>Experience</h4></Link>
        <Link to="contact"><h4>Contact</h4></Link>
        <Button className='button_join'>Join with me</Button>
      </div>
    </div>
  );
};

export default Header;

