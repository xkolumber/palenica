import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const loading = () => {
  return (
    <>
      <div className="cerveny_container">
        <div className="addition__add">
          <Navbar />
        </div>

        <div className="cesta">
          <Link href={`/`}>Domov</Link>
          <p className="cesta_sipka">&gt;</p>
          <p>Rady a nápady</p>
        </div>
      </div>

      <section className="sekcia">
        <div className="flexible_width">
          <div className="logo__section__rady">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={200}
              priority
            />
            <h2>Rady a nápady</h2>
            <p>
              Prinášame vám rôzne tipy, aby naša spolupráca bola ešte
              kvalitnejšia. Nechajte sa inšpirovať našimi skúsenosťami.
            </p>
          </div>

          <div className="md:hidden cierny_obdlznik w-full  ">
            <Skeleton height={214} baseColor="#fefefe" />
            <div className="mt-2 mb-4">
              <Skeleton height={40} count={1} baseColor="#fefefe" />
            </div>

            <Skeleton count={3} baseColor="#fefefe" />
            <Skeleton height={20} count={1} baseColor="#fefefe" />
          </div>

          <div className="md:grid grid-cols-1 hidden md:grid-cols-3 gap-8 w-full">
            {Array.from({ length: 9 }).map((_, idx) => (
              <div key={idx} className="cierny_obdlznik">
                <Skeleton height={214} baseColor="#fefefe" />
                <div className="mt-2 mb-4">
                  <Skeleton height={40} count={1} baseColor="#fefefe" />
                </div>
                <Skeleton count={3} baseColor="#fefefe" />
                <Skeleton height={20} count={1} baseColor="#fefefe" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default loading;
