'use client';

import { useState, useMemo } from 'react';
import artistsData from '@/data/artists.json';
import ArtistCard, { Artist } from '@/components/ArtistCard';
import FilterBlock, { Filters } from '@/components/FilterBlock';

export default function ArtistsPage() {
  const [filters, setFilters] = useState<Filters>({
    category: '',
    location: '',
    priceRange: '',
  });

  const filteredArtists = useMemo(() => {
    return (artistsData as Artist[]).filter((artist) => {
      return (
        (!filters.category || artist.category === filters.category) &&
        (!filters.location || artist.location === filters.location) &&
        (!filters.priceRange || artist.priceRange === filters.priceRange)
      );
    });
  }, [filters]);

  return (
    <div className="p-4 md:p-8 flex flex-col gap-4">
      <FilterBlock artists={artistsData as Artist[]} filters={filters} onChange={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}
