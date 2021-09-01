import React from "react";
import { Route } from "react-router-dom";

import { SignIn } from "../SignIn/SignIn";
import "./Content.scss";

export const Content: React.FC = () => {
  return (
    <div className="content">
      <Route exact path="/" component={SignIn} />
    </div>
  );
};
