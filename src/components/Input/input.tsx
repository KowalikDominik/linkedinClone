import React from "react";

import { Form } from "react-bootstrap";

import "./Input.scss";

interface Props {
  name: string;
  type: string;
  required?: boolean;
  label?: string;
  placeholder: string;
  invalid?: boolean;
  feedback?: {
    type: "invalid";
    msg: string;
  };
}

export const Input: React.FC<Props> = ({
  label,
  invalid,
  feedback,
  ...otherProps
}) => {
  return (
    <>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        className={`input ${invalid ? "danger" : ""}`}
        {...otherProps}
      />
      {feedback && (
        <Form.Control.Feedback type={feedback.type}>
          {feedback.msg}
        </Form.Control.Feedback>
      )}
    </>
  );
};
