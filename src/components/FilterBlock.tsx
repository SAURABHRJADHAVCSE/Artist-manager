'use client';

import { Artist } from './ArtistCard';

export type Filters = {
  category: string;
  location: string;
  priceRange: string;
};

type Props = {
  artists: Artist[];
  filters: Filters;
  onChange: (filters: Filters) => void;
};

export default function FilterBlock({ artists, filters, onChange }: Props) {
  const categories = Array.from(new Set(artists.map(a => a.category)));
  const locations = Array.from(new Set(artists.map(a => a.location)));
  const priceRanges = Array.from(new Set(artists.map(a => a.priceRange)));

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        name="location"
        value={filters.location}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">All Locations</option>
        {locations.map(loc => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <select
        name="priceRange"
        value={filters.priceRange}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">All Price Ranges</option>
        {priceRanges.map(range => (
          <option key={range} value={range}>
            {range}
          </option>
        ))}
      </select>
    </div>
  );
}
