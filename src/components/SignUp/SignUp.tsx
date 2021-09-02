import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../GoogleIcon/GoogleIcon";
import { Input } from "../Input/input";
import { Logo } from "../Logo/Logo";

import "./SignUp.scss";

interface Props {}

export const SignUp: React.FC<Props> = () => {
  const [validated, setValidated] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      alert("Zarejestrowany");
    }
    setValidated(true);
  };
  const googleLogin = () => {
    window.location.replace("https://www.google.com");
  };
  return (
    <div className="signup">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <Logo />
            <h2>Osiągnij sukces w życiu zawodowym</h2>
            <Form noValidate validated={validated} onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Input
                  type="email"
                  name="email"
                  label="Adres e-mail"
                  placeholder=""
                  required
                  feedback={{
                    type: "invalid",
                    msg: "Wpisz swój adres e-mail.",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Input
                  type="password"
                  name="password"
                  label="Hasło (co najmniej 6 znaków)"
                  placeholder=""
                  required
                  feedback={{ type: "invalid", msg: "Wpisz swoje hasło." }}
                />
              </Form.Group>
              <p className="legal">
                Klikając Wyraź zgodę i dołącz, wyrażasz zgodę na na warunki
                LinkedIn: Umowę użytkownika, Politykę ochrony prywatności i
                Zasady korzystania z plików cookie.
              </p>
              <Button variant="primary" type="submit">
                Wyraź zgodę i dołącz
              </Button>
              <hr />
              <Button onClick={googleLogin} className="google">
                <GoogleIcon />
                Dołącz przez Google
              </Button>
              <p className="login-link">
                Masz już konto na LinkedIn?{" "}
                <Link to="/">
                  <a href="/">Zaloguj się</a>
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
