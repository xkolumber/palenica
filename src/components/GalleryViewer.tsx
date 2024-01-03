"use client";
import { Photo } from "@/app/lib/interface_gallery";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";

interface Props {
  photos: Photo[];
  handleClose: () => void;
}

const GalleryViewer = ({ photos, handleClose }: Props) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const clickedCloseButton = () => {
    handleClose();
  };

  return (
    <div className="wrapperContainer">
      <div className="uvod_pasik">
        <div className="uvod_pasik_left">
          <div className="uvod_pasik_circle">
            {" "}
            <img src="/logo.png" alt="" />
          </div>
          <div className="uvod_pasik_meno_datum">
            <div className="uvod_pasik_meno">Marek Olekšák</div>
            <div className="uvod_pasik_datum">12.12.2023</div>
          </div>
        </div>
        <div className="uvod_pasik_right">
          <div className="srdce"></div>
          <button className="btn btn--primary">Stiahnuť</button>
        </div>
      </div>
      <div className="photo-dialog-container">
        <div className="photo-container">
          <Image
            src={urlFor(photos[currentPhotoIndex].image.asset._ref).url()}
            alt="Additional photo"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="prev" onClick={prevPhoto}>
          &lt;
        </div>
        <div className="next" onClick={nextPhoto}>
          &gt;
        </div>
      </div>
      <div className="koniec_pasik">
        {photos[currentPhotoIndex].description}
      </div>
      <span className="close" onClick={clickedCloseButton}>
        x
      </span>
    </div>
  );
};

export default GalleryViewer;
