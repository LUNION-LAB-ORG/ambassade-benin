import * as React from "react"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Send} from "lucide-react";

function InputNewsletter() {
    return (
        <div
            className="relative "
        >
            <Input
                placeholder="Enter Email"
                className="rounded-full items-center justify-center w-full max-w-md mx-auto p-0 bg-[#111214] border border-white/20 focus-within:ring-1 focus-within:ring-ring pl-2 pr-0"
            />
           
        </div>
    )
}

export {InputNewsletter}
