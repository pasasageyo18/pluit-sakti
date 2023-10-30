import { movieAll } from "@/constants/movieData";
import Image from "next/image";
import React from "react";

function MovieList() {
  return (
    <div className="grid grid-cols-6 gap-10 max-lg:gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-xl:grid-cols-4">
      {movieAll.map((movie, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <div className="relative h-[370px] max-sm:h-[280px]">
            <Image
              src={movie.poster}
              alt={movie.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md hover:scale-105 transition-all hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold text-xl">{movie.title}</p>
            <div className="flex gap-3">
              <p className="text-white font-light text-sm">{movie.year}</p>
              <p className="text-white font-light text-sm">|</p>
              <p className="text-white font-light text-sm">{movie.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
