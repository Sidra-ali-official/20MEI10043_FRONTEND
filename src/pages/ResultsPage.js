import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchResults from '../components/SearchResults';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { fetchTrademarks } from '../api/trademarkApi'; // Ensure this import matches your function name

function ResultsPage() {
  const location = useLocation();
  const { query, filters } = location.state || {};
  const [trademarks, setTrademarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrademarks = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTrademarks({ // Corrected function name
          input_query: query,
          ...filters
        });
        setTrademarks(data);
      } catch (err) {
        setError('An error occurred while fetching the trademarks.');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      getTrademarks();
    }
  }, [query, filters]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-700 mb-6 text-center">Results for "{query}"</h1>
        <div className="flex justify-center mb-6">
          <Filters filters={filters} />
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 border-t-teal-500"></div>
          </div>
        ) : error ? (
          <p className="text-red-600 text-center">{error}</p>
        ) : (
          <>
            <SearchResults trademarks={trademarks} />
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
