import React from "react";
import { personalInfo } from "../../data";
import "./About.scss";

export default function Info() {
  return (
    <>
      {personalInfo.map((personal) => {
        const { id, title, description } = personal;
        return (
          <li className="info__item" key={id}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
}
