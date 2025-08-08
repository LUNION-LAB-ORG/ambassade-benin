"use client";

import { ArrowRight, FileText, Shield, MapPin } from "lucide-react";

const services = [
  {
    icon: <FileText className="w-8 h-8 text-orange-500" />,
    title: "Titre de voyage",
    description:
      "Le Service des Titres de voyage traite les commandes d'établissement des passeports et les demandes d'obtention des laisser-passer...",
    color: "bg-pink-500",
  },
  {
    icon: <Shield className="w-8 h-8 text-orange-500" />,
    title: "État Civil",
    description:
      "Le Service de l'État civil gère les demandes de pièces d'état civil tels que les actes de naissance, les actes de mariage...",
    color: "bg-pink-500",
  },
  {
    icon: <MapPin className="w-8 h-8 text-orange-500" />,
    title: "Opportunités touristiques",
    description:
      "Le Service des opportunités touristiques et de la promotion des affaires est en charge de la promotion culturelle et des opportunités d'investissement au Bénin...",
    color: "bg-blue-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-red-500 mr-4">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col"
            >
              <div className="relative mb-6 text-center  pr-4">
                {service.icon}
                <div
                />
              </div>

              <h3 className="text-xl font-bold  text-orange-500 mb-3 text-start pr-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-start leading-relaxed pr-4 mb-12">
                {/* margin-bottom pour laisser la place au bouton */}
                {service.description}
              </p>

              {/* Conteneur bouton positionné en bas, taille bouton initiale */}
              <div className="absolute bottom-0 right-0  rounded-b-lg">
                <button className="bg-primary hover:bg-yellow-500 text-black px-4 py-2 rounded-br-lg flex items-center space-x-2 transition">
                  <ArrowRight className="w-6 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
