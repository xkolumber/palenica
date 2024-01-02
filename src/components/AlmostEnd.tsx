import Link from "next/link";
import React from "react";

const AlmostEnd = () => {
  return (
    <section className="end-transition">
      <div className="together">
        <div className="together__oddiel first">
          <img src="/zaklad_png.png" alt="sipka" />
        </div>
        <div className="together__oddiel second">
          <h2>ZAREZERVUJTE SI PÁLENIE UŽ DNES</h2>
          <Link href={"/reservation"} className="btn btn--primary">
            Rezervácia
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AlmostEnd;
