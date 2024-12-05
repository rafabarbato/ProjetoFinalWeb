import React from "react";
import "../styles/styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="fnavbar">
        <ul className="fmenu">
          <li className="fname">Personal Fit todos os direitos reservados.</li>
          <li>
            <span className="fcontact">Email:</span>{" "}
            <span className="fcontact-inside">contato@personalfit.com</span>
          </li>
          <li>
            <span className="fcontact">Telefone:</span>{" "}
            <span className="fcontact-inside">(99) 99999-9999</span>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
