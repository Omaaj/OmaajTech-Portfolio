import React from "react";
import "./Portfolio.scss";
import { portfolio } from "../../data";
import PortfolioItems from "./PortfolioItems";

export default function Portfolio() {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItems key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
