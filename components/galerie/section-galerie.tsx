import React from 'react';
import GalerieMarquee from "@/components/galerie/index";
import SectionTitle from "@/components/section-title";

function SectionGalerie() {
    return (
        <section className="bg-white">
            <SectionTitle
                title={"Galerie"}
                className="pb-12 text-center"
            />
            <div className="max-w-6xl w-full mx-auto">
                <GalerieMarquee/>
            </div>
        </section>
    );
}

export default SectionGalerie;