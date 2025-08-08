import React from 'react';

const ExactServicesPage = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Titre principal */}
        <h1 className="text-3xl font-bold text-black mb-6">Services</h1>
        
        {/* Section Services - Colonne unique */}
        <div className="space-y-0">
          {/* Service 1 */}
          <div className="py-4">
            <h2 className="text-xl font-semibold text-black mb-2">Titre de voyage</h2>
            <p className="text-gray-700">
              Le Service des Titres de voy.<br />
              traite les commandes d&pos;établissement des passeports et les demandes d&pos;obtention des liaisons passer.
            </p>
          </div>
          
          {/* Séparateur */}
          <div className="border-t border-gray-300 my-3"></div>
          
          {/* Service 2 */}
          <div className="py-4">
            <h2 className="text-xl font-semibold text-black mb-2">Etat Civil</h2>
            <p className="text-gray-700">
              Le Service de l&pos;Etat civil gêné<br />
              demandes de pièces d&pos;état civil tels que les actes de naissance, les actes de mariage
            </p>
          </div>
          
          {/* Séparateur */}
          <div className="border-t border-gray-300 my-3"></div>
          
          {/* Service 3 */}
          <div className="py-4">
            <h2 className="text-xl font-semibold text-black mb-2">Opportunités touristiques</h2>
            <p className="text-gray-700">
              Le Service des opportunités<br />
              histiques et de la promotion des affaires est chargé de la promotion culturelle et des opportunités d&pos;investissement au Berlin.
            </p>
          </div>
          
          {/* Séparateur double */}
          <div className="border-t border-gray-300 my-3"></div>
          <div className="border-t border-gray-300 my-3"></div>
          
          {/* Section Actualités */}
          <div className="py-4">
            <h2 className="text-xl font-semibold text-black mb-4">Actualités</h2>
            
            {/* Actualité 1 */}
            <div className="flex items-start gap-3 mb-5">
              <span className="bg-gray-200 text-black px-2 py-1 text-sm font-medium">29 Déc 2024</span>
              <p className="text-gray-700">
                Enrôlements des passeports biométriques béninois à Abidjan du 14 au 29 mars 2024.
              </p>
            </div>
            
            {/* Séparateur léger */}
            <div className="border-t border-gray-200 my-3"></div>
            
            {/* Actualité 2 */}
            <div className="flex items-start gap-3 mb-5">
              <span className="bg-gray-200 text-black px-2 py-1 text-sm font-medium">20 Déc 2024</span>
              <div>
                <p className="text-gray-700 font-medium">1920 × 509</p>
                <p className="text-gray-700">40 BOURSES D&pos;ÉTUDES À SAISIR</p>
              </div>
            </div>
            
            {/* Séparateur léger */}
            <div className="border-t border-gray-200 my-3"></div>
            
            {/* Actualité 3 */}
            <div className="flex items-start gap-3 mb-5">
              <span className="bg-gray-200 text-black px-2 py-1 text-sm font-medium">29 Déc 2024</span>
              <p className="text-gray-700">
                Reception par le Consul du Titulaire AVAKOUDJO Josué
              </p>
            </div>
            
            {/* Séparateur double */}
            <div className="border-t border-gray-300 my-3"></div>
            <div className="border-t border-gray-300 my-3"></div>
            
            {/* Outil Captur */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Outil Captur</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-700">Capture d&pos;écran</span>
                <span className="text-gray-700">Enregistrement</span>
                <span className="text-gray-700">captures d&pos;écran</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExactServicesPage;