import Image from "next/image";
import { client } from "./lib/sanity";
import { Actuality } from "./lib/interface_actuality";
import HomePageIntro from "@/components/HomePageIntro";
import AllArticles from "@/components/AllArticles";
import { Article } from "./lib/interface_article";
import AlmostEnd from "@/components/AlmostEnd";

async function getData() {
  const query = `*[_type == "actuality"]`;
  const data = await client.fetch(query);
  return data;
}

async function getAllData() {
  const query = `*[_type == "article"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = (await getData()) as Actuality[];
  if (!data) return null;

  const allData = (await getAllData()) as Article[];
  return (
    <main>
      <HomePageIntro data={data} />
      <div className="strip" id="nase_sluzby_container">
        <div className="logo__section">
          <img src="/logo.png" alt="logo" />
          <h2>Naše služby</h2>
        </div>
      </div>
      <section className="sekcia__sluzby">
        <div className="sekcia__charakteristika">
          <div className="sekcia__oddiel">
            <h3 className="added__check">Destilácia kvasu od 100l</h3>
            <p>
              V našom liehovare ponúkame destiláciu Vášho kvasu vo veľkosti od
              100l s možnosťou poskytnutia upravenej vody na riedenie destilátu
              a samotné riedenie. Pestovateľ má možnosť doniesť vlastnú vodu na
              riedenie alkoholu (napr. Lucka, Drobček).
            </p>
          </div>
          <div className="sekcia__oddiel">
            <h3 className="added__check">Odborné poradenstvo</h3>
            <p>
              Destilácia je umenie, ktoré vyžaduje presnosť, znalosti a
              zručnosti. Nech už ste nadšený začiatočník alebo skúsený destilér,
              sme tu, aby sme Vám poskytli individuálny prístup a rady, ktoré
              zohľadňujú Vaše osobné preferencie a ciele.
            </p>
          </div>
        </div>
      </section>

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
            <h2>7.6€</h2>
            <h5>1 liter 50% domácej pálenky</h5>
          </div>
          <div className="oddiel">
            <div className="oddiel__clenenie">
              <div className="circle">
                <img src="/fajka.svg" alt="" />
              </div>
              <p>4.09€ - Cena za službu</p>
            </div>
            <div className="oddiel__clenenie">
              <div className="circle">
                <img src="/fajka.svg" alt="" />
              </div>
              <p>3.51€ - Spotrebná daň</p>
            </div>
            <div className="oddiel__clenenie">
              <div className="circle">
                <img src="/fajka.svg" alt="" />
              </div>
              <p>Cena platná od 01.04.2023</p>
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

      <section className="sekcia__main">
        <div className="logo__section">
          <img src="/logo.png" alt="logo" />
          <h2>Rady a nápady</h2>
          <p>
            Prinášame vám rôzne tipy, aby naša spolupráca bola ešte
            kvalitnejšia. Nechajte sa inšpirovať našimi skúsenosťami.
          </p>
        </div>
        <AllArticles data={allData} />
      </section>

      <section className="sekcia__main" id="gallery_container">
        <div className="logo__section">
          <img src="/logo.png" alt="logo" />
          <h2>Galéria</h2>
          <p>
            Zdokumentované momenty nám pripomínajú dôležitosť a krásu pálenia
            ako remesla aj umeleckého vyjadrenia. Táto galéria je nielen miestom
            pre estetické požitky, ale aj pre vzdelávanie a objavovanie.
          </p>
        </div>
        <div className="gallery">
          <div className="gallery_3">
            <div className="gallery_obdlznik" data-gallery-id="0">
              <img src="/hrozno.svg" alt="sipka" />
              <p>Tvorba kvasu</p>
            </div>
            <div className="gallery_obdlznik" data-gallery-id="1">
              <img src="/supka.svg" alt="sipka" />
              <p>Dôsledok zlého kvasu</p>
            </div>
            <div className="gallery_obdlznik" data-gallery-id="2">
              <img src="/chyby.svg" alt="sipka" />
              <p>Chyby pri spracovaní ovocia</p>
            </div>
          </div>
          <div className="gallery_3">
            <div className="gallery_obdlznik" data-gallery-id="5">
              <img src="/like.svg" alt="sipka" />
              <p>Naše etikety</p>
            </div>

            <div className="gallery_obdlznik" data-gallery-id="3">
              <img src="/pohar.svg" alt="sipka" />
              <p>Sútaž destilátov</p>
            </div>
            <div className="gallery_obdlznik" data-gallery-id="4">
              <img src="/upratovanie.svg" alt="sipka" />
              <p>Príprava na novú sezónu</p>
            </div>
          </div>
        </div>
      </section>
      <AlmostEnd />
    </main>
  );
}
