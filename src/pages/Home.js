import React from 'react';
import './../App.css';
import Sidebar from './../components/sidebar';


export const Home = () => {
  return (
    <div className="main">

      <div className="flex-home">

        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="logo-container">
          <h1 className="name_header">Lucia Urcelay Ganzabal</h1>
          <img src={process.env.PUBLIC_URL + '/images/logo2.png'} alt="Logo" className="logo" />
        </div>

      </div>

    </div>
         
    );
}

