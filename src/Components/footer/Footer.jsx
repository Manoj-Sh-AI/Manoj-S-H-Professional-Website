import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Manoj S H</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://twitter.com/ManojSH100"
            className="footer__social-link"
            target="_blank"
          >
            <i class="fi fi-brands-twitter-alt"></i>
          </a>
          <a
            href="https://github.com/Manoj-Sh-AI"
            className="footer__social-link"
            target="_blank"
          >
            <i class="fi fi-brands-github"></i>
          </a>
          <a
            href="https://in.linkedin.com/in/manoj-s-h-6b646b1bb"
            className="footer__social-link"
            target="_blank"
          >
            <i class="fi fi-brands-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Manoj S H. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
