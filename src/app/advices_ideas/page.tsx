import AllArticlesWithoutSwiper from "@/components/AllArticlesWithoutSwiper";
import AlmostEnd from "@/components/AlmostEnd";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Article } from "../lib/interface_article";
import { client } from "../lib/sanity";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rady a nápady",
  description:
    "Prinášame vám rôzne tipy, aby naša spolupráca bola ešte kvalitnejšia. Nechajte sa inšpirovať našimi skúsenosťami.",
  keywords: ["pálenica Spisšká Belá", "pálenica", "Spisšká Belá", "destilát"],
  openGraph: {
    title: "Rady a nápady",
    description:
      "Prinášame vám rôzne tipy, aby naša spolupráca bola ešte kvalitnejšia. Nechajte sa inšpirovať našimi skúsenosťami.",
    images: [
      {
        url: "/skuska_new.jpg",
        alt: "Pálenica",
      },
    ],
  },
};

async function getAllData() {
  const query = `*[_type == "article"]`;
  const data = await client.fetch(query);
  return data;
}

const Page = async () => {
  const allData = (await getAllData()) as Article[];
  return (
    <>
      <div className="cerveny_container">
        <div className="addition__add">
          <Navbar />
        </div>

        <div className="cesta">
          <Link href={`/`}>Domov</Link>
          <p className="cesta_sipka">&gt;</p>
          <p>Rady a nápady</p>
        </div>
      </div>

      <section className="sekcia">
        <div className="flexible_width">
          <div className="logo__section__rady">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={200}
              priority
            />
            <h2>Rady a nápady</h2>
            <p>
              Prinášame vám rôzne tipy, aby naša spolupráca bola ešte
              kvalitnejšia. Nechajte sa inšpirovať našimi skúsenosťami.
            </p>
          </div>
          <AllArticlesWithoutSwiper data={allData} />
        </div>
      </section>

      <AlmostEnd />
    </>
  );
};

export default Page;
