import React, { Fragment } from "react";
import styled from "styled-components";

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

  const loginForm = {
    body: (
      <Fragment>
        <Input inputType="text" inputPlaceHolder="아이디"></Input>
        <Input inputType="text" inputPlaceHolder="비밀번호"></Input>
      </Fragment>
    ),
    footer: (
      <ButtonGroup>
        <Button>로그인</Button>
        <Button theme="secondary">회원가입</Button>
      </ButtonGroup>
    )
  };

  const registerForm = {
    body: (
      <Fragment>
        <Input
          inputType="text"
          inputPlaceHolder={"유저 이름"}
        />
        <Input inputType="text" inputPlaceHolder={"이메일"} disabled={false} />
        <Input inputType="text" inputPlaceHolder={"아이디"} disabled={false} />
        <Input
          inputType="text"
          inputPlaceHolder={"패스워드"}
        />
        <Input
          inputType="text"
          inputPlaceHolder={"패스워드 확인"}
        />
      </Fragment>
    ),
    footer: (
      <ButtonGroup gap="2.5rem">
        <Button>회원가입</Button>
      </ButtonGroup>
    )
  };

  const confirmForm = {
    body: (
      <Input
        inputType="text"
        inputPlaceHolder={"인증 코드"}
      />
    ),
    footer: (
      <ButtonGroup gap="2.5rem">
        <Button>회원가입</Button>
      </ButtonGroup>
    )
  };

  return (
    <StyledDiv>
      <ImgDiv></ImgDiv>
      <Form
        className="form"
        title="WARD"
        subTitle="We Are Resfectful Developers"
        bodyElements={loginForm.body}
        footerElements={loginForm.footer}
      ></Form>
    </StyledDiv>
  );
};

export default LoginSection;
