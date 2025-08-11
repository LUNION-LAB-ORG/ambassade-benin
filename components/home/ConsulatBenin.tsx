"use client";

import Image from "next/image";

const ConsulatBenin = () => {
  return (
    <section className="w-full bg-white rounded-t-[80px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Bloc gauche : Cartes */}
        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-1/2 justify-center items-center">
          {/* Carte - Patrice Talon */}
          <div className="relative bg-white border border-gray-200 rounded-xl shadow-md w-[260px] sm:w-[280px] h-[420px] hover:shadow-lg transition overflow-hidden">
            <Image
              src="/images/all-img/president_benin-image.png"
              alt="SEM Patrice TALON"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 border-4 border-yellow-600 py-4 rounded-md text-yellow-600 text-center min-h-[100px] flex flex-col justify-center  bg-opacity-90 backdrop-blur-sm">
              <h2 className="font-semibold text-base uppercase">
                SEM Patrice TALON
              </h2>
              <p className="text-sm mt-1">
                Président de la République du Bénin
              </p>
            </div>
          </div>

          {/* Carte - Ernest Darboux */}
          <div className="relative border border-gray-200 rounded-xl shadow-md w-[260px] sm:w-[280px] h-[420px] hover:shadow-lg transition overflow-hidden">
            <Image
              src="/images/all-img/consulat.png"
              alt="SEM Ernest DARBOUX"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 border-4 border-yellow-600 py-4 rounded-md text-yellow-600 text-center min-h-[100px] flex flex-col justify-center  bg-opacity-90 backdrop-blur-sm">
              <h2 className="font-semibold text-base uppercase">
                SEM Ernest DARBOUX
              </h2>
              <p className="text-sm mt-1">
                Consul Honoraire du Bénin à Abidjan
              </p>
            </div>
          </div>
        </div>

        {/* Bloc droit : texte */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-2">
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-semibold">
            Chers Compatriotes,
          </p>
          <div className="mt-4 pr-2">
            <p className="text-gray-800 text-justify text-base md:text-[18px] whitespace-pre-line">
              Bienvenus sur le site Internet du Consulat Honoraire du Bénin à
              Abidjan. <br />
              Cet air de révélation du peuple béninois au monde entier marque
              une révolution Économique, Politique, Culturelle, Sociale,
              Technologique… impulsée par le Chef de l’État, le Président de la
              République du Bénin, Son Excellence <br />
              Monsieur Patrice TALON, que j’ai l’immense honneur de représenter
              auprès de la Communauté Béninoise de Côte d’Ivoire. Travaillons
              Ensemble à faire de cette <br />
              Communauté, un havre de paix, à Économie prospère et compétitive,
              de rayonnement culturel et de bien-être <br />
              social,
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              Je vous remercie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsulatBenin;
