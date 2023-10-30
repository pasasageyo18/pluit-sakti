"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  activeTab,
  setActiveTab,
  ...props
}: {
  className: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6 ", className)}
      {...props}
    >
      <Link
        href="/ongoing"
        className={`text-md font-light text-slate-200 transition-colors hover:text-red-600 ${
          activeTab === "Sedang Tayang" ? "text-red-600" : ""
        }`}
        onClick={() => setActiveTab("Sedang Tayang")}
      >
        Sedang Tayang
      </Link>
      <Link
        href="/popular"
        className={`text-md font-light text-slate-200 transition-colors hover:text-red-600 ${
          activeTab === "Populer" ? "text-red-600" : ""
        }`}
        onClick={() => setActiveTab("Populer")}
      >
        Populer
      </Link>
      <Link
        href="/upcoming"
        className={`text-md font-light text-slate-200 transition-colors hover:text-red-600 ${
          activeTab === "Mendatang" ? "text-red-600" : ""
        }`}
        onClick={() => setActiveTab("Mendatang")}
      >
        Mendatang
      </Link>
    </nav>
  );
}
