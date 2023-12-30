import React from "react";

const HomePageIntro = () => {
  return (
    <section className="text-white uvod">
      <img src="/skuska_new.jpg" alt="" className="background-image" />
      {/* <div className="background-image2"></div> */}
      <div className="background-overlay"></div>
      {/* <div className="background-overlay2"></div> */}
      <header className="addition">
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
      </header>
      <div id="includedContent0"></div>
      <section className="uvod__centered">
        <h1 className="text-center">Vitajte v našej pálenici</h1>
        <p className="text-center">
          Pálime domácu pálenku zo širokého sortimentu ovocia.
        </p>
        <div className="btns-together">
          <a href="php/formular.html" className="btn btn--secondary">
            <img src="/fajka.svg" alt="" />
            Objednať pálenie online
          </a>
          <a
            href="pdf/ziadost_vypalenie.pdf"
            className="btn btn--primary"
            target="_blank"
          >
            Žiadosť o vypálenie v pdf
          </a>
        </div>
      </section>

      <div className="uvod__spodok">
        <div className="uvod__spodok__cast">
          <h4 className="text-decoration">Aktuality</h4>
          <a href="php/sutaz.html" className="text-white link-arrow">
            Súťaž ovocných destilátov
          </a>
          <a href="php/oznam.html" className="text-white link-arrow">
            Sezóna v pálenici začína
          </a>
        </div>

        <div className="info__socials">
          <div className="img__text">
            <img src="/biely_telefon.svg" alt="biely_telefon" />
            <p>0919 210 930</p>
          </div>
          <div className="img__text">
            <img src="/biely_mail.svg" alt="mail_icon" />
            <p>palenicaspisskabela@gmail.com</p>
          </div>
          <div className="img__text">
            <img src="/biely_fb.svg" alt="biely_fb" />
            <p>Pálenica Spišská Belá</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageIntro;
