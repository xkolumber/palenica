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
          <Skeleton count={1} width={100} />
        </div>
      </div>

      <section className="sekcia">
        <div className="flexible_width">
          <div className="logo__section__cennik">
            <Skeleton count={1} width={300} height={40} />
          </div>
          <div className="w-full">
            <Skeleton count={5} />
          </div>
        </div>
      </section>
    </>
  );
};

export default loading;
