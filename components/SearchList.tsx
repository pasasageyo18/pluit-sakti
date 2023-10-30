"use client";
import Image from "next/image";
import React, { useState } from "react";
import { movieList } from "@/constants/movieData";

function SearchList() {
  const [searchedMovie, setSearchedMovie] = useState("");

  const searched = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchedMovie.toLowerCase())
  );
  console.log(searched);

  return (
    <div className="flex flex-col gap-14 p-16 my-20">
      <div className="w-full border-b border-b-slate-500 flex px-1 py-3 gap-3">
        <Image
          src="/assets/icons/search.png"
          alt="search"
          width={20}
          height={20}
        />
        <input
          type="text"
          placeholder="Cari Film..."
          className="bg-transparent text-sm text-white w-full"
          value={searchedMovie}
          onChange={(e) => setSearchedMovie(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-6 gap-8 max-lg:gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-xl:grid-cols-4">
        {searched.map((movie, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <div className="relative h-[350px] max-sm:h-[280px]">
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
    </div>
  );
}

export default SearchList;
