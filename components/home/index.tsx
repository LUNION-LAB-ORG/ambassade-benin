import React from 'react';
import {Button} from "@/components/ui/button";
import Image from 'next/image';

function InfoCard({title, description}: { title: string, description: React.ReactNode }) {
    return (
        <div className="border border-primary rounded-2xl p-2.5">
            <h3 className="text-primary mb-1">
                {title}
            </h3>
            {description}
        </div>
    );
}

function ContactConsul() {
    return (
        <div className="rounded-xl bg-white grid grid-cols-1 lg:grid-cols-3 gap-4 shadow-lg">
            <div className="lg:col-span-2 p-5">
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                    <InfoCard
                        title="Horaire"
                        description={
                            <p>
                                Lun – Ven : 08H00 – 17H00,<br/>
                                Sam, Dim : Fermé
                            </p>
                        }
                    />
                    <InfoCard
                        title="Téléphone"
                        description={
                            <p>
                                +225 07 68 67 44 44
                            </p>
                        }
                    />
                    <InfoCard
                        title="Horaire"
                        description={
                            <p>
                                Lun – Ven : 08H00 – 17H00,<br/>
                                Sam, Dim : Fermé
                            </p>
                        }
                    />
                    <InfoCard
                        title="Téléphone"
                        description={
                            <p>
                                +225 07 68 67 44 44
                            </p>
                        }
                    />
                </div>
                <Button className="mt-5 w-full rounded-2xl whitespace-normal">
                    Voir nos réprésentants du Consul en Côte d’Ivoire
                </Button>
            </div>
            <Image
                src="/assets/contact-consul.jpg"
                alt="Contact Consul"
                className="h-full "
                height={500}
                width={500}
            />
        </div>
    );
}

export default ContactConsul;