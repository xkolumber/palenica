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

async function getAllData() {
  const query = `*[_type == "article"]`;
  const data = await client.fetch(query);
  return data;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Article;

  const allData = (await getAllData()) as Article[];

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
          <a href="" id="articleLink">
            {data.title}
          </a>
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

            <div className="cierny_container_zbytok">
              <PortableText value={data.content} />
            </div>
          </div>
        </div>
        <AllArticles data={allData} />
      </section>

      <AlmostEnd />
      <Footer />
    </>
  );
};

export default Page;
