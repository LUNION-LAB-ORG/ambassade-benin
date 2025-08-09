import React from 'react';
import Image from "next/image";

export type ActionRapideType = {
    titre: string;
    image: string;
    alt: string;
}

function ActionRapideCard({action, index}: { action: ActionRapideType, index: number }) {
    return (
        <div
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
            <div
                className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md rounded-md px-4 py-2 flex items-center justify-center h-16">
                <p className="text-center font-semibold text-sm sm:text-base text-[#034833] leading-snug">
                    {action.titre}
                </p>
            </div>
        </div>
    );
}

export default ActionRapideCard;