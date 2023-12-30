import { Article } from "@/app/lib/interface_article";
import { urlFor } from "@/app/lib/sanityImageUrl";
import AllArticles from "@/components/AllArticles";
import AlmostEnd from "@/components/AlmostEnd";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getData } from "./page";

export const Page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Article;

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
              <h5>2 min</h5>
            </div>
            <div className="publikacia">
              <img src="/calendar.svg" alt="kniha" />
              <p>publikované</p>
              <h5>20.06.2023</h5>
            </div>
          </div>
          {/* <h2 style="color: white" id="articleTitle">Ako na marhule</h2> */}
        </div>

        <div className="cierny_container">
          <div className="cierny_container_spolu">
            <Image
              src={urlFor(data.mapa).url()}
              alt="Mapa okolia Záhoria"
              width={1000}
              height={1000}
              className="full_width_image_mapa"
            />

            <img src="../css/images/ako_na_marhule.jpg" alt="obrazok marhule" />

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
