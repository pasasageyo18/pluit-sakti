import { movieList } from "@/constants/movieData";
import Image from "next/image";
import Link from "next/link";
import { genre } from "../constants/movieData";

export default function Home() {
  return (
    <>
      <div className="w-full bg-hero bg-no-repeat bg-cover bg-center p-16 mb-16">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <p className="text-sm text-slate-200">ADVENTURE</p>
                <p className="text-sm text-slate-200">•</p>
                <p className="text-sm text-slate-200">ACTION</p>
                <p className="text-sm text-slate-200">•</p>
                <p className="text-sm text-slate-200">HISTORY</p>
              </div>
              <div className="flex">
                <p className="text-slate-200 text-6xl max-lg:text-5xl font-bold">
                  Indiana Jones and The Dial Of Destiny
                </p>
              </div>
              <div className="flex">
                <p className="text-slate-200 border border-white rounded-2xl px-3 py-1">
                  16+
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                src="/assets/icons/star.png"
                alt="star"
                width={20}
                height={20}
              />
              <p className="font-medium text-slate-200 text-sm">9.0</p>
              <p className="font-light text-slate-200 text-sm">2023 | 2j 35m</p>
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full">
            <p className="font-light text-slate-200 text-justify">
              Menemukan dirinya berada di era baru, dan mendekati masa pensiun,
              Indy bergulat dengan dunia yang tampaknya sudah melampaui
              batasnya. Namun saat tentakel kejahatan yang sangat familiar
              kembali dalam wujud rival lamanya, Indy harus mengenakan topinya
              dan mengambil cambuknya sekali lagi untuk memastikan artefak kuno
              dan kuat tidak jatuh ke tangan yang salah.
            </p>
          </div>
          <div className="w-1/2 max-lg:w-full max-lg:flex-col flex gap-2">
            <p className="text-sm text-slate-400 font-light">Dibintangi :</p>
            <p className="font-medium text-slate-200">
              Winona Ryder, David Harbour, Millie Bobby Brown
            </p>
          </div>
          <div className="flex">
            <Link
              href={"/detail"}
              className="px-6 py-4 bg-red-600 rounded-lg flex gap-3"
            >
              <Image
                src="/assets/icons/eye.png"
                alt="eye"
                width={24}
                height={24}
              />
              <p className="text-md font-light text-white">Lihat Film</p>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-16">
        <div className="flex justify-between">
          <p className="text-4xl max-lg:text-2xl font-bold text-white max-md:text-base">
            Sedang Tayang
          </p>
          <div className="flex">
            <Link
              href={"/genre"}
              className="px-6 py-4 bg-red-600 rounded-lg flex gap-3"
            >
              <p className="text-md font-light text-white max-md:text-xs">
                Lebih Banyak
              </p>
              <Image
                src="/assets/icons/chevron-right.png"
                alt="eye"
                width={28}
                height={28}
                className="max-md:hidden"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-8 max-lg:gap-8 max-lg:grid-cols-2 max-xl:grid-cols-4">
          {movieList.map((movie, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="relative h-[370px] max-sm:h-[230px]">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md hover:scale-105 transition-all hover:cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold text-xl max-md:text-base">
                  {movie.title}
                </p>
                <div className="flex gap-3">
                  <p className="text-white font-light text-sm max-md:text-xs">
                    {movie.year}
                  </p>
                  <p className="text-white font-light text-sm max-md:text-xs">
                    |
                  </p>
                  <p className="text-white font-light text-sm max-md:text-xs">
                    {movie.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 p-16">
        <div className="flex justify-between">
          <p className="text-4xl max-lg:text-2xl font-bold text-white max-md:text-base">
            Terpopuler
          </p>
          <div className="flex">
            <Link
              href={"/genre"}
              className="px-6 py-4 bg-red-600 rounded-lg flex gap-3"
            >
              <p className="text-md font-light text-white max-md:text-xs">
                Lebih Banyak
              </p>
              <Image
                src="/assets/icons/chevron-right.png"
                alt="eye"
                width={28}
                height={28}
                className="max-md:hidden"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-8 max-lg:gap-8 max-lg:grid-cols-2 max-xl:grid-cols-4">
          {movieList.map((movie, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="relative h-[350px] max-sm:h-[230px]">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md hover:scale-105 transition-all hover:cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold text-xl max-md:text-base">
                  {movie.title}
                </p>
                <div className="flex gap-3">
                  <p className="text-white font-light text-sm max-md:text-xs">
                    {movie.year}
                  </p>
                  <p className="text-white font-light text-sm max-md:text-xs">
                    |
                  </p>
                  <p className="text-white font-light text-sm max-md:text-xs">
                    {movie.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 p-16">
        <div className="flex justify-between">
          <p className="text-4xl max-lg:text-2xl font-bold text-white max-md:text-base">
            Mendatang
          </p>
          <div className="flex">
            <Link
              href={"/genre"}
              className="px-6 py-4 bg-red-600 rounded-lg flex gap-3"
            >
              <p className="text-md font-light text-white max-md:text-xs">
                Lebih Banyak
              </p>
              <Image
                src="/assets/icons/chevron-right.png"
                alt="eye"
                width={28}
                height={28}
                className="max-md:hidden"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-8 max-lg:gap-8 max-lg:grid-cols-2 max-xl:grid-cols-4">
          {movieList.map((movie, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="relative h-[350px] max-sm:h-[230px]">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md hover:scale-105 transition-all hover:cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold text-xl max-md:text-base">
                  {movie.title}
                </p>
                <div className="flex gap-3">
                  <p className="text-white font-light text-sm max-md:text-xs">
                    {movie.year}
                  </p>
                  <p className="text-white font-light text-sm max-md:text-xs">
                    |
                  </p>
                  <p className="text-white font-light text-sm max-md:text-xs">
                    {movie.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 p-16 mb-20">
        <div className="flex">
          <p className="text-4xl max-lg:text-2xl font-bold text-white max-md:text-base">
            Genre Tersedia
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {genre.map((type, index) => (
            <Link href={"/genre"} key={index}>
              <p className="border px-4 py-2 border-slate-600 text-white rounded-2xl hover:bg-red-600 hover:cursor-pointer transition-all text-base max-md:text-sm">
                {type}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
