import React from "react";
import "../footer/footer.css";
import { IoLogoGithub } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="navv">
          <div className="navv1">
            <h2 className="footer-h2">SHAHODAT USMONJONOVA</h2>
            <p className="footer-p">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="navv11">
            <h2 className="footer-h2">SOCIAL</h2>
            <div className="icons">
              <a href="https://github.com/Shahodat11">
                <IoLogoGithub className="icon" />
              </a>
              <a href="https://t.me/usmonjonovaa">
                <FaTelegram className="icon" />
              </a>
              <a href="mailto:shahodatusmonjonova@gmail.com">
                <FcGoogle className="icon" />
              </a>
              <a href="https://www.instagram.com/wxdt_/">
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__lower">
          <h5>
            <LuCopyright />
            Copyright 2024. Made by <a href="#">Shahodat Usmonjonova</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
