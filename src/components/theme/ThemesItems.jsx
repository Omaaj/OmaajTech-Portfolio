import React from "react";
import "./Themes.scss";

const ThemesItems = ({ color, img, changeColor }) => {
  return (
    <img
      src={img}
      alt="color"
      className="theme__img"
      onClick={() => changeColor(color)}
    />
  );
};

export default ThemesItems;
