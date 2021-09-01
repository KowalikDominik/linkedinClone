import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Logo } from "../Logo/Logo";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <nav className="header max-width">
      <Link to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/join">
          <Button variant="outline-secondary" className="join">
            Dołącz teraz
          </Button>
        </Link>
        <Link className="option" to="/">
          <Button variant="outline-primary" className="login">
            Zaloguj się
          </Button>
        </Link>
        <div className="option"></div>
        <div className="option"></div>
      </div>
    </nav>
  );
};
