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

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => {
        if (value && value.asset && value.asset._ref) {
          return (
            <Image
              src={urlFor(value).url()}
              alt="image"
              width={1920}
              height={1080}
              quality={100}
              className="article_img_one_photo"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGP48OHDf2TMQLoAABc0PPGQ/86sAAAAAElFTkSuQmCC"
            />
          );
        }
        return null;
      },
    },
  };

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
              <Image
                src="/book.svg"
                alt="logo"
                width={200}
                height={200}
                className="w-12 h-12"
                priority
              />
              <p>čas čítania</p>
              <h5>{data.time_reading} min</h5>
            </div>
            <div className="publikacia">
              <Image
                src="/calendar.svg"
                alt="kniha"
                width={200}
                height={200}
                className="w-12 h-12"
                priority
              />
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
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGP48OHDf2TMQLoAABc0PPGQ/86sAAAAAElFTkSuQmCC"
            />

            <div className="cierny_container_zbytok">
              <PortableText
                value={data.content}
                components={PortableTextComponent}
              />
              <br></br>
              <div className="autori">
                {data.authors &&
                  data.authors.map((author, index) => (
                    <p key={index}>{author}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <h2 className="ine_napady">Iné nápady</h2>
        <AllArticles data={allData} />
        <Link
          href={"/advices_ideas"}
          className="link-arrow -mt-16 sm:-mt-10 cursor-pointer z-20 relative"
        >
          {" "}
          Všetky rady a nápady
        </Link>
      </section>

      <AlmostEnd />
    </>
  );
};
export const dynamic = "force-dynamic";

export default Page;
