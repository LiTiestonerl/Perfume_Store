import React from 'react';

const Card = ({ title, className, link }) => (
    <div className={`card ${className} text-white mb-4`}>
        <div className="card-body">{title}</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
            <a className="small text-white stretched-link" href={link}>View Details</a>
            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
        </div>
    </div>
);

export default Card;
