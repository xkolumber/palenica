"use client";

import React from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { client } from "@/app/lib/sanity";
import { Article } from "@/app/lib/interface_article";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface Props {
  data: Article[];
}

const AllArticles = ({ data }: Props) => {
  return (
    <div className="flexible_width">
      <div className="flexible_width">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="h-[470px] sm:h-[440px]"
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="cierny_obdlznik">
                  <Image
                    src={urlFor(item.photo).url()}
                    alt="Obrázok ovocia"
                    width={500}
                    height={350}
                    priority={true}
                  />
                  <h3>{item.title}</h3>
                  <div className="seda_07">
                    <PortableText value={item.content} />
                  </div>
                  <Link
                    href={`/article/${item.slug.current}`}
                    className="citat_viac"
                  >
                    {" "}
                    <h3>ČÍTAŤ VIAC</h3>{" "}
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default AllArticles;
