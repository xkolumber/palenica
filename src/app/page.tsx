import AllArticles from "@/components/AllArticles";
import AlmostEnd from "@/components/AlmostEnd";
import GalleryHomePage from "@/components/GalleryHomePage";
import HomePageIntro from "@/components/HomePageIntro";
import PriceListSection from "@/components/PriceListSection";
import { Actuality } from "./lib/interface_actuality";
import { Article } from "./lib/interface_article";
import { Gallery } from "./lib/interface_gallery";
import { PriceList } from "./lib/interface_price_list";
import { client } from "./lib/sanity";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pálenica Spišská Belá",
  description:
    "V našom liehovare ponúkame destiláciu Vášho kvasu vo veľkosti od 100l s možnosťou poskytnutia upravenej vody na riedenie destilátu.",
  keywords: ["pálenica Spisšká Belá", "pálenica", "Spisšká Belá", "destilát"],
  openGraph: {
    title: "Pálenia Spišská Belá",
    description:
      "V našom liehovare ponúkame destiláciu Vášho kvasu vo veľkosti od 100l",
    images: [
      {
        url: "/skuska_new.jpg",
        alt: "Pálenica",
      },
    ],
  },
};

async function getData() {
  const query = `*[_type == "actuality"]`;
  const data = await client.fetch(query);
  return data;
}

async function getAllData() {
  const query = `*[_type == "article"][0..5]`;
  const data = await client.fetch(query);
  return data;
}

async function getPriceList() {
  const query = `*[_type == "price_list"][0]`;
  const data = await client.fetch(query);
  return data;
}

async function getGallery() {
  const query = `*[_type == "gallery"][0..5]
  | order(_createdAt desc)`;
  const data = await client.fetch(query);
  return data;
}

async function getPdf() {
  const query = `*[_type == "price_list"][0].pdf.asset->url
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = (await getData()) as Actuality[];
  if (!data) return null;

  const allData = (await getAllData()) as Article[];

  const price_list = (await getPriceList()) as PriceList;

  const gallery = (await getGallery()) as Gallery[];

  const pdf = await getPdf();

  return (
    <main>
      <HomePageIntro data={data} pdf={pdf} />
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

      <PriceListSection data={price_list} />

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
        <Link
          href={"/advices_ideas"}
          className="link-arrow -mt-16 sm:-mt-10 cursor-pointer z-20 relative"
        >
          {" "}
          Všetky rady a nápady
        </Link>
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
        <GalleryHomePage gallery={gallery} />
      </section>
      <AlmostEnd />
    </main>
  );
}
