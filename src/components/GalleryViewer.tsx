"use client";
import { Photo } from "@/app/lib/interface_gallery";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  photos: Photo[];
  handleClose: () => void;
  created_at: string;
}

const GalleryViewer = ({ photos, handleClose, created_at }: Props) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
    setIsLoaded(false);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
    setIsLoaded(false);
  };

  const clickedCloseButton = () => {
    handleClose();
  };
  const date = new Date(created_at);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <div className="wrapperContainer">
      <div className="uvod_pasik">
        <div className="uvod_pasik_left">
          <div className="uvod_pasik_circle">
            {" "}
            <img src="/logo.png" alt="" />
          </div>
          <div className="flex flex-col">
            <div className="uvod_pasik_meno">Marek Olekšák</div>
            <div className="text-slate-400 text-lg">{formattedDate}</div>
          </div>
        </div>
        <div className="uvod_pasik_right">
          <div className="srdce"></div>
          <button className="btn btn--primary stiahnut">Stiahnuť</button>
        </div>
      </div>
      <div className="photo-dialog-container">
        <div className="photo-container">
          {!isLoaded && <Skeleton className="skeleton_picture" />}
          <div className={`${isLoaded ? "opacity-100" : "opacity-0"} h-full`}>
            <Image
              src={urlFor(photos[currentPhotoIndex].image.asset._ref).url()}
              alt="Additional photo"
              width={0}
              height={0}
              sizes="100vw"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
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
