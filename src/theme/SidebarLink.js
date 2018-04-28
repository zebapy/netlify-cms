import React from 'react';
import { Icon } from 'UI';

const SidebarLink = ({ path, label, NavLink }) =>
  <NavLink
    to={path}
    className="nc-collectionPage-sidebarLink"
    activeClassName="nc-collectionPage-sidebarLink-active"
  >
    <Icon type="write"/>
    {label}
  </NavLink>;

export default SidebarLink;
