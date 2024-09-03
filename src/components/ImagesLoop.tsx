"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const ImagesLoop = () => {
  const images = ["/loop/1.jpg", "/loop/2.jpg", "/loop/3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setScale(1);
      setTimeout(() => setScale(1.05), 100);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          className="bg_image_wrapper"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "opacity 1s ease-in, transform 0.5s ease-in-out",
            transform: `scale(${index === currentImageIndex ? scale : 1})`,
            transformOrigin: "center center",
          }}
        >
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            className="h-full w-full xl:min-h-screen object-cover object-[60%]"
            width={1920}
            height={1080}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ALfq/5jO/5/R/7Tk/wDh//+rxO5Wb5qEo8cAAAUUaWVXPEITLDwA/s8UzJZUwLoAAAAASUVORK5CYII="
          />
        </div>
      ))}
    </>
  );
};

export default ImagesLoop;
