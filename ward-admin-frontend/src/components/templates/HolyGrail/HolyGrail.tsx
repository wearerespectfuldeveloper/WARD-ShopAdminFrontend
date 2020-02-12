import React from "react";
import styled from "styled-components";

import { SideBar, ListItem, Icon, PageHeader } from "react-uikit-ward";

type HolyGrailProps = {
  children: React.ReactNode;
};

const leading1 = <Icon icon="dashboard"></Icon>;
const leading2 = <Icon icon="products"></Icon>;
const leading3 = <Icon icon="customers"></Icon>;
const leading4 = <Icon icon="chatting"></Icon>;

const leftElement = <Icon icon="menu"></Icon>;
const rightElement = <Icon icon="customers"></Icon>;

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const HolyGrail = ({children}: HolyGrailProps) => {
  return (
    <Wrapper>
      <SideBar title="WARD" mode="normal" toggled={true} toggleAnimation="shrink">
        <ListItem leading={leading1}>판매 현황</ListItem>
        <ListItem leading={leading2} border="none">
          상품 관리 / 등록
        </ListItem>
        <ListItem leading={leading3} border="none">
          고객 정보 관리
        </ListItem>
        <ListItem leading={leading4} border="none">
          고객 문의 관리
        </ListItem>
      </SideBar>
      <Main>
        <PageHeader
          backgroundColor="white"
          leftElement={leftElement}
          rightElement={rightElement}
        />
        {children}
      </Main>
    </Wrapper>
  );
};

export default HolyGrail;
