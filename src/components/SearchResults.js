import React from 'react';
import TrademarkItem from './TrademarkItem';

function SearchResults({ trademarks }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {trademarks.map((trademark) => (
        <TrademarkItem key={trademark.id} trademark={trademark} />
      ))}
    </div>
  );
}

export default SearchResults;
