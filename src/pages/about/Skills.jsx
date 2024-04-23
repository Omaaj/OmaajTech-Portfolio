import React from "react";
import { skills } from "../../data";
import "./About.scss";

export default function Skills() {
  return (
    <>
      {skills.map((skill) => {
        const { id, img, title } = skill;
        return (
          <>
            <div key={id} className="progress__box">
              <div className="progress__cirle">
                <img src={img} alt={title} />
              </div>
              <h3 className="skills__title">{title}</h3>
            </div>
          </>
        );
      })}
    </>
  );
}
