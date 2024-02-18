import React from 'react';
import './../App.css';
import Sidebar from './../components/sidebar';

export const About = () => {
  return (
    <div className="main">
        <div className="flex-about">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="content-container">
                <h1 className="header">About</h1>
                <div className="pfp-container">
                    <img src={process.env.PUBLIC_URL + '/images/pfp.jpeg'} alt="pfp" className="pfp" />
                </div>

                <div className="about-container">
                    <p>
                    Research engineer passionate about Artificial Intelligence with a focus on healthcare applications.
                    Loves photography and listening to Aphex Twin, usually does both at the same time.
                    Biomedical Engineering graduate (2021) and AI Master's (2023) with keen interests in computer vision and
                    NLP. Eager to keep learning and excited about making meaningful contributions.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};
