"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { genre, movieList } from "@/constants/movieData";
import Image from "next/image";

function GenreList() {
  const [specGenre, setSpecGenre] = useState("Action");

  const listSpecMovies = movieList.filter((movie) =>
    movie.genre.includes(specGenre)
  );

  return (
    <div className="flex flex-col gap-14 p-16 my-20">
      <div className="flex gap-2">
        <p className="text-4xl max-lg:text-3xl font-bold text-white max-md:text-2xl">
          Genre:
        </p>
        <Select defaultValue="Action" onValueChange={setSpecGenre}>
          <SelectTrigger className="w-fit border-none bg-foreground text-4xl max-lg:text-3xl font-bold text-white max-md:text-2xl p-0 flex gap-4 focus:border-none">
            <SelectValue placeholder="Genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Genre</SelectLabel>
              {genre.map((item, index) => (
                <SelectItem value={item} key={index}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-6 gap-10 max-lg:gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-xl:grid-cols-4">
        {listSpecMovies.map((movie, index) => (
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
    </div>
  );
}

export default GenreList;
