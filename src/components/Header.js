import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineCamera } from 'react-icons/ai';

// Dummy function to simulate fetching trademarks
async function fetchTrademarks(query) {
  // Replace with the actual API endpoint
  const response = await fetch(`https://api.example.com/trademarks?query=${query}`);
  const data = await response.json();
  return data.trademarks; // Adjust according to your API response structure
}

function Header() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const results = await fetchTrademarks(query);
      navigate('/results', { state: { query, results } });
    } catch (err) {
      setError('Error Occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="bg-gray-900 p-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <Link to="/" className="text-3xl font-bold text-white hover:text-teal-400 transition duration-300">
          Trademarkia
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-lg text-white hover:text-teal-400 transition duration-300">
            Home
          </Link>
          {/* Add more links here as needed */}
        </nav>
        <div className="flex items-center space-x-2">
          <div className="flex items-center border border-gray-700 bg-gray-800 rounded-lg overflow-hidden w-96">
            <label htmlFor="file-upload" className="flex items-center px-4 py-2 cursor-pointer">
              <AiOutlineCamera className="text-white text-2xl hover:text-teal-400 transition duration-300" />
              <input
                id="file-upload"
                type="file"
                className="hidden"
              />
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for trademarks..."
              className="flex-grow px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border-none outline-none"
            />
            <button
              type="button"
              className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-r-lg hover:bg-teal-600 transition duration-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="text-white">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


