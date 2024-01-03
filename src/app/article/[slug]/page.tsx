import { Article } from "@/app/lib/interface_article";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import AllArticles from "@/components/AllArticles";
import AlmostEnd from "@/components/AlmostEnd";
import Navbar from "@/components/Navbar";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const dynamicTitle = async (slug: string) => {
  const query = `*[_type == "article" && slug.current == "${slug}"][0].title`;
  const data = await client.fetch(query);
  return data;
};

const dynamicImageUrl = async (slug: string) => {
  const query = `*[_type == "article" && slug.current ==  "${slug}"][0]`;
  const data = await client.fetch(query);
  const src = urlFor(data.photo).url();
  return src;
};
const dynamicDescription = async (slug: string) => {
  const query = `*[_type == "article" && slug.current ==  "${slug}"][0].content[0].children[0].text`;
  const data = await client.fetch(query);
  const stringData = String(data);
  return stringData.substring(0, Math.min(stringData.length, 80));
};

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await dynamicTitle(params.slug);
  const imageUrl = await dynamicImageUrl(params.slug);
  const dynamicText = await dynamicDescription(params.slug);

  return {
    title: title,
    description: dynamicText,
    keywords: ["pálenica Spisšká Belá", `${title}`, "článok"],
    openGraph: {
      title: title,
      description: dynamicText,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
  };
};

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
        <div className="addition__add">
          <Navbar />
        </div>

        <div className="cesta">
          <Link href={`/`}>Domov</Link>
          <p className="cesta_sipka">&gt;</p>
          <Link href={`/advices_ideas`}>Rady a nápady</Link>
          <p className="cesta_sipka">&gt;</p>
          <p> {data.title}</p>
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
              height={340}
            />

            <div className="cierny_container_zbytok">
              <PortableText value={data.content} />
            </div>
          </div>
        </div>
        <h2 className="ine_napady">Iné nápady</h2>
        <AllArticles data={allData} />
      </section>

      <AlmostEnd />
    </>
  );
};

export default Page;
