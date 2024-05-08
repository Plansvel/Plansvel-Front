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
    <section className="container my-10 md:px-0">
      <div className="flex items-center flex-col justify-center md:justify-between md:flex-row">
        <h2 className="text-2xl text-center font-bold md:text-xl md:text-left">
          <span className="text-primary">Destinos</span> <br /> Populares
        </h2>
        <div className="flex items-center justify-between gap-1 w-full md:w-auto md:justify-normal">
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
        slidesPerView={1}
        spaceBetween={20}
        onSwiper={(swp) => setSwiper(swp)}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
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
