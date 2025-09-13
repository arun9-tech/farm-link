import React from 'react';
import { Link } from 'react-router-dom';

export function QualityPage() {
  return (
    <div className="card shadow-sm">
      <div className="card-body p-5">
        <div className="text-center mb-5">
          <i className="bi bi-patch-check-fill display-1 text-success"></i>
          <h1 className="card-title fw-bold mt-3">Our Quality Promise</h1>
          <p className="lead">
            We are deeply committed to providing food that is not only fresh but also grown with care and integrity.
          </p>
        </div>

        <div className="row g-4">
          {/* Section 1: Peak Freshness */}
          <div className="col-lg-4">
            <div className="text-center p-3">
              <i className="bi bi-clock-history fs-2 mb-3 text-primary"></i>
              <h4 className="fw-bold">Peak Freshness</h4>
              <p className="text-muted">
                Our model minimizes the time from harvest to your home. This means better taste, higher nutritional value, and longer shelf life for your produce.
              </p>
            </div>
          </div>

          {/* Section 2: Sustainable Practices */}
          <div className="col-lg-4">
            <div className="text-center p-3">
              <i className="bi bi-tree-fill fs-2 mb-3 text-success"></i>
              <h4 className="fw-bold">Sustainable Practices</h4>
              <p className="text-muted">
                We partner with farmers who respect the land. Many use organic methods, conserve water, and focus on building healthy soil for future generations.
              </p>
            </div>
          </div>

          {/* Section 3: No Harmful Chemicals */}
          <div className="col-lg-4">
            <div className="text-center p-3">
              <i className="bi bi-shield-slash-fill fs-2 mb-3 text-danger"></i>
              <h4 className="fw-bold">Transparent & Honest</h4>
              <p className="text-muted">
                Our farmers are transparent about their growing methods. You get to know their story and can be confident in the food you're eating.
              </p>
            </div>
          </div>
        </div>
        
        <hr className="my-5" />

        <div className="text-center">
          <h4>Have more questions?</h4>
          <p>We're always happy to talk about our commitment to quality.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>

        <div className="text-center mt-4">
          <Link to="/about" className="btn btn-sm btn-outline-secondary">
            ← Back to About Us
          </Link>
        </div>
      </div>
    </div>
  );
}