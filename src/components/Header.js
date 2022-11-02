import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="navbar">
    <h1 className="header">Math Magicians</h1>
    <nav className="navlinks">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </header>
);

export default Header;
