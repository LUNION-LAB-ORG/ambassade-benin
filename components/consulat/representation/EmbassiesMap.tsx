"use client";

import Image from "next/image";
import React from "react";

const EmbassiesMap = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Carte des Ambassades</h1>

      <div className="w-full flex justify-center">
        <div className="relative w-[90vw] max-w-[500px] aspect-[1202/514] rounded-lg overflow-hidden shado">
          {/* Carte */}
          <Image
            src="/images/all-img/Frame 1000009636.png"
            alt="Carte des Ambassades du Bénin"
            fill
            className="object-cover"
            priority
          />

          {/* Étiquettes des continents */}
          <div className="absolute top-[40%] left-[43%] text-xs text-white bg-red-600 shadow-xl px-2 rounded">
            Afrique
          </div>
          <div className="absolute top-[15%] left-[45%] text-xs text-black bg-white shadow-xl px-2 py-1 rounded">
            Europe
          </div>
          <div className="absolute top-[20%] left-[75%] text-xs text-black bg-white shadow-xl px-2 py-1 rounded">
            Asie
          </div>
          <div className="absolute top-[20%] left-[15%] text-xs text-black bg-white shadow-xl px-2 py-1 rounded">
            Amérique
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbassiesMap;
