import React from 'react';
import {Marquee} from "@/components/magicui/marquee";
import ImageCard from './image-card';


// Première liste - Nature
const firstRow = [
    {
        imageSrc: "https://placehold.co/600x400/png",
        imageAlt: "Paysage montagneux",
        title: "Montagnes majestueuses",
        description: "Vue panoramique sur les sommets enneigés"
    },
    {
        imageSrc: "https://placehold.co/600x400/png",
        imageAlt: "Forêt dense",
        title: "Forêt tropicale",
        description: "Lumière filtrant à travers les arbres"
    },
    {
        imageSrc: "https://placehold.co/600x400/png",
        imageAlt: "Lac de montagne",
        title: "Lac paisible",
        description: "Reflets parfaits sur l'eau cristalline"
    },
    {
        imageSrc: "https://placehold.co/600x400/png",
        imageAlt: "Coucher de soleil",
        title: "Horizon doré",
        description: "Coucher de soleil spectaculaire sur la vallée"
    },
    {
        imageSrc: "https://placehold.co/600x400/png",
        imageAlt: "Cascade",
        title: "Cascade sauvage",
        description: "Eau dévalant les rochers moussus"
    }
];

// Deuxième liste - Architecture
const secondRow = [
    {
        imageSrc: "https://placehold.co/600x400/png",
        imageAlt: "Tour Eiffel",
        title: "Tour Eiffel",
        description: "Symbole iconique de Paris"
    },
    {
        imageSrc: "https://placehold.co/600x400/png",
        imageAlt: "Gratte-ciel modernes",
        title: "Skyline urbain",
        description: "Architecture contemporaine dans une métropole"
    },
    {
        imageSrc: "https://placehold.co/600x400/png",
        imageAlt: "Bâtiment historique",
        title: "Architecture coloniale",
        description: "Façade ornée d'un bâtiment d'époque"
    },
    {
        imageSrc: "https://placehold.co/600x400/png",
        imageAlt: "Pont suspendu",
        title: "Pont Golden Gate",
        description: "Chef-d'œuvre d'ingénierie au-dessus de l'eau"
    },
    {
        imageSrc: "https://placehold.co/600x400/png",
        imageAlt: "Temple ancien",
        title: "Temple ancestral",
        description: "Structure religieuse séculaire"
    }
];

function GalerieMarquee() {
    return (
        <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
            <Marquee pauseOnHover vertical className="[--duration:20s]">
                {firstRow.map((image) => (
                    <ImageCard key={image.title} {...image} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ImageCard key={review.title} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ImageCard key={review.title} {...review} />
                ))}
            </Marquee>
            <Marquee pauseOnHover vertical className="[--duration:20s] [--gap:2rem]">
                {secondRow.map((review) => (
                    <ImageCard key={review.title} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
    );
}

export default GalerieMarquee;