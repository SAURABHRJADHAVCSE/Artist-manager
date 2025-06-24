export type Artist = {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="border rounded p-4 flex flex-col gap-1">
      <h3 className="text-lg font-semibold">{artist.name}</h3>
      <p className="text-sm text-gray-600">{artist.category}</p>
      <p className="text-sm">{artist.priceRange}</p>
      <p className="text-sm">{artist.location}</p>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm">
        Ask for Quote
      </button>
    </div>
  );
}
