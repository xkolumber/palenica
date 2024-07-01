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
          <Link href={`/advices_ideas`}>Rady a nápady</Link>
          <p className="cesta_sipka">&gt;</p>
          <Skeleton count={1} width={100} baseColor="#fefefe" />
        </div>
      </div>

      <section className="sekcia">
        <div className="sekcia_1024">
          <div className="info_clanok">
            <div className="cas">
              <img src="/book.svg" alt="kniha" />
              <p>čas čítania</p>
              <Skeleton count={1} width={30} />
            </div>
            <div className="publikacia">
              <img src="/calendar.svg" alt="kniha" />
              <p>publikované</p>
              <Skeleton count={1} width={150} baseColor="#fefefe" />
            </div>
          </div>
          <div className="mb-6 w-full md:w-3/6">
            <Skeleton count={1} height={40} baseColor="#fefefe" />
          </div>
        </div>

        <div className="cierny_container w-full">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/6 rounded-lg">
              <Skeleton height={340} baseColor="#fefefe" />
            </div>

            <div className="w-full md:w-3/6">
              <Skeleton count={16} baseColor="#fefefe" />
            </div>
          </div>
          <Skeleton count={5} baseColor="#fefefe" />
        </div>
        <h2 className="ine_napady">Iné nápady</h2>
      </section>
    </>
  );
};

export default loading;
