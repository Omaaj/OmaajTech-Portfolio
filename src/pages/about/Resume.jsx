import React from "react";
import { resume } from "../../data";
import parse from "html-react-parser";

export default function Resume() {
  return (
    <>
      {resume.map((resu) => {
        const { id, icon, year, title, desc } = resu;
        return (
          <>
            <div className="resume__item" key={id}>
              <div className="resume__icon">{icon}</div>
              <span className="resume__date">{year}</span>
              <h3 className="resume__subtitle">{parse(title)}</h3>
              <ul>
                {desc.map((des) => {
                  return <li className="resume__description">{des}</li>;
                })}
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
}
