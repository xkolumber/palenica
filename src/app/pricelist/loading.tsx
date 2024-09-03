import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const loading = () => {
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
            <p className="p">Cenník</p>
          </div>
        </div>

        <section className="sekcia">
          <div className="flexible_width">
            <div className="logo__section__cennik">
              <Image
                src="/logo.png"
                alt="kniha"
                width={200}
                height={200}
                priority
              />
              <div className="w-full md:w-1/4 mb-6 mt-4">
                <Skeleton count={1} height={40} baseColor="#fefefe" />
              </div>
            </div>
            <div className="w-full">
              <Skeleton count={10} baseColor="#fefefe" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default loading;
