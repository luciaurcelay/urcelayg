import React from 'react';
import './../App.css';
import Sidebar from './../components/sidebar';

 

export const Photography = () => {
    return(
        <div className="main">
            <div className="flex-photography">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="content-container">
                    <h1 className="header">Photography</h1>
                     <div className="photo-container">
                        <img src={process.env.PUBLIC_URL + '/photography/auto.JPG'} alt="auto" />
                        <img src={process.env.PUBLIC_URL + '/photography/benasque.jpg'} alt="benasque"/>
                        <img src={process.env.PUBLIC_URL + '/photography/biarritz.jpg'} alt="biarritz"/>
                        <img src={process.env.PUBLIC_URL + '/photography/cccb.jpg'} alt="cccb"/>
                        <img src={process.env.PUBLIC_URL + '/photography/cris.jpg'} alt="cris"/>
                        <img src={process.env.PUBLIC_URL + '/photography/guggenheim.jpg'} alt="guggenheim"/>
                        <img src={process.env.PUBLIC_URL + '/photography/hofe.jpg'} alt="hofe"/>
                        <img src={process.env.PUBLIC_URL + '/photography/IACCCB.JPG'} alt="IACCCB"/>
                        <img src={process.env.PUBLIC_URL + '/photography/macba.JPG'} alt="macba"/>
                    </div>
                </div>
            </div>
              
      
        </div>
      )
}