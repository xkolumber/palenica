import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
            <img src="/logo.png" alt="logo" />
            <h2>Rady a nápady</h2>
            <p>
              Prinášame vám rôzne tipy, aby naša spolupráca bola ešte
              kvalitnejšia. Nechajte sa inšpirovať našimi skúsenosťami.
            </p>
          </div>

          <div className="md:hidden cierny_obdlznik w-full">
            <Skeleton height={214} />
            <div className="mt-2 mb-4">
              <Skeleton height={40} count={1} />
            </div>

            <Skeleton count={3} />
            <Skeleton height={20} count={1} />
          </div>

          <div className="hidden w-full md:flex flex-col md:flex-row gap-8">
            <div className="flex  w-full cierny_obdlznik md:w-1/3">
              <Skeleton height={214} />
              <div className="mt-2 mb-4">
                <Skeleton height={40} count={1} />
              </div>

              <Skeleton count={3} />
              <Skeleton height={20} count={1} />
            </div>
            <div className="flex  w-full cierny_obdlznik md:w-1/3">
              <Skeleton height={214} />
              <div className="mt-2 mb-4">
                <Skeleton height={40} count={1} />
              </div>

              <Skeleton count={3} />
              <Skeleton height={20} count={1} />
            </div>
            <div className="flex  w-full cierny_obdlznik md:w-1/3">
              <Skeleton height={214} />
              <div className="mt-2 mb-4">
                <Skeleton height={40} count={1} />
              </div>

              <Skeleton count={3} />
              <Skeleton height={20} count={1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default loading;
