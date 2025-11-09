'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { theme } from '../../lib/theme';
import SearchHeader from './SearchHeader';
import SearchControls from './SearchControls';
import SearchFiltersPanel from './SearchFiltersPanel';
import ProfessionalCard from './ProfessionalCard';
import ProfessionalListItem from './ProfessionalListItem';

const MOCK_PROFESSIONALS = [
  {
    id: 1,
    name: "Alex Visuals",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    type: "Photography",
    specialties: ["Wedding", "Portrait", "Event"],
    rating: 4.9,
    reviewCount: 127,
    location: "Lagos Island",
    price: 75000,
    available: "Dec 20, 2024",
    verified: true,
    responseTime: "2h",
    portfolio: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Lagos Lens Studio",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    type: "Photography",
    specialties: ["Wedding", "Corporate", "Fashion"],
    rating: 4.8,
    reviewCount: 89,
    location: "Victoria Island",
    price: 125000,
    available: "Dec 18, 2024",
    verified: true,
    responseTime: "1h",
    portfolio: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Abuja Films",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    type: "Videography",
    specialties: ["Wedding", "Documentary", "Commercial"],
    rating: 4.7,
    reviewCount: 156,
    location: "Abuja",
    price: 200000,
    available: "Dec 22, 2024",
    verified: false,
    responseTime: "4h",
    portfolio: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop"
    ]
  }
];

export default function SearchInterface({ initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const [activeFilters, setActiveFilters] = useState({
    type: '',
    specialties: [],
    location: '',
    minRating: 0,
    maxPrice: 500000
  });
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');

  const filteredResults = useMemo(() => {
    let results = MOCK_PROFESSIONALS.filter(pro => {
      const matchesQuery = !query || 
        pro.name.toLowerCase().includes(query.toLowerCase()) ||
        pro.location.toLowerCase().includes(query.toLowerCase()) ||
        pro.specialties.some(s => s.toLowerCase().includes(query.toLowerCase()));
      
      const matchesType = !activeFilters.type || pro.type === activeFilters.type;
      const matchesSpecialties = activeFilters.specialties.length === 0 || 
        activeFilters.specialties.some(s => pro.specialties.includes(s));
      const matchesLocation = !activeFilters.location || pro.location === activeFilters.location;
      const matchesRating = pro.rating >= activeFilters.minRating;
      const matchesPrice = pro.price <= activeFilters.maxPrice;
      
      return matchesQuery && matchesType && matchesSpecialties && matchesLocation && matchesRating && matchesPrice;
    });

    // Sort results
    switch (sortBy) {
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return results;
  }, [query, activeFilters, sortBy]);

  const updateFilter = (key, value) => {
    setActiveFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleSpecialty = (specialty) => {
    setActiveFilters(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  const clearFilters = () => {
    setActiveFilters({
      type: '',
      specialties: [],
      location: '',
      minRating: 0,
      maxPrice: 500000
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <SearchHeader query={query} setQuery={setQuery} />
      <SearchControls 
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
        resultsCount={filteredResults.length}
      />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Filters */}
        {showFilters && (
          <div className="xl:col-span-3">
            <SearchFiltersPanel 
              activeFilters={activeFilters}
              updateFilter={updateFilter}
              toggleSpecialty={toggleSpecialty}
              clearFilters={clearFilters}
            />
          </div>
        )}
        
        {/* Results */}
        <div className={showFilters ? 'xl:col-span-9' : 'xl:col-span-12'}>
          {filteredResults.length === 0 ? (
            <div className="bg-white rounded-2xl p-16 text-center shadow-sm" style={{ border: `1px solid ${theme.colors.border}` }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.seaMist[100] }}>
                <Search className="w-8 h-8" style={{ color: theme.colors.text.muted }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>No professionals found</h3>
              <p style={{ color: theme.colors.text.secondary }}>Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredResults.map(pro => (
                viewMode === 'grid' ? (
                  <ProfessionalCard key={pro.id} professional={pro} />
                ) : (
                  <ProfessionalListItem key={pro.id} professional={pro} />
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}