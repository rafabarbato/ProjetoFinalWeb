import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="hnavbar">
        <ul className="hmenu">
          <li className="hmenu-logo">
            <div className="logo">
              <img
                src="./svg/fiticonwhite.svg"
                alt="Logo"
                className="logo-icon"
              />
              Personal Fit
            </div>
          </li>
          <li className="hmenu-item">
            <Link to="/" className="home">
              Home
            </Link>
          </li>
          <li className="hmenu-item">
            <Link to="/about" className="about">
              Sobre
            </Link>
          </li>
          <li className="hmenu-item">
            <Link to="/services" className="services">
              Serviços
            </Link>
          </li>
          <li className="hmenu-item">
            <Link to="/contact" className="contact">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
