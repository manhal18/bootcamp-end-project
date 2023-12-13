import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="nav-style w-100">
        <ul>
          <li className="p-2"><Link to="/" className="navbar-link">ANASAYFA</Link></li>
          <li className="p-2"><Link to="/coming-activities" className="navbar-link">GELECEK ETKİNLİKLER</Link></li>
          <li className="p-2"><Link to="/past-activities" className="navbar-link">GEÇMİŞ ETKİNLİKLER</Link></li>
        </ul>
    </nav>
  );
};

export default NavBar;