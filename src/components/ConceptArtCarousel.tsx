"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ConceptArtCarousel() {
  const images = ["naptha.jpg", "wolves.jpeg", "mailman.jpg", "rune_golem.jpg"];

  return (
    <div className="w-full max-w-md px-4 overflow-hidden">
      <Swiper spaceBetween={20} slidesPerView={"auto"} loop>
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={`/concepts/${img}`}
              alt={`Concept ${idx + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-sm text-muted-foreground italic text-center mt-4">
        Original campaign concept art that sparked the game idea
      </p>
    </div>
  );
}
