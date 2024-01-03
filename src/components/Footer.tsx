import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="black-bg">
        <footer className="footer">
          <div className="footer__first">
            <img src="/logo.png" alt="logo" />
            <div className="socials">
              <Link href={"https://www.facebook.com/palenicaspisskabela"}>
                {" "}
                <img src="/facebook.svg" alt="facebook" />
              </Link>
              <a href="tel:+421919210930">
                <img src="/telephone.svg" alt="telephone" id="footer_mobile" />
              </a>
            </div>
          </div>
          <div className="footer__second">
            <h4 className="text-decoration ">Rýchle odkazy</h4>
            <Link href={"/reservation"}>Objednať pálenie</Link>
            <Link href={"/pricelist"}>Cenník</Link>
            <Link href={"/rules"}>Prevádzkový poriadok</Link>
            <Link href={"/data_protection"}>Ochrana osobných údajov</Link>
          </div>
          <div className="footer__second">
            <h4>Kontakt</h4>
            <div className="img__text">
              <img src="/telephone_2.svg" alt="mobile" />
              <p>0919 210 930</p>
            </div>
            <div className="img__text">
              <img src="/mail.svg" alt="mobile" />
              <p>palenicaspisskabela@gmail.com</p>
            </div>
            <div className="img__text">
              <img src="/poloha.svg" alt="mobile" />
              <p>Zimná 1165/75, 059 01 Spišská Belá</p>
            </div>
          </div>
        </footer>
        <div className="copyright">© 2023 Pálenica Spišská Belá</div>
      </div>
    </>
  );
};

export default Footer;
