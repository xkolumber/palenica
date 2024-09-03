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
  };
  const handleClose = () => {
    setSelectedGallery(null);
  };
  return (
    <div className="gallery">
      {gallery.map((one_gallery, index) => (
        <div key={index}>
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
        </div>
      ))}
      {selectedGallery && (
        <GalleryViewer
          photos={selectedGallery.photos}
          handleClose={handleClose}
          created_at={selectedGallery._createdAt}
        />
      )}
    </div>
  );
};

export default GalleryHomePage;
