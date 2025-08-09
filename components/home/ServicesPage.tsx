import React from 'react';
import SectionTitle from "@/components/section-title";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionTitle title="Actions rapides"/>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Services Section */}
          <div className="space-y-6">
            {/* Service Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Titre de voyage</h2>
              <p className="text-gray-600">
                Le Service des Titres de voy. traite les commandes d&pos;établissement des passeports et les demandes d&pos;obtention des liaisons passer.
              </p>
            </div>
            
            {/* Service Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Etat Civil</h2>
              <p className="text-gray-600">
                Le Service de l&pos;Etat civil gère les demandes de pièces d&pos;état civil tels que les actes de naissance, les actes de mariage.
              </p>
            </div>
            
            {/* Service Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Opportunités touristiques</h2>
              <p className="text-gray-600">
                Le Service des opportunités touristiques et de la promotion des affaires est chargé de la promotion culturelle et des opportunités d&pos;investissement au Berlin.
              </p>
            </div>
          </div>
          
          {/* News/Announcements Section */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Actualités</h2>
              
              {/* News Item 1 */}
              <div className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                    29 Déc 2024
                  </div>
                  <p className="text-gray-600">
                    Enrôlements des passeports biométriques béninois à Abidjan du 14 au 29 mars 2024.
                  </p>
                </div>
              </div>
              
              {/* News Item 2 */}
              <div className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                    20 Déc 2024
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium mb-1">1920 × 509</p>
                    <p className="text-gray-600">40 BOURSES D&pos;ÉTUDES À SAISIR</p>
                  </div>
                </div>
              </div>
              
              {/* News Item 3 */}
              <div className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                    29 Déc 2024
                  </div>
                  <p className="text-gray-600">
                    Reception par le Consul du Titulaire AVAKOUDJO Josué
                  </p>
                </div>
              </div>
              
              {/* Tool Section */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Outil Captur</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">Capture d&pos;écran</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">Enregistrement</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">captures d&pos;écran</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;