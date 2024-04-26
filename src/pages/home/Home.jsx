import React from "react";
import "./Home.scss";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home section grid">
      <div className="img__box">
        <img src="./img/Untitled design (1).png" alt="" className="home__img" />
      </div>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Atunwon Olajuwon.</span>
            Software Developer : Transforming Ideas into Code
          </h1>
          <p className="home__description">
            I'm a versatile frontend developer skilled in creating seamless and
            scalable web solutions. I bring a holistic approach to software
            development.
          </p>
          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
}
