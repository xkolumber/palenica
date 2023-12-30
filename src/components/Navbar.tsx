import React from "react";

const Navbar = () => {
  return (
    <nav className="nav collapsible">
      <a aria-label="Palenica" className="nav__brand" href="index.html">
        <img src="/logo.png" alt="logo palenice" />
      </a>
      <span>
        <img
          src="/nav-icon.svg"
          alt="nav icon"
          className="icon icon--white nav__toggler logo hamburger"
        />
      </span>
      <ul className="list nav__list collapsible__content">
        <li className="nav__item">
          <span>
            <img
              src="/close.svg"
              alt="nav icon"
              className="icon icon--white nav__close-button"
            />
          </span>
        </li>
        <li className="nav__item">
          <a href="#">Úvod</a>
        </li>
        <li className="nav__item">
          <a id="nase_sluzby">Naše služby</a>
        </li>
        <li className="nav__item">
          <a href="php/cennik.html">Cenník</a>
        </li>
        <li className="nav__item">
          <a id="galeria_">Galéria</a>
        </li>
        <li className="nav__item img__nav">
          <a href="https://www.facebook.com/palenicaspisskabela">
            <span>
              <img src="/biely_fb2.svg" alt="facebook" />
            </span>
          </a>
        </li>
        <li className="nav__item img__nav">
          <span>
            <img
              src="/biely_telefon.svg"
              alt="biely_telefon"
              id="uvod_mobile_m"
            />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
