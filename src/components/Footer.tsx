import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const actual_year = new Date().getFullYear();
  return (
    <>
      <div className="black-bg">
        <footer className="footer">
          <div className="footer__first">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={200}
              priority
            />
            <div className="socials">
              <Link href={"https://www.facebook.com/palenicaspisskabela"}>
                <Image
                  src="/facebook.svg"
                  alt="logo"
                  width={200}
                  height={200}
                  priority
                />{" "}
              </Link>
              <a href="tel:+421919210930">
                <Image
                  src="/telephone.svg"
                  alt="logo"
                  width={200}
                  height={200}
                  priority
                  id="footer_mobile"
                />
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
              <Image
                src="/telephone_2.svg"
                alt="logo"
                width={100}
                height={100}
                priority
              />{" "}
              <p>0919 210 930</p>
            </div>
            <div className="img__text">
              <Image
                src="/mail.svg"
                alt="logo"
                width={100}
                height={100}
                priority
              />{" "}
              <p>palenicaspisskabela@gmail.com</p>
            </div>
            <div className="img__text">
              <Image
                src="/poloha.svg"
                alt="logo"
                width={100}
                height={100}
                priority
              />{" "}
              <p>Zimná 1165/75, 059 01 Spišská Belá</p>
            </div>
          </div>
        </footer>
        <div className="copyright">© {actual_year} Pálenica Spišská Belá</div>
      </div>
    </>
  );
};

export default Footer;
