import React from 'react';
import GalerieMarquee from '@/components/home/galerie/index';


function SectionGalerie() {
    return (
        <section className="bg-white">
            <h3 className="text-[#EF2E39] font-bold text-3xl mb-12 text-center">
                Galerie
            </h3>
            <div className="max-w-6xl w-full mx-auto">
                <GalerieMarquee/>
            </div>
        </section>
    );
}

export default SectionGalerie;