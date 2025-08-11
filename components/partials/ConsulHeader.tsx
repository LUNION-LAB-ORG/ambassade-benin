"use client";

import Image from 'next/image';
import React from 'react';

export default function ConsulHeader({ nom }: { nom: string }) {
  return (
    <div className="w-full  mt-28 px-6 ">
      {/* BANNIÈRE */}
      <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-50  sm:rounded-2xl shadow-md w-full h-auto py-6 sm:h-72 flex flex-col-reverse sm:flex-row items-center justify-between gap-y-4 rounded-md px-4 sm:px-10 max-w-7xl mx-auto">
        
        {/* Titre */}
        <h1 className="text-2xl sm:text-4xl font-bold text-green-800 text-center sm:text-left sm:flex-1">
          {nom}
        </h1>

        {/* Armoiries */}
        <div className="sm:flex-1 w-full  sm:w-auto flex sm:justify-end  justify-center">
          <Image
            src="/images/all-img/amoiriee.png"
            alt="Armoiries de la République du Bénin"
            width={250}
            height={80}
            className="object-contain w-[150px] sm:w-[250px] h-auto"
            priority
          />
        </div>

        {/* Bande tricolore collée en bas */}
        <div className="absolute bottom-0 left-0 w-full  sm:px-80">
          <div className="flex w-full h-2 rounded-b-2xl overflow-hidden">
            <div className="flex-1 bg-green-600"></div>
            <div className="flex-1 bg-yellow-400"></div>
            <div className="flex-1 bg-red-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
