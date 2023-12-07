import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from '../images/logo.png'
import { Link } from "react-router-dom";

const Header = ({ search }) => {

  const onSearch = (word) => {
    search(word)
  }
  return (
    <header className="header-style w-100">
      <Container>
        <Row className="pt-1">
          <Col xs="2" lg="1">
            <Link to="/">
                <img className="logo" alt="activities project" src={logo} />
            </Link>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="Aramak istediğiniz etkinlik yazın" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;