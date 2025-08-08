import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import Image from 'next/image'; 
import img1 from '../../public/Assets/Images/tt.jpg';
export default function BeninHeroSection() {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('d${img1}`
        }}
      >
        {/* Overlay - only on the right side */}

      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-4 w-full pt-8 lg:pt-16">
          {/* Main title - Left side */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-2xl">
              Fraternité, Justice, Travail
            </h1>
          </div>
        </div>

        {/* Contact info - Bottom right */}
        <div className="max-w-xl mx-auto px-4 border-2 mr-10 border-red-600 w-full pb-6 lg:pb-8">
          <div className="flex justify-end border-2 border-blue-600">
            <div className="space-y-2 text-right b bg-gradient-to-r from-transparent to-black to-70%  from-20% shadow-xl  p-4 rounded-lg max-w-md">
              {/* Phone */}
              <div className="flex items-center space-x-2 justify-end">
                <span className="text-white font-medium text-sm lg:text-base">
                  +225 25 22 27 22 40 69 68
                </span>
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-white flex-shrink-0" />
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-2 justify-end">
                <span className="text-white font-medium text-sm lg:text-base">
                  LUN - VEN : 08H00 - 17H00 SAM, DIM : FERMÉ
                </span>
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-white flex-shrink-0" />
              </div>

              {/* Address */}
              <div className="flex items-start space-x-2 justify-end">
                <span className="text-white font-medium text-sm lg:text-base text-right">
                  II PLATEAU BD LATRILLE CARREFOUR LAS-PALMAS, RÉS NKAYO
                </span>
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-white flex-shrink-0 mt-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}