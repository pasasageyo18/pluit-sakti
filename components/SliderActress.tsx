"use client";
import { actress } from "@/constants/movieData";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination, Navigation]);

let mySwiper: any;

function SliderActress() {
  return (
    <div className="flex flex-col gap-6 p-16">
      <div className="flex justify-between">
        <p className="text-4xl max-lg:text-2xl font-bold text-white max-md:text-xl">
          Dibintangi Oleh
        </p>
        <div className="flex gap-3">
          <div
            id="prevButton"
            className="px-6 py-4 bg-red-600 rounded-lg flex gap-3 hover:cursor-pointer"
            onClick={() => mySwiper.slidePrev()}
          >
            <Image
              src="/assets/icons/chevron-left-thin.png"
              alt="eye"
              width={28}
              height={28}
            />
          </div>
          <div
            id="nextButton"
            className="px-6 py-4 bg-red-600 rounded-lg flex gap-3 hover:cursor-pointer"
            onClick={() => mySwiper.slideNext()}
          >
            <Image
              src="/assets/icons/chevron-right-thin.png"
              alt="eye"
              width={28}
              height={28}
            />
          </div>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => (mySwiper = swiper)}
        pagination={{
          clickable: true,
        }}
        className="w-full mySwiper"
        direction="horizontal"
        spaceBetween={10}
        breakpoints={{
          // For screen sizes >= 640px
          640: {
            slidesPerView: 2,
          },
          // For screen sizes >= 768px
          768: {
            slidesPerView: 2,
          },
          // For screen sizes >= 1024px
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 6,
          },
          // Add more breakpoints as needed
        }}
      >
        {actress.map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-2 bg-[#0f172a] rounded-lg">
              <div className="relative h-[350px] max-sm:h-[280px] w-full">
                <Image
                  src={"/assets/films/actress.png"}
                  alt="actress"
                  fill
                  style={{ objectFit: "cover" }}
                  className=" rounded-t-lg hover:scale-105 transition-all hover:cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <p className="text-white font-semibold text-lg">
                  Milly Bobby Brown
                </p>
                <p className="text-white font-light text-lg">Jane Hopper</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderActress;
