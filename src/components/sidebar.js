// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'
import HomeLogo from './home_logo';



const Sidebar = () => {
  return (
    <ul className="menu-list">
        <HomeLogo />
        <li><Link to="/urcelayg/about">About</Link></li>
        <li><Link to="/urcelayg/photography">Photography</Link></li>
        <li>
        <a href="https://github.com/luciaurcelay" target="_blank" rel="noopener noreferrer">
            Github
            </a>
            </li>
        <li>
        <a href="https://www.linkedin.com/in/lucia-urcelay-ganzabal-ba3262202/" target="_blank" rel="noopener noreferrer">
            LinkedIn
        </a>
        </li>
        </ul>
  );
};

export default Sidebar;
