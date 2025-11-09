'use client';

import { Upload } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function StudioPortfolioTab({ studioData }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-lg sm:text-xl font-bold" style={{ color: theme.colors.text.primary }}>Portfolio</h3>
        <button className="px-4 py-2 rounded-lg font-medium text-sm sm:text-base" style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}>
          <Upload className="w-4 h-4 mr-2 inline" />
          Add Photos
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {studioData.portfolio.map((image, index) => (
          <div key={index} className="aspect-square bg-gray-200 rounded-xl hover:scale-105 transition-transform cursor-pointer"></div>
        ))}
      </div>
    </div>
  );
}