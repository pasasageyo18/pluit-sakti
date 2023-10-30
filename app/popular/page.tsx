import MovieList from "@/components/MovieList";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col gap-14 p-16 my-20">
      <div className="flex justify-between">
        <p className="text-4xl max-lg:text-3xl font-bold text-white max-md:text-2xl">
          Populer
        </p>
      </div>
      <MovieList />
      <div className="flex">
        <Link
          href={"/genre"}
          className="px-6 py-4 bg-red-600 rounded-lg flex gap-3"
        >
          <p className="text-md font-light text-white max-md:text-sm">
            Lebih Banyak
          </p>
          <Image
            src="/assets/icons/refresh.png"
            alt="eye"
            width={28}
            height={28}
          />
        </Link>
      </div>
    </div>
  );
}

export default Page;
