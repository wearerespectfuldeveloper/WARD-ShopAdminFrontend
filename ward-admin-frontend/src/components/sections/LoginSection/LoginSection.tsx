import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, ButtonGroup, Form, Input } from "react-uikit-ward";

type LoginSectionProps = {
  mode: "login" | "register" | "verify";
};

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

const inputWidth = '400px';

const bodies = {
  login: (
    <Fragment>
      <Input inputType="text" width={inputWidth} inputPlaceHolder="아이디"></Input>
      <Input inputType="text" width={inputWidth} inputPlaceHolder="비밀번호"></Input>
    </Fragment>
  ),
  register: (
    <Fragment>
      <Input inputType="text" width={inputWidth} inputPlaceHolder={"유저 이름"} />
      <Input inputType="text" width={inputWidth} inputPlaceHolder={"이메일"} disabled={false} />
      <Input inputType="text" width={inputWidth} inputPlaceHolder={"아이디"} disabled={false} />
      <Input inputType="text" width={inputWidth} inputPlaceHolder={"패스워드"} />
      <Input inputType="text" width={inputWidth} inputPlaceHolder={"패스워드 확인"} />
    </Fragment>
  ),
  verify: <Input inputType="text" width={inputWidth} inputPlaceHolder={"인증 코드"} />
};

const footers = {
  login: (
    <ButtonGroup>
      <Button>로그인</Button>
      <Button theme="secondary"><Link to="/account/register">회원가입</Link></Button>
    </ButtonGroup>
  ),
  register: (
    <ButtonGroup gap="2.5rem">
      <Button><Link to="/account/verify" style={{color: 'white'}}>다음</Link></Button>
    </ButtonGroup>
  ),
  verify: (
    <ButtonGroup gap="2.5rem">
      <Button><Link to="/" style={{color: 'white'}}>인증하기</Link></Button>
    </ButtonGroup>
  )
};

const LoginSection = ({ mode }: LoginSectionProps) => {
  return (
    <StyledDiv>
      <ImgDiv></ImgDiv>
      <Form
        className="form"
        title="WARD"
        subTitle="We Are Resfectful Developers"
        bodyElements={bodies[mode]}
        footerElements={footers[mode]}
      ></Form>
    </StyledDiv>
  );
};

export default LoginSection;
