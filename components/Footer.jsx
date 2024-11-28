import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons from React Icons

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center text-white text-sm">
      <p>
        Weather data sourced from{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
        . Wallpaper courtesy of
        <a
          href="https://www.ghibli.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1"
        >
          Ghibli Studio
        </a>
      </p>
      <p>Discover more about me and my projects on</p>
      <div className="flex space-x-2">
        <a
          href="linkedin.com/in/roselyn-chan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaLinkedin />
          <span className="ml-1">LinkedIn</span>
        </a>
        <a
          href="https://github.com/roselynnlcc/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaGithub />
          <span className="ml-1">GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
