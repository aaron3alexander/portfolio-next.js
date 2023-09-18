"use client";

import { useEffect, useState } from "react";
import "../css/sidebar.css";

export default function Sidebar() {
  const sections = ["home", "about", "education", "experience"];
  const [currentSection, setCurrentSection] = useState("home");

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const handleScroll = debounce(() => {
    const position = window.scrollY;
    const height = window.innerHeight;

    setCurrentSection(sections[Math.round(position / height)]);
  }, 20);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (currentSection != "home" && currentSection != "education") {
      const shapes = document.querySelectorAll(`.shape`);
      shapes.forEach((element) => {
        element.classList.add("dark");
      });
    } else {
      const shapes = document.querySelectorAll(`.shape.dark`);
      shapes.forEach((element) => {
        element.classList.remove(`dark`);
      });
    }
  }, [currentSection]);

  return (
    <div className="hidden md:flex">
      <div className="sidebar">
        <a href="#home">
          <div
            className={`shape ${
              currentSection === "home" ? "square" : "diamond"
            }`}
          ></div>
        </a>

        <a href="#about">
          <div
            className={`shape ${
              currentSection === "about" ? "square" : "diamond"
            }`}
          ></div>
        </a>

        <a href="#education">
          <div
            className={`shape ${
              currentSection === "education" ? "square" : "diamond"
            }`}
          ></div>
        </a>
        <a href="#experience">
          <div
            className={`shape ${
              currentSection === "experience" ? "square" : "diamond"
            }`}
          ></div>
        </a>
      </div>
    </div>
  );
}
