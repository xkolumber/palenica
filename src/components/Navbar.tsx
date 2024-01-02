"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [closeClicked, setCloseClicked] = useState(false);

  const clickedButtonClose = () => {
    setCloseClicked(!closeClicked);
    console.log(closeClicked);
  };

  console.log;
  return (
    <nav className="nav collapsible ">
      <Link href={`/`} className="nav__brand">
        {" "}
        <img src="/logo.png" alt="logo palenice" />{" "}
      </Link>

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
              onClick={() => clickedButtonClose()}
            />
          </span>
        </li>

        <Link href={"/"} className="nav__item">
          Úvod
        </Link>
        <Link href={"/reservation"} className="nav__item">
          Objednať pálenie
        </Link>
        <Link href={"/pricelist"} className="nav__item">
          Cenník
        </Link>
        <Link href={"/gallery"} className="nav__item">
          Galéria
        </Link>

        <li className="nav__item img__nav">
          <Link href={"https://www.facebook.com/palenicaspisskabela"}>
            {" "}
            <span>
              <img src="/biely_fb2.svg" alt="facebook" />
            </span>
          </Link>
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
      {closeClicked && <div className="collapsible__content">f</div>}
    </nav>
  );
};

export default Navbar;
