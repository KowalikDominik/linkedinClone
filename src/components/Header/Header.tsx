import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Logo } from "../Logo/Logo";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <Navbar translate="no" expand="sm" className="header" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} className="option text-center" to="/join">
              <Button variant="outline-secondary" className="join">
                Dołącz teraz
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} className="option text-center" to="/">
              <Button variant="outline-primary" className="login">
                Zaloguj się
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
