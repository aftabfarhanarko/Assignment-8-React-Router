import { Link } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import "../../App.css";
import email from '../../assets/email.png'
import fac from '../../assets/facbook.png'
import twiter from '../../assets/twiter.png'
import link from '../../assets/linkdin.png'

const Footer = () => {
  return (
    <div>
      <div className="bg-black mt-7">
        <footer className=" flex-col-1 justify-between md:flex-row container mx-auto footer sm:footer-horizontal  p-10 text-white">
          <nav>
            <h6 className="footer-title">
             Hero IO — your all-in-one productivity companion.
            </h6>
            <p className="max-w-[400px]">
              Hero IO — your all-in-one productivity companion. Organize your
              thoughts and turn ideas into action. Plan smarter and stay ahead
              of every deadline. Collaborate effortlessly with your team in real
              time. Manage tasks, set reminders, and track your progress. Sync
            
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Conteact</h6>
            <p>Home</p>
            <p>App</p>
            <p>Install App</p>
          </nav>

          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a href="/" className="link link-hover">
              About
            </a>
            <a href="/" className="link link-hover">
              Contact
            </a>
            <a href="/" className="link link-hover">
              Profile
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Media Conteact</h6>

            <div className="flex gap-5 items-center">
              <div className="flex gap-2">
                <a
                  href="https://github.com/aftabfarhanarko"
                  className="link link-hover"
                >
                  <img src={email}></img>
                </a>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/aftabfarhan/"
                  className="link link-hover"
                >
                  <img src={link}></img>
                </a>
              </div>
              <div className="flex gap-2">
                <a
                  href=" https://www.facebook.com/profile"
                  className="link link-hover"
                >
                  <img src={fac}></img>
                </a>
              </div>
              <div className="flex gap-2">
                <a href="https://x.com/home" className="link link-hover"></a>
                <img src={twiter}></img>
              </div>
            </div>
          </nav>
        </footer>
        <p className="text-white text-center py-6 border-t border-gray-400">
          © 2025 GreenNest. All rights reserved
        </p>
      </div>
    </div>
  );
};
// cd dist  surge
export default Footer;
