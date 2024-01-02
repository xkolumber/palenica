"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Referencies = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      className="mySwiper"
    >
      <SwiperSlide key={1}>
        <p>Hruškovica bola vynikajúca. Ďakujem Marekovi za pomoc.</p>
        <div className="referencie_box">
          <img src="/marian_halcin.jpg" alt="foto" />
          <div className="meno_povolanie">
            <b>Marián Halčin</b>
            <p>Kuchár</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide key={2}>
        <p>Marhuľovica bola podľa mojich predstáv. Odporúčam.</p>
        <div className="referencie_box">
          <img src="/martin.jpg" alt="foto" />
          <div className="meno_povolanie">
            <b>Martin Kovalčík</b>
            <p>Živnostník</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide key={3}>
        <p>Oceňujem prístup a odbornosť. Skvelá spolupráca.</p>
        <div className="referencie_box">
          <img src="/lubos.jpg" alt="foto" />
          <div className="meno_povolanie">
            <b>Ľuboš Kolumber</b>
            <p>Živnostník</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Referencies;
