"use client";

import Image from "next/image";
import React from "react";

export default function ConsularBrochure() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Colonne gauche - Image + Mission */}
          <div className="flex flex-col gap-6">
            {/* Image principale */}
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow">
              <Image
                src="/images/all-img/drapeau4.jpg"
                alt="Vue aérienne d'Abidjan"
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>

            {/* Bloc Mission */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-red-500 mb-4">Notre Mission</h2>
              <p className="text-base text-gray-700 mb-3 leading-relaxed">
                Le Consulat Honoraire du Bénin à Abidjan a démarré ses activités le 01 décembre 2020.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                La juridiction du Consulat Honoraire à Abidjan couvre toute l&pos;étendue du territoire ivoirien. Le Consulat Honoraire est chargé d&pos;administrer et protéger tous les ressortissants béninois vivant en Côte d&pos;Ivoire, dans le respect de la légalité et de l&pos;ordre public local. Il est, plus généralement, le lien entre le pays d&apos;origine et le pays d&pos;accueil.
              </p>
            </div>
          </div>

          {/* Colonne droite - Cartes services */}
          <div className="flex flex-col gap-6">
            {/* Carte 1 */}
            <div className="bg-yellow-100 p-6 rounded-xl shadow-sm min-h-[9rem]">
              <h3 className="text-lg font-bold text-red-600 mb-3">
                Fonction d&pos;état civil
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Le Consulat Honoraire délivre des actes d&pos;état civil, des documents de voyage à ses ressortissants ainsi que des visas diplomatiques.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="bg-orange-100 p-6 rounded-xl shadow-sm min-h-[9rem]">
              <h3 className="text-lg font-bold text-orange-600 mb-3">
                Protection consulaire
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Le Consulat Honoraire peut aussi porter assistance à ses ressortissants en cas de difficultés avec les autorités locales dans les limites admises par le droit international.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-yellow-200 p-6 rounded-xl shadow-sm min-h-[9rem]">
              <h3 className="text-lg font-bold text-red-500 mb-3">Coopération</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Le Consulat Honoraire est habilité à favoriser le développement de relations commerciales, économiques, culturelles et scientifiques entre les deux États.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
