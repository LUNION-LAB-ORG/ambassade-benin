import React from 'react';
import {cn} from "@/lib/utils";

type SectionTitleProps = {
    title: string;
    className?: string;
}

function SectionTitle({title, className}:SectionTitleProps) {
    return (
        <h2 className={cn("text-[#EF2E39] sm:text-3xl font-bold", className)}>
            {title}
        </h2>
    );
}

export default SectionTitle;