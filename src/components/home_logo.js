// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'


const HomeLogo = () => {
  return (
    <div className="home-logo-container">
      <Link to="/home">
        <img src={process.env.PUBLIC_URL + '/images/logo2.png'} alt="Logo" className="home-logo" />
      </Link>
      </div>
  );
};

export default HomeLogo;
