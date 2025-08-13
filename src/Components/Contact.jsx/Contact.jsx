import React from "react";
import "./Contact.css";
import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="Contact_container">
        <p>
          Email:<span>rajeshkannakbd@gmail.com</span>
        </p>
        <p>
          GitHub Usernmae:<span><a href="https://github.com/rajeshkannakbd">https://github.com/rajeshkannakbd</a></span>
        </p>
        <div className="contact_icons">
          <a href="linkedin.com/in/rajeshkanna02">
            <IconButton>
              <LinkedIn/>
            </IconButton>
          </a>
          <a href="#">
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a href="#">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
