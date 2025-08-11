'use client';

import React from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {DynamicIcon, IconName} from 'lucide-react/dynamic';

function InfoCard({
                      title,
                      icon,
                      description,
                  }: {
    title: string;
    icon: IconName;
    description: React.ReactNode;
}) {
    return (
        <div className="border border-orange-500 rounded-2xl p-4 bg-white shadow-sm">
            <h3 className="text-orange-500 font-semibold mb-1 text-base md:text-lg">
                {title}
            </h3>
            <div className="text-sm text-gray-700 flex items-center gap-2">
                  <DynamicIcon
                      name={icon}
                      className="size-5"
                  /> {description}
            </div>
        </div>
    );
}

function ContactConsul() {
    return (
        <div className="rounded-xl bg-white shadow-lg flex flex-col lg:flex-row overflow-hidden max-w-7xl mx-auto">
            {/* Contenu gauche */}
            <div className="w-full lg:w-2/3 p-6 flex flex-col justify-between">
                <div className="grid gap-4 sm:grid-cols-2">
                    <InfoCard
                        title="Horaire"
                        icon={"clock"}
                        description={<>
                                Lun – Ven : 08H00 – 17H00 <br/>
                                Sam, Dim : Fermé
                        </>}
                    />
                    <InfoCard
                        title="Téléphone"
                        icon={"phone"}
                        description={"+225 07 68 67 44 44"}
                    />
                    <InfoCard
                        title="Adresse"
                        icon={"map-pin"}
                        description={"Abidjan, Côte d’Ivoire"}
                    />
                    <InfoCard
                        title="Email"
                        icon={"mail"}
                        description={"contact@consulat-ci.bj"}
                    />
                </div>

        <div className="mt-6">
          <Button className="w-full  rounded-2xl bg-primary hover:bg-primary-600 text-white text-sm px-6 py-3">
            Voir nos représentants du Consul en Côte d’Ivoire
          </Button>
        </div>
      </div>

            {/* Image à droite */}
            <div className="relative w-full lg:w-1/3 h-64 lg:h-auto min-h-[300px]">
                <Image
                    src="/images/all-img/contact-img1.png"
                    alt="Contact Consul"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                />
            </div>
        </div>
    );
}

export default ContactConsul;
