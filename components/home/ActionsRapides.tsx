"use client";

import SectionTitle from "@/components/section-title";
import ActionRapideCard, {ActionRapideType} from "@/components/home/action-rapide-card";
import Image from "next/image";

const actions: ActionRapideType[] = [
    {
        titre: "LE CONSULAT HONORAIRE DU BÉNIN À ABIDJAN",
        image: "/images/all-img/actu-1.png",
        alt: "Consulat du Bénin à Abidjan",
    },
    {
        titre: "DEMANDE D’UN DOCUMENT ADMINISTRATIF",
        image: "/images/all-img/actu-1.png",
        alt: "Demande de document administratif",
    },
    {
        titre: "LE RAVIP",
        image: "/images/all-img/actu-1.png",
        alt: "Le RAVIP",
    },
];

const ActionsRapides = () => {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Titre */}
                <SectionTitle title="Actions rapides" className="text-center mb-10 text-red-500" />

                {/* Grille des cartes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {actions.map((action, index) => (
                        <div
                            key={index}
                            className="relative w-full max-w-sm aspect-[4/3] overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-lg transition-transform hover:scale-[1.02]"
                        >
                            {/* Image de fond */}
                            <Image
                                src={action.image}
                                alt={action.alt}
                                fill
                                className="object-cover rounded-2xl"
                                sizes="(max-width: 768px) 100vw,
                                       (max-width: 1200px) 50vw,
                                       33vw"
                                priority={index === 0} // optimise chargement première image
                            />

                            {/* Bande titre */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-80 backdrop-blur-md border rounded-md px-4 py-2 flex items-center justify-center h-16">
                                <p className="text-center font-semibold text-sm sm:text-base text-green-800 leading-snug">
                                    {action.titre}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActionsRapides;
