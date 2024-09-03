import { Actuality } from "@/app/lib/interface_actuality";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import ImagesLoop from "./ImagesLoop";

interface Props {
  data: Actuality[];
  pdf: string;
}

const HomePageIntro = ({ data, pdf }: Props) => {
  return (
    <section className=" uvod relative">
      <ImagesLoop />
      <div className="background-overlay"></div>
      <header className="addition">
        <Navbar />
      </header>

      <section className="uvod__centered">
        <h1 className="text-center">Vitajte v našej pálenici</h1>
        <p className="text-center">
          Pálime domácu pálenku zo širokého sortimentu ovocia.
        </p>
        <div className="btns-together">
          <Link href={"/reservation"} className="btn btn--secondary">
            {" "}
            <img src="/fajka.svg" alt="" />
            Objednať pálenie online
          </Link>
          <a href={pdf} className="btn btn--primary" target="_blank">
            Žiadosť o vypálenie v pdf
          </a>
        </div>
      </section>

      <div className="uvod__spodok">
        <div className="uvod__spodok__cast">
          <h4 className="text-decoration">Aktuality</h4>

          {data.map((actuality, index) => (
            <Link
              href={`/actuality/${actuality.slug.current}`}
              key={index}
              className="text-white link-arrow"
            >
              {actuality.title}{" "}
            </Link>
          ))}
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
          <Link
            href={"https://www.facebook.com/palenicaspisskabela"}
            className="img__text"
          >
            <img src="/biely_fb.svg" alt="biely_fb" />
            <p>Pálenica Spišská Belá</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageIntro;
