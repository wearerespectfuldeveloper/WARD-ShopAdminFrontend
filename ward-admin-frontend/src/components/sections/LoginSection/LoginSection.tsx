import React, { Fragment } from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

import { Button, ButtonGroup, Form, Input } from "react-uikit-ward";

type LoginSectionProps = {
  template?: React.ReactNode;
};

const LoginSection = ({}: LoginSectionProps) => {
  const StyledDiv = styled.div`
    display: flex;
    height: 100vh;
    .form {
      margin: auto;
    }
  `;

  const ImgDiv = styled.div`
    width: 50%;
    background-image: url(${require("assets/img/ward-login.jpg")});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;

  type ResultFormProps = {
    guide: string;
    body: JSX.Element,
    footer: JSX.Element
  }

  const ResultForm = ({ guide, body, footer }: ResultFormProps) => {
    return (
      <Form
        className="form"
        title="WARD"
        subTitle={guide}
        bodyElements={body}
        footerElements={footer}
      ></Form>
    );
  };

  const loginForm = {
    body: (
      <Fragment>
        <Input inputType="text" inputPlaceHolder="아이디"></Input>
        <Input inputType="text" inputPlaceHolder="비밀번호"></Input>
      </Fragment>
    ),
    footer: (
      <ButtonGroup>
        <Button>
          <Link to="login/register">로그인</Link>
        </Button>
        <Button theme="secondary">회원가입</Button>
      </ButtonGroup>
    )
  };

  const registerForm = {
    body: (
      <Fragment>
        <Input inputType="text" inputPlaceHolder={"유저 이름"} />
        <Input inputType="text" inputPlaceHolder={"이메일"} disabled={false} />
        <Input inputType="text" inputPlaceHolder={"아이디"} disabled={false} />
        <Input inputType="text" inputPlaceHolder={"패스워드"} />
        <Input inputType="text" inputPlaceHolder={"패스워드 확인"} />
      </Fragment>
    ),
    footer: (
      <ButtonGroup gap="2.5rem">
        <Button>
          <Link to="login/verify">회원가입</Link>
        </Button>
      </ButtonGroup>
    )
  };

  const verifyForm = {
    body: <Input inputType="text" inputPlaceHolder={"인증 코드"} />,
    footer: (
      <ButtonGroup gap="2.5rem">
        <Button>회원가입</Button>
      </ButtonGroup>
    )
  };

  const LoginForm = ResultForm({
    guide: "We Are Resfectful Developers",
    body: loginForm.body,
    footer: loginForm.footer
  });
  
  const RegisterForm = ResultForm({
    guide: "회원 정보를 입력해주세요",
    body: registerForm.body,
    footer: registerForm.footer
  });

  const VerifyForm = ResultForm({
    guide: "이메일로 전송된 인증번호를 입력해주세요",
    body: verifyForm.body,
    footer: verifyForm.footer
  });

  return (
    <StyledDiv>
      <ImgDiv></ImgDiv>
      <Route
        path="/login"
        component={LoginForm}
      />
      <Route
        path="/login/register"
        component={RegisterForm}
      />
      <Route
        path="/login/verify"
        component={VerifyForm}
      />
    </StyledDiv>
  );
};

export default LoginSection;
