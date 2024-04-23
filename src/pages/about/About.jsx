import React from "react";
import "./About.scss";
import Info from "./Info";
import { FaDownload } from "react-icons/fa";
import CV from "../../components/assets/Olajuwon_Resume.pdf";
import Stats from "./Stats";
import Skills from "./Skills";
import Resume from "./Resume";

export default function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About
          <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">
              Download Cv
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="seperator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>
      <div className="seperator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">Experience</h3>
        <div className="resume__container grid">
          <Resume />
        </div>
      </section>
    </main>
  );
}
