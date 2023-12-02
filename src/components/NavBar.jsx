import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <Navbar className="nav-style w-100">
      <Container className="d-flex justify-content-around">
          <div><Link to="/" className="navbar-link">ANASAYFA</Link></div>
          <div><Link to="/" className="navbar-link">ANASAYFA</Link></div>
          <div><Link to="/" className="navbar-link">ANASAYFA</Link></div>
      </Container>
    </Navbar>
  );
};

export default NavBar;