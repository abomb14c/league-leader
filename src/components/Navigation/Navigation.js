import React from 'react';
import './navigation.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav">
      <div className="logo"></div>
      <div className="nav-links">
      <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/leagues">
          Leagues
        </NavLink>
        <NavLink activeClassName="active" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation; 
