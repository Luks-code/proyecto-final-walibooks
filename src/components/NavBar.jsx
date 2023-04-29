import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container fluid>
          <Navbar.Brand href="/" className="brand">
            BiblioIA
          </Navbar.Brand>
          <Nav>
            <Link to="/helper" className="nav-link">
              HelperIA
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
