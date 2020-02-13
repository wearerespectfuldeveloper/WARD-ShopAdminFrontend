import React from "react";
import { RouteComponentProps } from "react-router-dom";

import ProductManageSection from "../../components/sections/ProductManageSection/ProductManageSection";

interface MatchParams {
  mode: "login" | "register" | "verify";
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const LoginPage = ({ match }: MatchProps) => {
  const mode: "login" | "register" | "verify" = match.params.mode;

  return <LoginSection mode={mode}></LoginSection>;
};

export default LoginPage;
