import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

import Image from "next/image";
import { ClipLoader } from "react-spinners";

const loading = () => {
  return (
    <>
      <div>
        <div className="cerveny_container ">
          <div className="addition__add">
            <Navbar />
          </div>
          <div className="cesta">
            <Link href={`/`}>Domov</Link>
            <p className="cesta_sipka">&gt;</p>
            <p className="p">Cenník</p>
          </div>
        </div>

        <section className="sekcia_skeleton min-h-screen">
          <div className="flexible_width">
            <div className="logo__section__cennik">
              <Image
                src="/logo.png"
                alt="kniha"
                width={200}
                height={200}
                priority
              />
              <h2>Cenník</h2>
            </div>
            <div className="mt-4">
              <ClipLoader size={30} color={"#ffffff"} loading={true} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default loading;
