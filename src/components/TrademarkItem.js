import React from 'react';

function TrademarkItem({ trademark }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-semibold mb-2">{trademark.name}</h2>
      <p className="text-gray-600">Registration Number: {trademark.registrationNumber}</p>
      <p className="text-gray-600">Registration Date: {trademark.registrationDate}</p>
      <p className="text-gray-600">Status: {trademark.status}</p>
    </div>
  );
}

export default TrademarkItem;
