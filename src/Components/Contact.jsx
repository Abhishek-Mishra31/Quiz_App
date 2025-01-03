import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page ">
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out to me through any of the following platforms:
      </p>

      <div className="contact-icons">
        <a
          href="mailto:abhishekbelaganj0609@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon email"
        >
          <FaEnvelope size={40} />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/Abhishek-Mishra31"
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
        >
          <FaGithub size={40} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/abhishek-mishra-192006209/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <FaLinkedin size={40} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://x.com/Abhishe09449303"
          target="_blank"
          rel="noopener noreferrer"
          className="icon twitter"
        >
          <FaTwitter size={40} />
          <span>Twitter</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
