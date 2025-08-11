import React from 'react';
import Image from 'next/image';

const MotDuConsul = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 py-8 lg:py-12">
            
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-6">
                Mot du Consul Honoraire
              </h1>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg">
                  <span className="font-semibold">Chers Compatriotes,</span>
                </p>
                
                <p className="text-sm sm:text-base">
                  Bienvenus sur le site Internet du Consulat Honoraire du Bénin à Abidjan. 
                  Cet air de révélation du peuple béninois au monde entier marque une révolution 
                  Economique, Politique, Culturelle, Sociale, Technologique ... impulsée par le Chef de l&pos;Etat, 
                  le Président de la République du Bénin, Son Excellence Monsieur Patrice TALON, que j&pos;ai 
                  l&pos;immense honneur de représenter auprès de la Communauté Béninoise de Côte d&pos;Ivoire.
                </p>
                
                <p className="text-sm sm:text-base">
                  Travaillons Ensemble à faire de cette Communauté, un havre de 
                  paix, à Economie prospère et compétitive, de rayonnement culturel et de bien être social,
                </p>
                
                <p className="text-sm sm:text-base font-semibold">
                  Je vous remercie.
                </p>
              </div>
            </div>
            
            {/* Right Image Section */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
              <div className="relative">
                {/* Consul Photo */}
              <Image src="/images/all-img/consulat.png" 
              alt='consul'
               width={200} 
               height={200} 
               className='w-full' />
                
                {/* Decorative elements */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Optional Footer or Additional Content Section */}
     
    </div>
  );
};

export default MotDuConsul;