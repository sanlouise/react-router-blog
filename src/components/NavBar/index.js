import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <NavLink activeClassName="brand-logo" exact to="/">Home</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink activeClassName="selected" to="/index">All Posts</NavLink></li>
          <li><NavLink activeClassName="selected" to="/new">New Post</NavLink></li>
        </ul>
      </div>
   </nav>
   {props.children}
 </div>


);

export default NavBar;
