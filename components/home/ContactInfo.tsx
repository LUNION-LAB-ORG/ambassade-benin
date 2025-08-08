import React from 'react';

const ContactInfo = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 space-y-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-1">
          <span className="text-red-500">❌</span>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-gray-800">Horaire</h3>
          <p className="text-gray-600">Lun - Ven : 08H00 - 17H00, Sam, Dim : Fermé</p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="flex-shrink-0 pt-1">
          <span className="text-green-500">📍</span>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-gray-800">Téléphone</h3>
          <p className="text-gray-600">+225 07 68 67 44 44</p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="flex-shrink-0 pt-1">
          <span className="text-red-500">❌</span>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-gray-800">Localisation</h3>
          <p className="text-gray-600">Il Plateau Bd Latrille carrefour Las-Palmas, Rés Nkayo, Villa N°4</p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="flex-shrink-0 pt-1">
          <span className="text-gray-500">✉️</span>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-gray-800">Adresse mail</h3>
          <p className="text-gray-600">contact@consulatbenin-abj.ci</p>
        </div>
      </div>

      <div className="pt-4">
        <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Voir nos représentants du Consul en Côte d&apos;Ivoire
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;