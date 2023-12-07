import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <Navbar className="nav-style w-100">
      <Container className="d-flex justify-content-around">
          <div><Link to="/" className="navbar-link">ANASAYFA</Link></div>
          <div><Link to="/coming-activities" className="navbar-link">COMING ACTIVITIES</Link></div>
          <div><Link to="/past-activities" className="navbar-link">PAST ACTIVITIES</Link></div>
      </Container>
    </Navbar>
  );
};

export default NavBar;