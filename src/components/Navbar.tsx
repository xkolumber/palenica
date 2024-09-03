"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [closeClicked, setCloseClicked] = useState(false);

  const clickedButtonClose = () => {
    setCloseClicked(!closeClicked);
  };

  return (
    <nav className="nav collapsible ">
      <Link href={`/`} className="nav__brand">
        {" "}
        <Image src="/logo.png" alt="logo" width={200} height={200} priority />
      </Link>

      <span>
        <Image
          src="/nav-icon.svg"
          alt="nav icon"
          width={0}
          height={0}
          className="icon icon--white nav__toggler logo hamburger"
          onClick={() => clickedButtonClose()}
          priority={true}
        />
      </span>
      <ul className="list nav__list collapsible__content hidden md:block">
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
      {closeClicked && <div className="behind_card_background"></div>}
      <div
        className={`collapsible--expanded ${
          closeClicked ? "collapsible--collapsed" : ""
        }  `}
      >
        <span className="nav__item">
          <Image
            src="/close.svg"
            alt="nav icon"
            width={0}
            height={0}
            className="icon icon--white nav__close-button"
            onClick={() => clickedButtonClose()}
            priority={true}
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
            <Image
              src="/biely_fb2.svg"
              alt="facebook"
              width={0}
              height={0}
              priority={true}
            />
          </span>
        </Link>

        <span className="nav__item img__nav">
          <a href="tel:+421919210930">
            <Image
              src="/biely_telefon.svg"
              alt="biely_telefon"
              width={0}
              height={0}
              priority={true}
            />
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
