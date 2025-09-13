// 1. Import React and useState for interactivity
import React, { useState } from 'react';

// 2. Import Map, Marker, and the new Overlay component
import { Map, Marker, Overlay } from "pigeon-maps";

// Enhanced map component with an interactive overlay
export function MapComponent({ latitude, longitude, farmName, zoom = 12 }) {
  
  // This safety check is perfect, no changes needed here.
  if (typeof latitude !== 'number' || typeof longitude !== 'number') {
    return <div className="alert alert-danger">Invalid or missing location data.</div>;
  }

  // --- State for the Overlay ---
  // We'll use state to track if the overlay should be visible or not.
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const center = [latitude, longitude];

  return (
    <div className="border rounded shadow-sm" style={{ position: 'relative' }}> {/* Position relative is needed for the overlay */}
      <Map 
        height={400} 
        defaultCenter={center} // Using defaultCenter is often better for initial load
        defaultZoom={zoom}
      >
        {/* The Marker now toggles the visibility of the overlay */}
        <Marker 
          width={50} 
          anchor={center} 
          color="#198754"
          onClick={() => setOverlayVisible(true)} // Set overlay to visible on click
        />

        {/* --- Interactive Overlay --- */}
        {/* This will only render when isOverlayVisible is true */}
        {isOverlayVisible && (
          <Overlay anchor={center} offset={[0, 0]}>
            <div 
              style={{
                background: 'white',
                padding: '10px 15px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: 0, fontWeight: 'bold' }}>{farmName}</p>
              {/* Add a button to close the overlay */}
              <button 
                onClick={() => setOverlayVisible(false)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: 'red',
                  cursor: 'pointer',
                  fontSize: '16px',
                  position: 'absolute',
                  top: '0px',
                  right: '5px'
                }}
              >
                × {/* This is an "x" symbol */}
              </button>
            </div>
          </Overlay>
        )}
      </Map>
    </div>
  );
}