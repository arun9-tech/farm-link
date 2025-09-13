// 1. Import useState to manage component state
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  // State for controlling the mobile navbar collapse
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  
  // State for controlling the "About" dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggles the mobile navbar
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Toggles the dropdown menu
  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  // Closes both menus (useful for when a link is clicked)
  const closeMenus = () => {
    setIsNavCollapsed(true);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm mb-4">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={closeMenus}>
          FarmLink
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          // 2. Remove data attributes, use React's onClick
          onClick={handleNavCollapse} 
          // 3. Link ARIA attributes to React state for accessibility
          aria-expanded={!isNavCollapsed} 
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* 4. Add the 'show' class conditionally based on state */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" end to="/" onClick={closeMenus}>
                Home
              </NavLink>
            </li>
            
            <li className="nav-item dropdown">
              {/* The dropdown toggle now uses an onClick handler */}
              <a 
                className="nav-link dropdown-toggle" 
                href="#" // href="#" is fine here as onClick will handle behavior
                role="button" 
                onClick={handleDropdownToggle} // Use React state to toggle
                aria-expanded={isDropdownOpen} // Accessibility tied to state
              >
                About
              </a>
              {/* The 'show' class is now controlled by React state */}
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                {/* 5. Add onClick to dropdown items to close the menu on navigation */}
                <li>
                  <Link className="dropdown-item" to="/about" onClick={closeMenus}>Our Story</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/process" onClick={closeMenus}>Our Process</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/community" onClick={closeMenus}>Our Impact</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/quality" onClick={closeMenus}>Quality Promise</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeMenus}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}