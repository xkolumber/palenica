import React from "react";

const Footer = () => {
  return (
    <>
      <div className="black-bg">
        <footer className="footer">
          <div className="footer__first">
            <img src="/logo.png" alt="logo" />
            <div className="socials">
              <a href="https://www.facebook.com/palenicaspisskabela">
                <img src="/facebook.svg" alt="facebook" />
              </a>
              <img src="/telephone.svg" alt="telephone" id="footer_mobile" />
            </div>
          </div>
          <div className="footer__second">
            <h4>Rýchle odkazy</h4>
            <a href="">Naše služby</a>
            <a href="">Cenník</a>
            <a href="../pdf/prevadzkovy_poriadok.pdf" target="_blank">
              Prevádzkový poriadok
            </a>
            <a href="/php/ochrana_udajov.html">Ochrana osobných údajov</a>
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
