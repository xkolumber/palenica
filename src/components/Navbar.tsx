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
          onClick={() => clickedButtonClose()}
        />
      </span>
      <ul className="list nav__list collapsible__content">
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
      </ul>
      {closeClicked && (
        <div className="collapsible--expanded">
          <span className="nav__item">
            <img
              src="/close.svg"
              alt="nav icon"
              className="icon icon--white nav__close-button"
              onClick={() => clickedButtonClose()}
            />
          </span>

          <Link
            href={"/"}
            className="nav__item"
            onClick={() => clickedButtonClose()}
          >
            Úvod
          </Link>
          <Link
            href={"/reservation"}
            className="nav__item"
            onClick={() => clickedButtonClose()}
          >
            Objednať pálenie
          </Link>
          <Link
            href={"/pricelist"}
            className="nav__item"
            onClick={() => clickedButtonClose()}
          >
            Cenník
          </Link>
          <Link
            href={"/gallery"}
            className="nav__item"
            onClick={() => clickedButtonClose()}
          >
            Galéria
          </Link>

          <Link
            href={"https://www.facebook.com/palenicaspisskabela"}
            className="nav__item img__nav"
          >
            {" "}
            <span>
              <img src="/biely_fb2.svg" alt="facebook" />
            </span>
          </Link>

          <span className="nav__item img__nav">
            <img
              src="/biely_telefon.svg"
              alt="biely_telefon"
              id="uvod_mobile_m"
            />
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
