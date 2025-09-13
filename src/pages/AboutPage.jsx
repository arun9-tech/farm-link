import React from 'react';
import { Link } from 'react-router-dom';
import { ValueCard } from '../components/ValueCard';

export function AboutPage() {
  return (
    <div className="animate__animated animate__fadeIn">
      {/* 1. Hero Banner Section */}
      <div 
        className="p-5 mb-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px'
        }}
      >
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '0.25rem' }}>
          <div className="text-white px-3">
            <h1 className="mb-3">Our Mission</h1>
            <h4 className="mb-3 fw-light">Connecting communities with the source of their food.</h4>
          </div>
        </div>
      </div>

      {/* 2. Our Values Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-4 pb-2">What We Stand For</h2>
        <div className="row">
          <ValueCard 
            iconClass="bi-truck" 
            title="Direct From Farm"
            buttonText="Our Process"
            buttonLink="/process"
          >
            We bypass the middleman to bring you produce that is days, not weeks, fresher.
          </ValueCard>
          <ValueCard 
            iconClass="bi-people-fill" 
            title="Community Focused"
            buttonText="Our Impact"
            buttonLink="/community"
          >
            Strengthening local economies by ensuring farmers get a fair price for their hard work.
          </ValueCard>
          <ValueCard 
            iconClass="bi-leaf" 
            title="Always Fresh & Healthy"
            buttonText="Quality Promise"
            buttonLink="/quality"
          >
            Our commitment is to natural, sustainable, and healthy food for your family.
          </ValueCard>
        </div>
      </div>
      
      {/* === NEW: OUR PLATFORM RATES SECTION === */}
      <div className="bg-light p-5 rounded-3 mb-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Platform Rates</h2>
          <p className="lead text-center text-muted mb-5">
            We believe in a simple, transparent pricing model that helps farmers thrive. We only succeed when you do.
          </p>
          <div className="row justify-content-center g-4">
            
            {/* Pricing Card 1: For Farmers */}
            <div className="col-lg-5">
              <div className="card h-100 shadow-lg border-success border-2">
                <div className="card-header bg-success text-white text-center py-3">
                  <h4 className="my-0 fw-normal">For Farmers</h4>
                </div>
                <div className="card-body p-4 text-center">
                  <h1 className="card-title pricing-card-title">10%<small className="text-muted fw-light">/sale</small></h1>
                  <p className="text-muted">Commission Fee</p>
                  <ul className="list-unstyled mt-4 mb-4">
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Unlimited product listings</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Secure payment processing</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Direct access to local customers</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>No monthly or hidden fees</li>
                  </ul>
                  <Link to="/contact" className="w-100 btn btn-lg btn-success">Become a Partner</Link>
                </div>
              </div>
            </div>

            {/* Pricing Card 2: For Customers */}
            <div className="col-lg-5">
              <div className="card h-100 shadow-lg">
                <div className="card-header text-center py-3">
                  <h4 className="my-0 fw-normal">For Customers</h4>
                </div>
                <div className="card-body p-4 text-center">
                  <h1 className="card-title pricing-card-title">Free<small className="text-muted fw-light">/always</small></h1>
                  <p className="text-muted">Platform Access</p>
                  <ul className="list-unstyled mt-4 mb-4">
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Browse local farms anytime</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Directly support your community</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Access to the freshest produce</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>No membership required</li>
                  </ul>
                  <Link to="/" className="w-100 btn btn-lg btn-outline-primary">Browse Farms</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ======================================= */}

      {/* Meet the Founder Section */}
      <div className="container mb-5">
         {/* ... Your existing Meet the Founder section can go here ... */}
      </div>
    </div>
  );
}