import React from 'react';
import { Icon } from 'UI';

const SidebarSearchInput = ({ onChange, onKeyDown, value }) =>
  <div className="nc-collectionPage-sidebarSearch">
    <Icon type="search" size="small"/>
    <input onChange={onChange} onKeyDown={onKeyDown} placeholder="Search all" value={value}/>
  </div>;

export default SidebarSearchInput;
