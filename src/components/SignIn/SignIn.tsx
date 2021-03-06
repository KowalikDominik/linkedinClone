import React, { useState } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./SignIn.scss";
import { GoogleIcon } from "../GoogleIcon/GoogleIcon";
import { Input } from "../Input/input";
import bg from "../../assets/vector.jpg";

export const SignIn: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState<string[] | null>(null);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setEmailValid(true);
    setPasswordValid(true);
    if (form.checkValidity() === false) {
      const error = [];

      if (!form.email.checkValidity()) {
        error.push("Wpisz swój adres e-mail lub numer telefonu komórkowego.");
        form.email.focus();
        setEmailValid(false);
      } else if (!form.password.checkValidity()) {
        error.push("Wpisz swoje hasło.");
        form.password.focus();
        setPasswordValid(false);
      }
      setErrorMsg(error);
    } else alert("Zalogowany");
  };

  const googleLogin = () => {
    window.location.href = "http://www.google.pl";
  };

  return (
    <Container className="signin-container container">
      <Row>
        <Col md="6" xs="12">
          <div className="col-container mx-auto">
            <h1 className="headline">
              Witaj w swojej społeczności specjalistów
            </h1>
            {errorMsg &&
              errorMsg.map((i) => <p className="text-danger">{i}</p>)}
            <Container className="ms-md-0 form-container">
              <Form noValidate onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Input
                    required
                    type="email"
                    name="email"
                    invalid={!emailValid}
                    placeholder="Adres e-mail lub numer telefonu"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Input
                    required
                    type="password"
                    name="password"
                    invalid={!passwordValid}
                    placeholder="Hasło"
                  />
                </Form.Group>
                <p>
                  <a href="/" className="link-secondary">
                    Nie pamiętam hasła
                  </a>
                </p>
                <Button variant="primary" type="submit">
                  Zaloguj się
                </Button>
                <hr />
                <Button onClick={googleLogin} className="google">
                  <GoogleIcon />
                  Zaloguj się przez Google
                </Button>
              </Form>{" "}
              <div className="imgBg">
                <img src={bg} alt="" className="img-fluid" />
              </div>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
