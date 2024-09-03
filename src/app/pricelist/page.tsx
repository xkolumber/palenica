import AlmostEnd from "@/components/AlmostEnd";
import Navbar from "@/components/Navbar";
import React from "react";
import { client } from "../lib/sanity";
import { PriceList } from "../lib/interface_price_list";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cenník",
  description:
    "Cena za výrobu destilátu z dodaného ovocného kvasu je stanovená vo výške...",
  keywords: [
    "cenník pálenica",
    "pálenica Spišská Belá",
    "pálenie destilátu pod Tatrami",
  ],
  openGraph: {
    title: "Cenník",
    description:
      "Cena za výrobu destilátu z dodaného ovocného kvasu je stanovená vo výške...",
    images: [
      {
        url: "/skuska_new.jpg",
        alt: "Pálenica",
      },
    ],
  },
};

async function getData() {
  const query = `*[_type == "price_list"][0]`;
  const data = await client.fetch(query);
  return data;
}

const page = async () => {
  const data = (await getData()) as PriceList;
  return (
    <div>
      <div className="cerveny_container">
        <div className="addition__add">
          <Navbar />
        </div>
        <div className="cesta">
          <Link href={`/`}>Domov</Link>
          <p className="cesta_sipka">&gt;</p>
          <p className="p">Cenník</p>
        </div>
      </div>

      <section className="sekcia">
        <div className="flexible_width">
          <div className="logo__section__cennik">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={200}
              priority
            />
            <h2>{data.title}</h2>
          </div>
          <PortableText value={data.content} />
        </div>
      </section>
      <AlmostEnd />
    </div>
  );
};

export default page;
