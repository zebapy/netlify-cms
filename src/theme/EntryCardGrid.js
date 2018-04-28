import React from 'react';
import c from 'classnames';
import CollectionLabel from './CollectionLabel';

const EntryCardGrid = ({ Link, path, collectionLabel, title, image }) =>
  <Link to={path} className="nc-entryListing-gridCard">
    <div className={c('nc-entryListing-cardBody', { 'nc-entryListing-cardBody-full': !image })}>
      { collectionLabel ? <CollectionLabel label={collectionLabel}/> : null }
      <h2 className="nc-entryListing-cardHeading">{title}</h2>
    </div>
    {
      image
        ? <div
            className="nc-entryListing-cardImage"
            style={{ backgroundImage: `url(${ image })` }}
          />
        : null
    }
  </Link>;

export default EntryCardGrid;
