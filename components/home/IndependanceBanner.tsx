"use client";

import Image from "next/image";

const IndependanceBanner = () => {
  return (
    <section className="w-full bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Drapeau */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <div className="h-48 sm:h-60 md:h-72 w-auto flex items-center">
            <Image
              src="/images/all-img/drapeau5.jpg"
              //drapeau5 ok
              alt="Drapeau du Bénin"
              width={60}
              height={320}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>

        {/* Texte centre */}
        <div className="flex-1 flex flex-col items-center md:items-center text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-800 leading-snug">
            <span className="text-red-600">Joyeuse Fête de</span>
            <br />
            <span className="text-green-900">L&apos;Indépendance au</span>
            <br />
            <span className="text-green-900">Peuple Béninois</span>
          </h2>
          <div className="bg-green-900 text-white text-sm md:text-base mt-4 px-4 py-1 rounded-full">
            01 Août 1960 - 01 Août 2025
          </div>
        </div>

        {/* Cercle anniversaire */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
            {/* Cercle vide jaune */}
            <svg viewBox="0 0 100 100" className="w-full h-full rotate-[135deg]">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#FDD644"
                strokeWidth="12"
                fill="none"
                strokeDasharray="188.5"
                strokeDashoffset="0"
              />
            </svg>

            {/* Texte au centre */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-red-600 font-bold text-5xl sm:text-6xl md:text-7xl">
                65
              </span>
            </div>

            {/* Texte "ANS" */}
            <span
              className="absolute text-primary-500 font-semibold"
              style={{
                top: "79%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="text-2xl lg:text-4xl">ANS</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndependanceBanner;
