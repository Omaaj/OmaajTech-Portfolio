import React from "react";
import { stats } from "../../data";
import parse from "html-react-parser";
import "./About.scss";

export default function Stats() {
  return (
    <>
      {stats.map((stat) => {
        const { id, no, title } = stat;
        return (
          <div className="stats__box" key={id}>
            <h3 className="stats__no">{no}</h3>
            <p className="stats__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
}
