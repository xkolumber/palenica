"use client";

import { Gallery } from "@/app/lib/interface_gallery";
import { urlFor } from "@/app/lib/sanityImageUrl";
import React, { useState } from "react";
import Image from "next/image";
import GalleryViewer from "./GalleryViewer";

interface Props {
  gallery: Gallery[];
}

const GalleryHomePage = ({ gallery }: Props) => {
  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null);

  const galleryClicked = (id: string) => {
    const selected = gallery.find((item) => item._id === id);
    setSelectedGallery(selected || null);
    console.log(selectedGallery);
  };
  const handleClose = () => {
    setSelectedGallery(null);
  };
  return (
    <div className="gallery">
      {gallery.map((one_gallery) => (
        <>
          <div
            className="gallery_obdlznik"
            key={one_gallery._id}
            onClick={() => galleryClicked(one_gallery._id)}
          >
            <Image
              src={urlFor(one_gallery.title_photo).url()}
              alt="Additional photo"
              width={0}
              height={0}
              sizes="100vw"
            />
            <p>{one_gallery.title}</p>
          </div>
        </>
      ))}
      {selectedGallery && (
        <GalleryViewer
          photos={selectedGallery.photos}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default GalleryHomePage;
