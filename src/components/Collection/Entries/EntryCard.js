import React from 'react';
import { Link } from 'react-router-dom';
import { getTheme } from 'Lib/registry';
import { resolvePath } from 'Lib/pathHelper';
import { VIEW_STYLE_LIST, VIEW_STYLE_GRID } from 'Constants/collectionViews';
import { ThemeEntryCardList, ThemeEntryCardGrid } from 'Theme';

const EntryCard = ({
  collection,
  entry,
  inferedFields,
  publicFolder,
  collectionLabel,
  viewStyle = VIEW_STYLE_LIST,
}) => {
  const label = entry.get('label');
  const title = label || entry.getIn(['data', inferedFields.titleField]);
  const path = `/collections/${collection.get('name')}/entries/${entry.get('slug')}`;
  let image = entry.getIn(['data', inferedFields.imageField]);
  image = resolvePath(image, publicFolder);
  if(image) {
    image = encodeURI(image);
  }

  if (viewStyle === VIEW_STYLE_LIST) {
    return (
      <ThemeEntryCardList
        Link={Link}
        path={path}
        collectionLabel={collectionLabel}
        title={title}
      />
    );
  }

  if (viewStyle === VIEW_STYLE_GRID) {
    return (
      <ThemeEntryCardGrid
        Link={Link}
        path={path}
        image={image}
        collectionLabel={collectionLabel}
        title={title}
      />
    );
  }
}

export default EntryCard;
