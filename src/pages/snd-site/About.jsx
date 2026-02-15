import React from 'react';
import { Link } from 'react-router-dom';
import SndSiteWrapper from '../../components/SndSiteWrapper';

const About = () => {
  return (
    <SndSiteWrapper>
      <div className="hero-section hero-about">
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-white">About Us</h1>
                <p className="lead text-white">Learn more about Supreme Nomads Detailing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">Our Story</h2>
            <p className="text-center">About page content will be implemented here.</p>
            <div className="text-center">
              <Link to="/snd-site/home" className="btn btn-primary">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </SndSiteWrapper>
  );
};

export default About;
