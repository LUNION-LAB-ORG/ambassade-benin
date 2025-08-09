"use client";

import SectionTitle from "@/components/section-title";
import ActionRapideCard, {ActionRapideType} from "@/components/home/action-rapide-card";

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
                <SectionTitle title="Actions rapides" className="text-center mb-10"/>

                {/* Grille des cartes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {actions.map((action, index) => (
                        <ActionRapideCard
                            key={index}
                            action={action}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActionsRapides;
