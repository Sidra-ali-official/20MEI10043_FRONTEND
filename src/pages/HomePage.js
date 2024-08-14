import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy product data
const dummyProducts = [
  {
    id: 1,
    name: 'Trademark A',
    description: 'Description for Trademark A',
    image: 'https://i.ibb.co/3BYrM31/l1.jpg',
  },
  {
    id: 2,
    name: 'Trademark B',
    description: 'Description for Trademark B',
    image: 'https://i.ibb.co/26kDg4c/l2.jpg',
  },
  {
    id: 3,
    name: 'Trademark C',
    description: 'Description for Trademark C',
    image: 'https://i.ibb.co/R93HKxG/l3.jpg',
  },
];

function HomePage() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    status: [],
    owners: [],
    attorneys: [],
    law_firms: [],
    mark_description: [],
    classes: [],
    states: [],
    counties: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      setLoading(true);
      setError(null);
      try {
        // Simulate fetching trademarks here or handle any additional logic
        // const results = await fetchTrademarks(query);
        navigate('/results', {
          state: {
            query: query,
            filters: filters
          }
        });
      } catch (err) {
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please enter a search term.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Trademark Search</h1>
      <form onSubmit={handleSearch} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for trademarks..."
            className="w-full p-4 text-lg text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Filters:</label>
          {/* Add filter inputs here */}
          <input
            type="text"
            name="status"
            placeholder="Status (comma-separated)"
            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value.split(',').map(item => item.trim()) }))}
            className="w-full p-4 text-lg text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
          />
          {/* Repeat for other filters as needed */}
        </div>
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white text-lg px-4 py-2 font-semibold rounded-lg transition duration-300"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="w-6 h-6 animate-spin text-white mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Loading...
            </span>
          ) : (
            'Search'
          )}
        </button>
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </form>
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Trademarks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
