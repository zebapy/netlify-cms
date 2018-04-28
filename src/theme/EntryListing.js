import React from 'react';

const EntryListing = ({ children }) =>
  <div>
    <div className="nc-entryListing-cardsGrid">
      { children }
    </div>
  </div>;

export default EntryListing;
