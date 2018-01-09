import React from 'react';
import { Link } from 'react-router-dom';

const SiteNav = () => (
  <nav>
    <ul className="nav listless inline">
      <li>
        <Link to="/" data-theme-change="home">
          Work
        </Link>
      </li>
      <li>
        <Link to="/about" data-theme-change="about">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

export default SiteNav;
