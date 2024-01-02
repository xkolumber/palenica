import AlmostEnd from "@/components/AlmostEnd";
import Navbar from "@/components/Navbar";
import React from "react";
import { client } from "../lib/sanity";
import { PriceList } from "../lib/interface_price_list";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { urlFor } from "../lib/sanityImageUrl";
import Image from "next/image";
import { Gallery } from "../lib/interface_gallery";

async function getGallery() {
  const query = `*[_type == "gallery"]`;
  const data = await client.fetch(query);
  return data;
}

const page = async () => {
  const gallery = (await getGallery()) as Gallery[];
  return (
    <div>
      <div className="cerveny_container">
        <div className="addition__add">
          <Navbar />
        </div>
        <div className="cesta">
          <Link href={`/`}>Domov</Link>
          <p className="cesta_sipka">&gt;</p>
          <p className="p">Galéria</p>
        </div>
      </div>
      <section className="sekcia__main">
        <div className="logo__section">
          <img src="/logo.png" alt="logo" />
          <h2>Galéria</h2>
          <p>
            Zdokumentované momenty nám pripomínajú dôležitosť a krásu pálenia
            ako remesla aj umeleckého vyjadrenia. Táto galéria je nielen miestom
            pre estetické požitky, ale aj pre vzdelávanie a objavovanie.
          </p>
        </div>
        <div className="gallery">
          {gallery.map((one_gallery, index) => (
            <>
              <div className="gallery_obdlznik" key={index}>
                <Image
                  src={urlFor(one_gallery.title_photo).url()}
                  alt="Additional photo"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <p>{one_gallery.title}</p>
              </div>
            </>
          ))}
        </div>
      </section>

      <AlmostEnd />
    </div>
  );
};

export default page;
