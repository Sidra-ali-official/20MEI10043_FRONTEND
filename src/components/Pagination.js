import React from 'react';

function Pagination() {
  return (
    <div className="flex justify-center items-center mt-6">
      <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300">
        Previous
      </button>
      <span className="mx-4 text-gray-700">Page 1 of 10</span>
      <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300">
        Next
      </button>
    </div>
  );
}

export default Pagination;
