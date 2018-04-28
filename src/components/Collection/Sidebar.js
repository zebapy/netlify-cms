import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { NavLink } from 'react-router-dom';
import { searchCollections } from 'Actions/collections';
import { getCollectionUrl } from 'Lib/urlHelper';
import { ThemeSidebar, ThemeSidebarLink, ThemeSidebarSearchInput } from 'Theme';

export default class Collection extends React.Component {

  static propTypes = {
    collections: ImmutablePropTypes.orderedMap.isRequired,
  };

  state = { query: this.props.searchTerm || '' };

  render() {
    const { collections } = this.props;
    const { query } = this.state;

    return (
      <ThemeSidebar>
        <ThemeSidebarSearchInput
          onChange={e => this.setState({ query: e.target.value })}
          onKeyDown={e => e.key === 'Enter' && searchCollections(query)}
          value={query}
        />
        {collections.toList().map(collection =>
          <ThemeSidebarLink
            key={collection.get('name')}
            path={`/collections/${collection.get('name')}`}
            label={collection.get('label')}
            NavLink={NavLink}
          />
        )}
      </ThemeSidebar>
    );
  }
}
