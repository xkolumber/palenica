import AlmostEnd from "@/components/AlmostEnd";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Referencies from "@/components/Referencies";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Formulár",
  description:
    "Dohodnime si termín pálenia, prineste kvas, o zbytok sa postaráme my.",
  keywords: ["pálenica Spisšká Belá", "pálenica", "Spisšká Belá", "destilát"],
  openGraph: {
    title: "Pálenia Spišská Belá",
    description:
      "Dohodnime si termín pálenia, prineste kvas, o zbytok sa postaráme my.",
    images: [
      {
        url: "/skuska_new.jpg",
        alt: "Pálenica",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <div>
        <div className="cerveny_container">
          <div className="addition__add">
            <Navbar />
          </div>
          <div className="cesta">
            <Link href={`/`}>Domov</Link>
            <p className="cesta_sipka">&gt;</p>
            <p className="p">Objednávkový formulár</p>
          </div>
        </div>

        <section className="sekcia">
          <div className="flexible_width">
            <div className="container_sekcia">
              <div className="container_formular_left">
                <div className="flex flex-row justify-between">
                  <img src="/hviezdy_lava.svg" alt="hviezdy_lava" />
                  <img src="/hviezdy_prava.svg" alt="hviezdy_prava" />
                </div>
                <div className="space_between">
                  <div className="container_formular_spolu">
                    <h2 className="text-center">Začnite Vašu cestu s nami.</h2>
                    <p className="pc">
                      Dohodnime si termín pálenia, prineste kvas, o zbytok sa
                      postaráme my.
                    </p>
                    <p className="mobile">
                      Dohodnime si termín pálenia (formulár nižšie), prineste
                      kvas, o zbytok sa postaráme my.
                    </p>
                  </div>
                  <div className="spolu">
                    <Referencies />
                  </div>
                </div>
              </div>

              <div className="container_formular_right">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <AlmostEnd />
      </div>
    </>
  );
};

export default page;
