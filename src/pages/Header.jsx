// Import necessary modules
import React from 'react';


// Functional component for the Navbar
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <a className="navbar-brand" href="/user">
          <img style={{width:'50px',height:'50px',borderRadius:'50px'}} src='https://cdn-icons-png.flaticon.com/512/1053/1053244.png'/>
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-success" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
