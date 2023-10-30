import Image from "next/image";
import React from "react";
import { Separator } from "./separator";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#0f172a] p-16">
      <div className="grid grid-cols-4 gap-48 max-md:grid-cols-2 max-xl:gap-24 max-lg:gap-16 max-md:gap-12 ">
        <div className="flex flex-col gap-4">
          <p className="text-white font-light">FAQ</p>
          <p className="text-white font-light">Relasi Investor</p>
          <p className="text-white font-light">Cara Menonton</p>
          <p className="text-white font-light">Informasi Perusahaan</p>
          <p className="text-white font-light">Hanya di Pluit Sakti</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white font-light">Pusat Bantuan</p>
          <p className="text-white font-light">Pekerjaan</p>
          <p className="text-white font-light">Aturan Penggunaan</p>
          <p className="text-white font-light">Kontak Kami</p>
        </div>
        <div className="flex flex-col gap-4  ">
          <p className="text-white font-light">Akun</p>
          <p className="text-white font-light">Privasi</p>
          <p className="text-white font-light">Tes Kecepatan</p>
          <p className="text-white font-light">Pusat Media</p>
          <p className="text-white font-light">Pengaturan Kuki</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white font-semibold">Dapatkan Aplikasi</p>
          <div className="gap-2 flex flex-col">
            <Image
              src="/assets/images/appStore.png"
              alt="appstore"
              width={120}
              height={40}
            />
            <Image
              src="/assets/images/googlePlay.png"
              alt="appstore"
              width={120}
              height={40}
            />
          </div>
          <div className="pt-4 flex flex-col gap-2">
            <p className="text-white font-light">Ikuti Kami</p>
            <div className="flex gap-4">
              <Image
                src="/assets/icons/youtube.png"
                alt="youtube"
                width={20}
                height={20}
              />
              <Image
                src="/assets/icons/facebook.png"
                alt="youtube"
                width={20}
                height={20}
              />
              <Image
                src="/assets/icons/twitter.png"
                alt="youtube"
                width={20}
                height={20}
              />
              <Image
                src="/assets/icons/instagram.png"
                alt="youtube"
                width={20}
                height={20}
              />
              <Image
                src="/assets/icons/linkedin.png"
                alt="youtube"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-12 mb-6" />
      <div className="flex justify-between">
        <div className="flex gap-4 max-md:justify-between">
          <div className="w-56 h-12 relative">
            <Link href={"/"}>
              <Image
                src="/assets/logo/logo-white.png"
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
          <p className="text-white">@ 2023. All rights reserved.</p>
        </div>
        <div className="flex gap-4 max-md:hidden">
          <p className="text-white">Aturan</p>
          <p className="text-white">Privasi</p>
          <p className="text-white">Kontak</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
