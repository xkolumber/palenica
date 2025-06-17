import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ClipLoader } from "react-spinners";

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
          <Skeleton count={1} width={100} baseColor="#fefefe" />
        </div>
      </div>

      <section className="sekcia_skeleton min-h-screen">
        <div className="flexible_width mt-8">
          <ClipLoader size={30} color={"#ffffff"} loading={true} />
        </div>
      </section>
    </>
  );
};

export default loading;
