import React from 'react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
}

export default function ServiceCard({ title, description, price }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex items-start gap-3">
        <div className="bg-amber-50 p-2 rounded-full">
          <Check className="w-5 h-5 text-amber-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          {price && (
            <p className="text-amber-600 font-semibold mt-2">
              {price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}