import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { locationData } from '../data/locationData';
import { farmersData } from '../data/farmers';

export function HomePage() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const states = useMemo(() => Object.keys(locationData).sort(), []);
  const districts = useMemo(() => {
    return selectedState ? locationData[selectedState].sort() : [];
  }, [selectedState]);

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedDistrict('');
  };

  const filteredFarmers = useMemo(() => {
    if (!selectedState || !selectedDistrict) {
      return [];
    }
    return farmersData.filter(farmer => {
      return farmer.location === selectedState && farmer.district === selectedDistrict;
    });
  }, [selectedState, selectedDistrict]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="text-center mb-5 p-4 bg-light rounded-3 shadow-sm">
        <h1 className="display-4 fw-bold">Find Your Local Farmer</h1>
        <p className="lead text-muted">Select a state and district to discover fresh produce near you.</p>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body p-4">
          <div className="row g-3">
            {/* State and District Dropdowns (No changes here) */}
            <div className="col-md-6">
              <label htmlFor="state-select" className="form-label fw-bold">State</label>
              <select id="state-select" className="form-select form-select-lg" value={selectedState} onChange={(e) => handleStateChange(e.target.value)}>
                <option value="">-- Select a State --</option>
                {states.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="district-select" className="form-label fw-bold">District</label>
              <select id="district-select" className="form-select form-select-lg" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedState}>
                <option value="">-- Select a District --</option>
                {districts.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        {selectedState && selectedDistrict ? (
          filteredFarmers.length > 0 ? (
            <div className="row g-4 animate__animated animate__fadeInUp">
              {filteredFarmers.map((farmer) => (
                <div key={farmer.id} className="col-md-6 col-lg-4 d-flex">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold text-success">{farmer.farm_name}</h5>
                      <p className="text-muted small">{farmer.district}, {farmer.location}</p>
                      <p className="card-text flex-grow-1">{farmer.story}</p>
                      
                      {/* === NEW: PRODUCT DISPLAY SECTION === */}
                      <div className="mt-2 mb-3">
                        <h6 className="fw-bold small text-uppercase">Key Products:</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {/* We check if products exist and then map over them */}
                          {farmer.products && farmer.products.map((product, index) => (
                            <span key={index} className="badge bg-secondary-subtle text-secondary-emphasis rounded-pill">
                              {/* We display the 'name' property of the product object */}
                              {product.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* ==================================== */}

                      <Link to={`/farmer/${farmer.id}`} className="btn btn-outline-success mt-auto">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-warning text-center">
              <h4>Loading farmer for {selectedDistrict}, {selectedState}...</h4>
              <p>Sample farmer data is being generated.</p>
            </div>
          )
        ) : (
          <div className="alert alert-info text-center">
            Please select a state and district to find farmers.
          </div>
        )}
      </div>
    </div>
  );
}