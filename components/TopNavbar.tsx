"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MainNav } from "./NavbarMenuComp";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useDownloader from "react-use-downloader";

function TopNavbar() {
  const [activeTab, setActiveTab] = useState("");

  const { download } = useDownloader();

  const fileUrl = "/apk/PSA.apk";
  const filename = "PSA.apk";

  return (
    <div>
      <div className="flex h-16 items-center justify-between px-8 py-16">
        <div className="flex max-lg:justify-between max-lg:w-full">
          <div className="w-56 h-12 relative">
            <Link href={"/"} onClick={() => setActiveTab("")}>
              <Image
                src="/assets/logo/logo-red.png"
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
          <MainNav
            className="mx-6 max-lg:hidden"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="hidden max-lg:flex max-lg:gap-4">
            <div
              className="bg-red-600 p-2 rounded-md cursor-pointer h-[42px] w-[42px]"
              onClick={() => download(fileUrl, filename)}
            >
              <Image
                src="/icons/icons-download.png"
                alt="download"
                height={24}
                width={24}
              ></Image>
            </div>
            <div>
              <Sheet>
                <SheetTrigger className="border border-white/50 p-2 rounded-md">
                  <Menu color="white" />
                </SheetTrigger>
                <SheetContent side={"top"} className="bg-slate-600">
                  <div className="flex flex-col gap-10 mt-6 text-center">
                    <Link
                      href="/ongoing"
                      className="text-md font-light text-slate-200 transition-colors hover:text-red-600"
                    >
                      Sedang Tayang
                    </Link>
                    <Link
                      href="/popular"
                      className="text-md font-light text-slate-200 transition-colors hover:text-red-600"
                    >
                      Populer
                    </Link>
                    <Link
                      href="/upcoming"
                      className="text-md font-light text-slate-200 transition-colors hover:text-red-600"
                    >
                      Mendatang
                    </Link>
                    <Link
                      href="/search"
                      className="text-md font-light text-slate-200 transition-colors hover:text-red-600"
                    >
                      Pencarian
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        <div className="w-60 max-lg:hidden border-b border-b-slate-500 flex px-1 py-3 gap-3">
          <Link
            href={"/search"}
            className="flex gap-3 w-full"
            onClick={() => setActiveTab("")}
          >
            <Image
              src="/assets/icons/search.png"
              alt="search"
              width={20}
              height={20}
            />
            <p className="text-slate-500 text-sm">Cari Film...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
