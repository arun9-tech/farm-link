import React from 'react';
import { Link } from 'react-router-dom';

// A small, reusable component for each step in our process timeline.
const ProcessStep = ({ iconClass, title, description, isLast = false }) => (
  <div className="position-relative">
    {/* The line connecting the steps (not shown for the last item) */}
    {!isLast && (
      <div 
        className="position-absolute top-0 start-0 translate-middle-x ms-4 mt-5"
        style={{ width: '2px', height: '100%', backgroundColor: '#e9ecef', zIndex: 1 }}
      ></div>
    )}
    
    <div className="d-flex align-items-start mb-5 position-relative" style={{ zIndex: 2 }}>
      {/* Icon */}
      <div className="flex-shrink-0">
        <div 
          className="d-flex align-items-center justify-content-center rounded-circle bg-success text-white" 
          style={{ width: '50px', height: '50px' }}
        >
          <i className={`bi ${iconClass} fs-4`}></i>
        </div>
      </div>
      
      {/* Title and Description */}
      <div className="flex-grow-1 ms-4">
        <h4 className="fw-bold">{title}</h4>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  </div>
);


export function ProcessPage() {
  return (
    <div className="card shadow-sm">
      <div className="card-body p-5">
        <div className="text-center mb-5">
          <h1 className="card-title fw-bold">From Our Farm to Your Table</h1>
          <p className="lead">
            We've designed a simple, transparent process to ensure you get the freshest produce possible.
          </p>
        </div>
        
        {/* The container for our process steps */}
        <div>
          <ProcessStep
            iconClass="bi-card-list"
            title="Step 1: Farmers List Their Harvest"
            description="Our partner farmers log into their dashboard and list the fresh produce they've just harvested. They set the prices and quantities themselves, ensuring they get a fair value for their work."
          />
          <ProcessStep
            iconClass="bi-mouse"
            title="Step 2: You Browse and Order"
            description="You visit the FarmLink website, browse what's fresh from farms in your area, and place your order online. It's as easy as any other online shopping experience, but with much fresher results!"
          />
          <ProcessStep
            iconClass="bi-box-arrow-in-down"
            title="Step 3: Order is Packed with Care"
            description="The moment your order is placed, the farmer is notified. They carefully pack your hand-picked produce, ensuring it's ready for its short journey to you. No long-term storage, no middlemen."
          />
          <ProcessStep
            iconClass="bi-truck"
            title="Step 4: Speedy Local Delivery"
            description="Your order is delivered directly from the farm to your doorstep or a convenient local pickup point. This minimal travel time means maximum freshness, flavor, and nutritional value."
            isLast={true} // Mark this as the last step to stop the timeline line
          />
        </div>

        <div className="text-center mt-4">
          <Link to="/about" className="btn btn-outline-secondary">
            ← Back to About Us
          </Link>
        </div>
      </div>
    </div>
  );
}