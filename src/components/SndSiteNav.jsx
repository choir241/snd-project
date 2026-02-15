import React from 'react';
import { Link } from 'react-router-dom';

const SndSiteNav = () => {
  return (
    <div className="bg-light p-3 mb-4 border-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h5 className="mb-0">SND Site Navigation</h5>
          </div>
          <div className="col-auto">
            <div className="btn-group" role="group">
              <Link to="/snd-site/home" className="btn btn-outline-primary btn-sm">Home</Link>
              <Link to="/snd-site/gallery" className="btn btn-outline-primary btn-sm">Gallery</Link>
              <Link to="/snd-site/services" className="btn btn-outline-primary btn-sm">Services</Link>
              <Link to="/snd-site/about" className="btn btn-outline-primary btn-sm">About</Link>
              <Link to="/snd-site/academy" className="btn btn-outline-primary btn-sm">Academy</Link>
              <Link to="/snd-site/booking" className="btn btn-outline-primary btn-sm">Booking</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SndSiteNav;
