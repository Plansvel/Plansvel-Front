/* eslint-disable import/extensions */

"use client";

import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { DestinationCard } from "./DestinationCard";
import { Button } from "./ui";

import type SwiperType from "swiper";

// Import Swiper styles
import "swiper/css";

export function PopularDestinationListing() {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);

  return (
    <section className="my-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          <span className="text-primary">Destinos</span> <br /> Populares
        </h2>
        <div className="flex items-center gap-1">
          <Button
            size="icon"
            leftIcon={FaArrowLeft}
            circular
            onClick={(e) => {
              e.preventDefault();
              swiper?.slidePrev();
            }}
          />
          <Button
            size="icon"
            leftIcon={FaArrowRight}
            circular
            onClick={(e) => {
              e.preventDefault();
              swiper?.slideNext();
            }}
          />
        </div>
      </div>

      <Swiper
        className="mt-5"
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={20}
        onSwiper={(swp) => setSwiper(swp)}
      >
        <SwiperSlide>
          <DestinationCard />
        </SwiperSlide>
        <SwiperSlide>
          <DestinationCard />
        </SwiperSlide>
        <SwiperSlide>
          <DestinationCard />
        </SwiperSlide>
        <SwiperSlide>
          <DestinationCard />
        </SwiperSlide>
        <SwiperSlide>
          <DestinationCard />
        </SwiperSlide>
        <SwiperSlide>
          <DestinationCard />
        </SwiperSlide>
        <SwiperSlide>
          <DestinationCard />
        </SwiperSlide>
        <SwiperSlide>
          <DestinationCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
