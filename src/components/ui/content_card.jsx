"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CardDemo({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-auto max-w-7xl">
      {items.map((item, idx) => (
        <div key={idx} className="relative group">
          <div
            className="cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${item.src})` }} // Utilisation de styles inline pour l'image de fond
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover:bg-black opacity-60"></div>
            <div className="flex flex-col justify-end h-full p-4">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                {item.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
