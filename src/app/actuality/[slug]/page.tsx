import { Actuality } from "@/app/lib/interface_actuality";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import AlmostEnd from "@/components/AlmostEnd";
import GroupPictures from "@/components/GroupPictures";
import Navbar from "@/components/Navbar";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const dynamicTitle = async (slug: string) => {
  const query = `*[_type == "actuality" && slug.current == "${slug}"][0].title`;
  const data = await client.fetch(query);
  return data;
};

const dynamicImageUrl = async (slug: string) => {
  const query = `*[_type == "actuality" && slug.current ==  "${slug}"][0]`;
  const data = await client.fetch(query);
  if (data) {
    return "/skuska_new.jpg";
  } else {
    return urlFor(data.one_photo).url();
  }
};
const dynamicDescription = async (slug: string) => {
  const query = `*[_type == "actuality" && slug.current ==  "${slug}"][0].content[0].children[0].text`;
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
  const query = `*[_type == "actuality" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

async function getPhotos(slug: string) {
  const query = `*[_type == "actuality" && slug.current =="${slug}"]{
    group_images[]{
         asset->{
      _id,
      url
    }
     }
}`;
  const data = await client.fetch(query);
  return data;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Actuality;
  const data2 = await getPhotos(params.slug);

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          className="article_img_one_photo"
        />
      ),
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
          <p>{data.title}</p>
        </div>
      </div>

      <section className="sekcia">
        <div className="flexible_width">
          <div className="logo__section__cennik">
            {/* <img src="/logo.png" alt="logo" /> */}
            <h2>{data.title}</h2>
          </div>
          <PortableText
            value={data.content}
            components={PortableTextComponent}
          />

          {data2[0].group_images && (
            <GroupPictures data={data2[0]} parameter="group_images" />
          )}

          {data.one_photo && (
            <Image
              src={urlFor(data.one_photo).url()}
              alt="Additional photo"
              width={0}
              height={0}
              sizes="100vw"
              quality={100}
              className="article_img_one_photo"
            />
          )}
        </div>
      </section>

      <AlmostEnd />
    </>
  );
};

export const dynamic = "force-dynamic";

export default Page;
