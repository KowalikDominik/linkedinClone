import React, { useState } from "react";

import { Button, Container, Form } from "react-bootstrap";
import "./SignIn.scss";
import { GoogleIcon } from "../GoogleIcon/GoogleIcon";
import { Input } from "../Input/input";

export const SignIn: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState<string[] | null>(null);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      const error = [];
      setEmailValid(true);
      setPasswordValid(true);
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
    window.location.replace("https://www.google.com");
  };

  return (
    <div className="signin">
      <Container>
        <h1 className="headline">Witaj w swojej społeczności specjalistów</h1>
        <div className="form-container">
          {errorMsg && errorMsg.map((i) => <p className="text-danger">{i}</p>)}
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
          </Form>
        </div>
      </Container>
    </div>
  );
};
