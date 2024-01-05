import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Poďakovanie",
};

const page = () => {
  return (
    <div>
      <div className="cerveny_container">
        <div className="addition__add">
          <Navbar />
        </div>
        <div className="cesta">
          <Link href={`/`}>Domov</Link>
          <p className="cesta_sipka">&gt;</p>
          <p className="p">Poďakovanie</p>
        </div>
      </div>

      <section className="sekcia__main">
        <div className="logo__section">
          <h2 className="mt-80">Odoslané</h2>
          <p className="mb-80">
            Ďakujeme za Vašu správu. Behom najbližších hodín Vás budeme
            kontaktovať
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
