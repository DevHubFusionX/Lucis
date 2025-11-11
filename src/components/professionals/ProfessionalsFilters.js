'use client';

import { ChevronDown } from 'lucide-react';

export default function ProfessionalsFilters() {
  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-light text-gray-900">
              5,247 Professionals
            </h2>
            <p className="text-sm font-light text-gray-600">
              Showing all results
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <select className="appearance-none px-4 py-2 pr-10 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-light cursor-pointer hover:border-gray-400 focus:outline-none focus:border-gray-900">
                <option>All Services</option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Portrait</option>
                <option>Product</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="appearance-none px-4 py-2 pr-10 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-light cursor-pointer hover:border-gray-400 focus:outline-none focus:border-gray-900">
                <option>Any Rating</option>
                <option>4.5+ Stars</option>
                <option>4.0+ Stars</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="appearance-none px-4 py-2 pr-10 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-light cursor-pointer hover:border-gray-400 focus:outline-none focus:border-gray-900">
                <option>Sort by Relevance</option>
                <option>Highest Rated</option>
                <option>Most Reviews</option>
                <option>Price: Low to High</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
