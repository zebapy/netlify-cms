import React from 'react';

const Sidebar = ({ children }) =>
  <div className="nc-collectionPage-sidebar">
    <h1 className="nc-collectionPage-sidebarHeading">Collections</h1>
    {children}
  </div>;

export default Sidebar;
