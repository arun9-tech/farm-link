import React from 'react';
import { Link } from 'react-router-dom';

export function CommunityPage() {
  // what is return
  // To send a value back to the code that called the function.
  //To immediately stop the execution of that function.
  return (
    <div>
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Building a Stronger Local Economy</h1>
        <p className="lead text-muted">Our platform is designed to create a win-win scenario for everyone involved.</p>
      </div>

      <div className="row g-4">
        {/* Column for Farmer Benefits */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-success">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-person-heart fs-2 text-success me-3"></i>
                <h3 className="card-title mb-0">For Our Farmers</h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-start border-0 ps-0">
                  <i className="bi bi-cash-coin me-2 mt-1 text-success"></i>
                  <div>
                    <strong>Fairer Prices:</strong> By selling directly, farmers keep a significantly larger portion of their profits.
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 ps-0">
                  <i className="bi bi-graph-up-arrow me-2 mt-1 text-success"></i>
                  <div>
                    <strong>Reduced Waste:</strong> Farmers harvest what's ordered, dramatically reducing food waste from unsold surplus.
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 ps-0">
                  <i className="bi bi-chat-dots-fill me-2 mt-1 text-success"></i>
                  <div>
                    <strong>Direct Connection:</strong> They get valuable feedback and build relationships with the people who enjoy their food.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column for Customer & Community Benefits */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-primary">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-people-fill fs-2 text-primary me-3"></i>
                <h3 className="card-title mb-0">For Our Community</h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-start border-0 ps-0">
                  <i className="bi bi-award-fill me-2 mt-1 text-primary"></i>
                  <div>
                    <strong>Unmatched Freshness:</strong> Access to produce that is often harvested the same day it's delivered.
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 ps-0">
                  <i className="bi bi-currency-dollar me-2 mt-1 text-primary"></i>
                  <div>
                    <strong>Supporting Local:</strong> Every purchase directly supports local family farms and keeps money within the community.
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 ps-0">
                  <i className="bi bi-info-circle-fill me-2 mt-1 text-primary"></i>
                  <div>
                    <strong>Food Transparency:</strong> Know exactly where your food comes from, how it was grown, and who grew it.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link to="/about" className="btn btn-outline-secondary">
          ← Back to About Us
        </Link>
      </div>
    </div>
  );
}