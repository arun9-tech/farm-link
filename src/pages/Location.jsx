import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue in React-Leaflet which can occur with bundlers like Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Define our key agricultural regions in India
const locations = [
  { name: 'Punjab (North)', lat: 30.7333, lng: 76.7794, zoom: 7 },
  { name: 'Maharashtra (West)', lat: 19.0760, lng: 72.8777, zoom: 7 },
  { name: 'Karnataka (South)', lat: 12.9716, lng: 77.5946, zoom: 7 },
  { name: 'West Bengal (East)', lat: 22.5726, lng: 88.3639, zoom: 7 },
  { name: 'Uttar Pradesh (Central)', lat: 26.8467, lng: 80.9462, zoom: 7 }
];

export function LocationsPage() {
  const navigate = useNavigate();

  // Function to handle clicking the button inside the popup
  const handleSelectLocation = (locationName) => {
    // Navigate to the homepage and pass the location name as a "search parameter"
    navigate(`/?location=${encodeURIComponent(locationName)}`);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body p-4">
        <h2 className="card-title text-center mb-4">Select a Farming Region</h2>
        <p className="text-center text-muted mb-4">
          Click a marker on the map to see farmers from that region.
        </p>
        <div className="border rounded" style={{ overflow: 'hidden' }}> {/* Added overflow: hidden for clean rounded corners */}
          <MapContainer 
            center={[22.5937, 78.9629]} // Center of India
            zoom={5} 
            style={{ height: '60vh', width: '100%' }}
          >
            {/* 
              CORRECTION: The TileLayer URL needs to be a tile server template, not a Google Maps iframe.
              This one points to the standard OpenStreetMap tile server.
            */}
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            
            {/* Loop through our locations and create a marker for each */}
            {locations.map(loc => (
              <Marker key={loc.name} position={[loc.lat, loc.lng]}>
                <Popup>
                  <div>
                    <strong>{loc.name}</strong>
                    <br />
                    <button 
                      className="btn btn-sm btn-success mt-2"
                      onClick={() => handleSelectLocation(loc.name)}
                    >
                      View Farmers
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}