import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => (
  <div>
    <nav className="navbar">
      <ul className="nav">
        <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/index">All Posts</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/new">New Post</NavLink>
      </ul>
    </nav>
    {props.children}
  </div>
);

export default NavBar;
