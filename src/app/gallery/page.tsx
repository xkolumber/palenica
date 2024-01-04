import AlmostEnd from "@/components/AlmostEnd";
import GalleryHomePage from "@/components/GalleryHomePage";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Gallery } from "../lib/interface_gallery";
import { client } from "../lib/sanity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galéria",
  description:
    "Zdokumentované momenty nám pripomínajú dôležitosť a krásu pálenia ako remesla aj umeleckého vyjadrenia. Táto galéria je nielen miestom pre estetické požitky, ale aj pre vzdelávanie a objavovanie.",
  keywords: ["pálenica Spisšká Belá", "pálenica", "Spisšká Belá", "destilát"],
  openGraph: {
    title: "Galéria",
    description:
      "Zdokumentované momenty nám pripomínajú dôležitosť a krásu pálenia ako remesla aj umeleckého vyjadrenia. Táto galéria je nielen miestom pre estetické požitky, ale aj pre vzdelávanie a objavovanie.",
    images: [
      {
        url: "/skuska_new.jpg",
        alt: "Pálenica",
      },
    ],
  },
};

async function getGallery() {
  const query = `*[_type == "gallery"]
  | order(_createdAt desc)`;
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
        <GalleryHomePage gallery={gallery} />
      </section>

      <AlmostEnd />
    </div>
  );
};

export const revalidate = 60;

export default page;
