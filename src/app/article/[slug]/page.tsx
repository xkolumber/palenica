import { Article } from "@/app/lib/interface_article";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import AllArticles from "@/components/AllArticles";
import AlmostEnd from "@/components/AlmostEnd";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "article" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Article;

  const date = new Date(data._createdAt);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;
  return (
    <>
      <div className="cerveny_container">
        <Navbar />

        <div className="cesta">
          <a href="../index.html">Domov</a>
          <p className="cesta_sipka">&gt;</p>
          <a href="rady_napady.html">Rady a nápady</a>
          <p className="cesta_sipka">&gt;</p>
          <a href="" id="articleLink"></a>
        </div>
      </div>

      <section className="sekcia">
        <div className="sekcia_1024">
          <div className="info_clanok">
            <div className="cas">
              <img src="/book.svg" alt="kniha" />
              <p>čas čítania</p>
              <h5>{data.time_reading} min</h5>
            </div>
            <div className="publikacia">
              <img src="/calendar.svg" alt="kniha" />
              <p>publikované</p>
              <h5>{formattedDate}</h5>
            </div>
          </div>
          <h2>{data.title}</h2>
        </div>

        <div className="cierny_container">
          <div className="cierny_container_spolu">
            <Image
              src={urlFor(data.photo).url()}
              alt="Obrázok ovocia"
              width={1000}
              height={1000}
            />

            {/* <img src="../css/images/ako_na_marhule.jpg" alt="obrazok marhule" /> */}

            <p className="cierny_container_zbytok">
              Medzi pravé pálenku patria pravé destiláty z kôstkového ovocia. Ak
              uvažujete o založení kvasu napríklad z MARHÚĽ, tu mate stručný a
              zaručený návod.
              <br />
              <br />
              Vhodné odrody marhúľ: Rakovského, Maďarská, Veľkopavlovická
              <br />
              <br />
              Častá a dôležitá otázka v tomto prípade je: „čo s kôstkami?“.
              Kôstkové tóny majú v každom druhu ovocia iný podnet. V pálenke zo
              žltého ovocia majú skôr rušivé tóny, no v slivovici a čerešňovici
              sa tradične vyžadujú. Kvas skladovaný na kôstkach podporuje tvorbu
              kyseliny kyanovodíkovej ale vzniká i aromaticky vyzretý komponent.
              Odkôstkovanie je nutné pri marhuliach a broskyniach. Kvasenie u
              kôstkového ovocia má bežnú teplotu 16 – 20 °C, ale pozor
              neprekročiť hodnotu teploty 27 °C.
              <br />
              <br />
              Príprava kvasu: Ovocie zbavíme nečistôt, najideálnejšie je
              odkôstkovať, plody roztlačíme (nepoškodiť kôstky), tým sa vylúči
              atmosférický vzduch. Je vhodné pridať enzým napr. Distizym FM na
              čo najlepšie skvapalnenie ovocia (marhule až 50ml na 100kg
              ovocia). Zvyšuje sa tak kvalita kvasenia a samozrejme aj kvalita
              destilátu. Kvas plníme do nádob 4/5 objemu (80%) naraz v priebehu
              jedného dňa. Je možné pridať kvasinky, ktoré nastupujú rýchlo a
              kvasenie je bezpečné a pod kontrolou. Pri teplote kvasenia 18-20°C
              sa môžu pridať kvasinky „Oenoferm Freddo 20-25g na 100kg ovocia.
              Takto pripravený kvas hermeticky uzavrieme do kvasnej nádoby, a na
              vrch umiestnime kvasnú zátku. Nádoby umiestnime do vzdušných
              miestností s teplotou 16 – 18 °C. Kvas z marhúľ kvasí 3 – 6
              týždňov.
              <br />
              <br />
            </p>
          </div>
        </div>
        <AllArticles />
      </section>

      <AlmostEnd />
      <Footer />

      {/* 
      <div className="titulna_foto intro_padding">
        <img
          src={urlFor(data.photo).url()}
          alt=""
          className="bg_image_wrapper"
        />
        <div className="bg_image_dark_wrapper"></div>
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black"></h1>
        <div className="text_picture">
          <PortableText value={data.content} />
        </div>
      </div> */}
    </>
  );
};

export default Page;
