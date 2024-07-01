import { Article } from "@/app/lib/interface_article";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/lib/sanityImageUrl";

interface Props {
  data: Article[];
}

const AllArticlesWithoutSwiper = ({ data }: Props) => {
  return (
    <div className="flexible_width">
      <div className="flexible_width grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div className="cierny_obdlznik" key={index}>
            <Image
              src={urlFor(item.photo).url()}
              alt="Obrázok ovocia"
              width={500}
              height={350}
              priority={true}
            />
            <h3 className="line-clamp-1">{item.title}</h3>
            <div className="seda_07">
              <PortableText value={item.content} />
            </div>
            <Link href={`/article/${item.slug.current}`} className="citat_viac">
              {" "}
              <h3>ČÍTAŤ VIAC</h3>{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllArticlesWithoutSwiper;
