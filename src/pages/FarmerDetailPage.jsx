import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { farmersData } from '../data/farmers';
import { MapComponent } from '../components/MapComponent';

// This helper function correctly returns an icon based on product category.
const getProductIcon = (category) => {
  switch (category) {
    case 'vegetable':
      return <i className="bi bi-eggplant text-success me-2"></i>;
    case 'fruit':
      return <i className="bi bi-apple text-danger me-2"></i>;
    case 'dairy':
      return <i className="bi bi-cup-straw text-primary me-2"></i>;
    case 'grain':
      return <i className="bi bi-segmented-nav text-warning me-2"></i>; // Added icon for grain
    case 'legume':
      return <i className="bi bi-dot text-info me-2"></i>; // Added icon for legume
    default:
      return <i className="bi bi-basket3 text-secondary me-2"></i>; // A default icon
  }
};

export function FarmerDetailPage() {
  const { id } = useParams();
  const farmer = farmersData.find(f => f.id == id);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (farmer) {
      document.title = `FarmLink - ${farmer.farm_name}`;
    }
  }, [farmer]);

  if (!farmer) {
    return (
      <div className="alert alert-danger text-center">
        <h2>Farmer Not Found!</h2>
        <Link to="/" className="btn btn-secondary mt-3">← Back to Homepage</Link>
      </div>
    );
  }

  return (
    <div className="card shadow-lg border-0 animate__animated animate__fadeIn">
      <div className="card-body p-4 p-md-5">
        <h2 className="display-6 fw-bold text-success">{farmer.farm_name}</h2>
        <h6 className="card-subtitle mb-3 text-muted">
          <i className="bi bi-person-circle me-2"></i>Operated by: {farmer.owner_name}
        </h6>
        
        {/* --- THIS IS THE FIX --- */}
        {/* We use dangerouslySetInnerHTML to render the <strong> tag from our data file. */}
        {/* This tells React to treat the string as HTML, not plain text. */}
        <p className="lead mt-4" dangerouslySetInnerHTML={{ __html: farmer.story }}></p>
        {/* --- END OF FIX --- */}
        
        <hr className="my-4" />

        <h3 className="fw-bold mb-3">
          <i className="bi bi-basket3-fill me-2"></i>Products Available:
        </h3>
        
        <ul className="list-group list-group-flush mb-4">
          {farmer.products && farmer.products.map((product, index) => (
            <li key={index} className="list-group-item fs-5">
              {getProductIcon(product.category)}
              {product.name}
            </li>
          ))}
        </ul>

        <hr className="my-4" />

        <div className="d-flex align-items-center gap-3 mb-4">
          <button className="btn btn-primary btn-lg" onClick={() => setShowMap(!showMap)}>
            <i className={`bi ${showMap ? 'bi-geo-alt-fill' : 'bi-geo-alt'} me-2`}></i>
            {showMap ? 'Show Location' : 'Hide Location'}
          </button>
          <Link to="/" className="btn btn-outline-secondary btn-lg">← Back to all farmers</Link>
        </div>
        
        {showMap && (
          <div className="mt-2 animate__animated animate__fadeIn">
            {/* This assumes your MapComponent correctly handles the iframe code */}
            <MapComponent iframeHtml={farmer.iframeCode} />
          </div>
        )}
      </div>
    </div>
  );
}