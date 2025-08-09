"use client";

import React from "react";
import { Phone, Clock, MapPin } from "lucide-react";

const TropicalHero = () => {
  return (
    <div className="relative w-full h-[80vh] sm:h-[120vh] md:h-[100vh] lg:h-[90vh] rounded-b-2xl mt-23 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/all-img/hero-image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-8 lg:p-12">
        <div className="flex-1" />

        {/* Devise et Carte */}
   <div className="w-full flex flex-col  items-center justify-center md:flex-row md:justify-between gap-8 md:gap-12 mb-16">

          {/* Devise */}
          <div className="flex items-center gap-4 flex-wrap justify-center pl-3 text-white font-bold text-3xl md:text-5xl text-center">
            <span>Fraternité</span>
            <span>Justice</span>
            <span className="">Travail</span>
          </div>

          {/* Carte d'adresse */}
          <div className="bg-gradient-to-r from-transparent to-black/80 p-4 rounded-xl w-[380px] md:w-[420px] sm:shadow-lg shadow-xl space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <span className="text-white font-medium text-sm md:text-base">
                +225 25 22 27 22 40 69 68
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <span className="text-white font-medium text-sm md:text-base">
                LUN - VEN : 08H00 - 17H00
                <br className="md:hidden" />
                <span className="hidden md:inline"> | </span>SAM, DIM : FERMÉ
              </span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white mt-0.5" />
              <span className="text-white text-sm md:text-base font-medium">
                II PLATEAU BD LATRILLE
                <br />
                CARREFOUR LAS-PALMAS, RÉS NKAYO
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TropicalHero;
