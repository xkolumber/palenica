import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
              <img src="/logo.png" alt="logo" />
              <div className="w-full md:w-1/4 mb-6 mt-4">
                <Skeleton count={1} height={40} />
              </div>
            </div>
            <div className="w-full">
              <Skeleton count={10} />
            </div>
          </div>
        </section>
      </div>
      {/* 
       

       
      

      <section className="sekcia">
        <div className="flexible_width">
          <div className="w-full mb-6">
            <Skeleton count={1} height={40} />
          </div>
          <div className="w-full">
            <Skeleton count={5} />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default loading;
