import { PriceList } from "@/app/lib/interface_price_list";
import { client } from "@/app/lib/sanity";
import React from "react";

interface Props {
  data: PriceList;
}
const PriceListSection = async ({ data }: Props) => {
  console.log(data);
  return (
    <section className="sekcia__main">
      <div className="logo__section">
        <img src="/logo.png" alt="logo" />
        <h2>Cenník</h2>
        <p>
          Cena za spotrebnú daň z liehu vzrástla o 30%. Z tohto dôvodu sme
          nútení pristúpiť k zvýšeniu ceny za služby destilácie v našej
          Pálenici.
        </p>
      </div>
      <div className="black-container">
        <div className="oddiel-first">
          <h2>{data.all} €</h2>
          <h5>1 liter 50% domácej pálenky</h5>
        </div>
        <div className="oddiel">
          <div className="oddiel__clenenie">
            <div className="circle">
              <img src="/fajka.svg" alt="" />
            </div>
            <p>{data.price_service} € - Cena za službu</p>
          </div>
          <div className="oddiel__clenenie">
            <div className="circle">
              <img src="/fajka.svg" alt="" />
            </div>
            <p>{data.tax} € - Spotrebná daň</p>
          </div>
          <div className="oddiel__clenenie">
            <div className="circle">
              <img src="/fajka.svg" alt="" />
            </div>
            <p>Cena platná od {data.price_valid_from}</p>
          </div>
          <div className="oddiel__clenenie">
            <div className="circle">
              <img src="/fajka.svg" alt="" />
            </div>
            <p>V cene nutné náklady</p>
          </div>
        </div>
      </div>
      <a href="php/cennik.html" className="link-arrow">
        Komplet info o cenníku
      </a>
    </section>
  );
};

export default PriceListSection;
