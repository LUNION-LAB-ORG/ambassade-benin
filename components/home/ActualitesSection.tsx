"use client";

import Image from "next/image";

const actualites = [
  {
    id: 1,
    date: "29 Déc 2024",
    title:
      "Enrôlements des passeports biométriques béninois à Abidjan du 14 au 29 mars 2024.",
     image: "/images/all-img/actu-1.png", // ajoute une image dans le dossier public/images
  },
  {
    id: 2,
    date: "29 Déc 2024",
    title: "40 BOURSES D'ÉTUDES À SAISIR",
     image: "/images/all-img/actu-2.png",
  },
  {
    id: 3,
    date: "29 Déc 2024",
    title: "Réception par le Consul du Bureau Titulaire AVAKOUDJO Josué",
    image: "/images/all-img/actu-3.png",
  },
];

export default function ActualitesSection() {
  return (
    <section className="w-full py-14 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-red-500">Actualités</h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Image de couverture */}
              <div className="relative w-full h-80">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                 
                />
              </div>

              {/* Contenu texte */}
              <div className="p-6">
                <div className="text-orange-500 text-sm font-medium mb-2">
                  {item.date}
                </div>
                <h3 className="text-md font-semibold text-gray-800 leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
