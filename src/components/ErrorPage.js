import React from 'react';
import { Link } from 'react-router-dom'; 
import ParticlesComponent from './ParticlesComponent';
import '../styles/styles.css';
import '../styles/custom.css';


const ErrorPage = ({ errorCode, message, buttonText, buttonLink }) => {

  return (
    <div className="page-error">
      <ParticlesComponent />
      <div className="carousel page-one-error-inner">
        <h1>{errorCode}</h1>
        <h4 className="clearfix">{message}</h4>
        <Link to={buttonLink} className="btn btn-dark">
          <i className="fas fa-arrow-left me-1"></i>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
