import React from 'react';
import {Card} from "@/components/ui/card";
import Image from "next/image";

type ImageCardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
}

function ImageCard(props: ImageCardProps) {
    return (
        <Card className="relative py-0">
                <Image
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-2xl bg-opacity-50 p-4 text-center bg-gradient-to-b from-white/20 to-white">
                    <h6 className="text-lg font-semibold">{props.title}</h6>
                    <p className="text-sm">{props.description}</p>
                </div>
        </Card>
    );
}

export default ImageCard;