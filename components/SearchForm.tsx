import { useState } from 'react';

interface SearchFormProps {
  onSearch: (zipCode: string, radius: number) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [zipCode, setZipCode] = useState('');
  const [radius, setRadius] = useState(10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(zipCode, radius);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <div>
        <label className="block text-sm font-medium">ZIP Code</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          pattern="[0-9]{5}"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Radius (miles)</label>
        <select
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value={5}>5 miles</option>
          <option value={10}>10 miles</option>
          <option value={25}>25 miles</option>
          <option value={50}>50 miles</option>
        </select>
      </div>
      <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Find Stores
      </button>
    </form>
  );
}