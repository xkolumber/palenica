import { Article } from "@/app/lib/interface_article";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
  const query = `*[_type == "actuality" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Article;

  return (
    <>
      <div className="titulna_foto intro_padding">
        {data.title}
        {/* <img
          src={urlFor(data.photo).url()}
          alt=""
          className="bg_image_wrapper"
        /> */}
        <div className="bg_image_dark_wrapper"></div>
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black"></h1>
        <div className="text_picture">
          <PortableText value={data.content} />
        </div>
      </div>
    </>
  );
};

export default Page;
