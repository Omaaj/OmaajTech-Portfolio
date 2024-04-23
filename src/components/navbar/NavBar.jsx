import React, { useState } from 'react';
import "./NavBar.scss";
import { links } from '../../data';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show_menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {
            links?.map((link, index) => {
              const {icon, path, name, id} = link;
              return(
                <li className="nav__item" key={index}>
                  <NavLink 
                    to={path} 
                    className={({isActive}) => isActive ? "nav__link active__nav" : "nav__link"}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {icon}
                    <h3 className="nav__name">{name}</h3>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div 
        className={`${showMenu ? "nav__toggle animate_toggle" : "nav__toggle"}`} 
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default NavBar
