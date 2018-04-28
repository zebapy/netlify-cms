import React from 'react';
import c from 'classnames';
import CollectionLabel from './CollectionLabel';

const EntryCardList = ({ Link, path, collectionLabel, title }) =>
  <Link to={path} className="nc-entryListing-listCard">
    { collectionLabel ? <CollectionLabel label={collectionLabel}/> : null }
    <h2 className="nc-entryListing-listCard-title">{ title }</h2>
  </Link>

export default EntryCardList;
