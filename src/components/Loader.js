import React from 'react';
import './Loader.scss';

const Loader = () => (
  <div className="loader-wrapper">
    <div className="loader-content">
      <div className="spinner"></div>
      <h2 className="loader-text">Aziz Laifi</h2>
      <p className="loader-subtitle">Loading Portfolio...</p>
    </div>
  </div>
);

export default Loader;
