import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Portfolio.scss";
import { Link } from "react-router-dom";

export default function PortfolioItems({ img, title, details }) {
  const [modal, setModal] = useState(false);

  const handleToggle = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />
      <div className="porfolio__hover" onClick={handleToggle}>
        <h3 className="portfolio__title">{title}</h3>
      </div>
      {modal && (
        <div className="portfolio__modal" onClick={handleToggle}>
          <div className="portfolio__modal-content">
            <div className="modal__close" onClick={handleToggle}>
              <IoIosCloseCircleOutline fontSize={50} color="#111" />
            </div>
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details.map((detail, index) => {
                const { icon, title, desc, desc1, desc2 } = detail;
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icon">{icon}</span>
                    <div>
                      <span className="item__title">{title}</span>
                      <span className="item__details">
                        <Link to={desc1} target="_blank" className="links">
                          {desc}
                        </Link>
                        <span>{desc2}</span>
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
}
