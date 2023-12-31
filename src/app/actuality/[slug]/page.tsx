import { Article } from "@/app/lib/interface_article";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import AlmostEnd from "@/components/AlmostEnd";
import Footer from "@/components/Footer";
import GroupPictures from "@/components/GroupPictures";
import Navbar from "@/components/Navbar";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { Actuality } from "@/app/lib/interface_actuality";

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

  return (
    <>
      <div className="cerveny_container">
        <Navbar />

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
          <PortableText value={data.content} />

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

      <Footer />
    </>
  );
};

export default Page;
