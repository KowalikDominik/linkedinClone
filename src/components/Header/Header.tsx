import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Logo } from "../Logo/Logo";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} className="option" to="/join">
              <Button variant="outline-secondary" className="join">
                Dołącz teraz
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} className="option" to="/">
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
