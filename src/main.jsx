import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// Import Bootstrap CSS (You already have this)
import 'bootstrap/dist/css/bootstrap.min.css';

// === ADD THIS LINE TO ENABLE DROPDOWNS AND OTHER JS FEATURES ===
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);