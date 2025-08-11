import SectionTitle from '@/components/section-title';
import React from 'react';

interface Consulate {
  country: string;
  city: string;
  address: string;
  phone: string;
  email?: string;
}

const consulates: Consulate[] = [
  {
    country: "AFRIQUE DU SUD",
    city: "PRETORIA",
    address: "900 Park Street (Corner Park and Orient Street), ARCADIA 0083 Pretoria - 26484 Arcadia 007 Pretoria",
    phone: "+27 12 34 26 97",
    email: ""
  },
  {
    country: "CONGO (RDC)",
    city: "KINSHASA",
    address: "3990, Avenue des Cliniques, KINSHASA-GOMBE - B.P 3265",
    phone: "+243 12 33 156",
    email: ""
  },
  {
    country: "COTE D'IVOIRE",
    city: "ABIDJAN",
    address: "0580/283 Abidjan Côte d'Ivoire",
    phone: "+225 41 44 13",
    email: ""
  },
  {
    country: "GABON",
    city: "LIBREVILLE",
    address: "B.P 3851 LIBREVILLE",
    phone: "+241 73 76 92",
    email: ""
  },
  {
    country: "GHANA",
    city: "ACCRA",
    address: "Volta Street 2nd Close N°19 Airport Residential Area P.O. BOX 7817 - ACCRA NORTH",
    phone: "+233 77 48 60",
    email: ""
  },
  {
    country: "LIBYE",
    city: "TRIPOLI",
    address: "254, rue OUAKWAKER Cité EL ANDALOUS, Route de Gharabulli B.P. 8676",
    phone: "+218 21 83 09 90",
    email: ""
  },
  {
    country: "MAROC",
    city: "RABAT",
    address: "30, Avenue Mehdi Ben Barka, 10 105 SOUISSI RABAT",
    phone: "+212 7 75 41 58",
    email: ""
  },
  {
    country: "NIGER",
    city: "NIAMEY",
    address: "B.P 11544",
    phone: "+227 72 39 19",
    email: ""
  },
  {
    country: "NIGERIA",
    city: "ABUJA",
    address: "P.O Box : PMB 5057 Abuja",
    phone: "+234 95 23 84 24",
    email: ""
  }
];

const BeninConsulates: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
           <SectionTitle title=' Les Ambassades du Bénin' />
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          <table className="min-w-[700px] w-full table-auto border-collapse">
            {/* Header */}
            <thead>
              <tr className="bg-yellow-300">
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wide border-r border-yellow-400 whitespace-nowrap">
                  PAYS
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wide border-r border-yellow-400 whitespace-nowrap">
                  VILLE
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wide border-r border-yellow-400 max-w-xs">
                  ADRESSE
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wide border-r border-yellow-400 whitespace-nowrap">
                  TELEPHONE
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wide whitespace-nowrap">
                  EMAIL
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-gray-200">
              {consulates.map((consulate, index) => (
                <tr 
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-4 py-4 text-sm text-gray-600 border-r border-gray-200 font-medium whitespace-nowrap">
                    {consulate.country}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200 font-semibold whitespace-nowrap">
                    {consulate.city}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 border-r border-gray-200 leading-relaxed max-w-xs break-words">
                    {consulate.address}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200 font-mono whitespace-nowrap">
                    {consulate.phone}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {consulate.email || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default BeninConsulates;
