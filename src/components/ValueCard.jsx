import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to handle navigation

// We add two new props: buttonText and buttonLink
export function ValueCard({ iconClass, title, children, buttonText, buttonLink }) {
  return (
    <div className="col-md-4 text-center mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body p-4 d-flex flex-column">
          <i className={`bi ${iconClass} text-success`} style={{ fontSize: '3rem' }}></i>
          <h4 className="card-title mt-3">{title}</h4>
          <p className="card-text text-muted flex-grow-1">{children}</p>
          
          {/* --- THIS IS THE NEW PART --- */}
          {/* This is conditional rendering. The button will ONLY appear if
              a buttonText and buttonLink are provided. */}
          {buttonText && buttonLink && (
            <Link to={buttonLink} className="btn btn-outline-success mt-auto">
              {buttonText}
            </Link>
          )}
          {/* --------------------------- */}

        </div>
      </div>
    </div>
  );
}