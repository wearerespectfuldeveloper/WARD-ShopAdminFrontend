import React, { Fragment } from "react";
import styled from "styled-components";

import { ListItem, Card, Icon, Table, TableRow } from "react-uikit-ward";

type MonitoringSection = {
  template?: React.ReactNode;
};

const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1.75rem;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;

  > h1 {
    margin: 0px;
  }
`;

const ColumnFlexDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  div {
    margin-top: 0.625rem;
  }
`;

const MonitoringSection = ({}: MonitoringSection) => {
  const totalBenefitLeading = <Icon icon="moneyBag" color="#56D9FE" bgColor="#56D9FE"></Icon>;
  const totalBenefitTrailing = <Icon icon="menu"></Icon>;

  const monthlyBenefitLeading = <Icon icon="cart" color="#A4A1FB" bgColor="#A4A1FB"></Icon>;
  const monthlyBenefitTrailing = <Icon icon="menu"></Icon>;

  const growthRateLeading = <Icon icon="trendUp" color="#4AD991" bgColor="transparent"></Icon>;
  const growthRateTrailing = <Icon icon="menu"></Icon>;

  const totalBenefitContent = (
    <ContentDiv>
      <h1>$50,000</h1>
      <span>총 수익</span>
    </ContentDiv>
  );

  const monthlyBenefitContent = (
    <ContentDiv>
      <h1>$1,250</h1>
      <span>월 수익</span>
    </ContentDiv>
  );

  const growthRateContent = (
    <ContentDiv>
      <h1>+2.0%</h1>
      <span>성장률</span>
    </ContentDiv>
  );

  const upperCardWidth = "450px";

  return (
    <Fragment>
      <WrapperDiv>
        <Card width={upperCardWidth} backgroundColor="white">
          <ListItem
            theme="light"
            border="none"
            leading={totalBenefitLeading}
            trailing={totalBenefitTrailing}
          >
            {totalBenefitContent}
          </ListItem>
        </Card>
        <Card width={upperCardWidth} backgroundColor="white">
          <ListItem
            theme="light"
            border="none"
            leading={monthlyBenefitLeading}
            trailing={monthlyBenefitTrailing}
          >
            {monthlyBenefitContent}
          </ListItem>
        </Card>
        <Card width={upperCardWidth} backgroundColor="white">
          <ListItem
            theme="light"
            border="none"
            leading={growthRateLeading}
            trailing={growthRateTrailing}
          >
            {growthRateContent}
          </ListItem>
        </Card>
      </WrapperDiv>
      <WrapperDiv>
        <Card title="판매 현황" width="968px" backgroundColor="white">
          <Table>
            <TableRow
              type="head"
              cellList={[
                { type: "text", data: "상품" },
                { type: "text", data: "카테고리" },
                { type: "text", data: "가격" },
                { type: "text", data: "재고상태" },
                { type: "text", data: "등록날짜" }
              ]}
            />
            <TableRow
              cellList={[
                {
                  type: "picture",
                  data: [
                    "https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
                    "자바 티셔츠"
                  ]
                },
                { type: "text", data: "티셔츠" },
                { type: "price", data: "29300" },
                { type: "stock", data: "10" },
                { type: "date", data: "2020-01-20" }
              ]}
            />
            <TableRow
              cellList={[
                {
                  type: "picture",
                  data: [
                    "https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
                    "자바 티셔츠"
                  ]
                },
                { type: "text", data: "티셔츠" },
                { type: "price", data: "29300" },
                { type: "stock", data: "200" },
                { type: "date", data: "2020-01-20" }
              ]}
            />
            <TableRow
              cellList={[
                {
                  type: "picture",
                  data: [
                    "https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
                    "자바 티셔츠"
                  ]
                },
                { type: "text", data: "티셔츠" },
                { type: "price", data: "29300" },
                { type: "stock", data: "0" },
                { type: "date", data: "2020-01-20" }
              ]}
            />
          </Table>
        </Card>
        <Card title="개요" width="450px" backgroundColor="white">
          <ColumnFlexDiv>
            <ListItem
              leading={totalBenefitLeading}
              trailing={"290 명"}
              theme="light"
              border="none"
            >
              현재 회원
            </ListItem>
            <ListItem
              leading={totalBenefitLeading}
              trailing={"490 개"}
              theme="light"
              border="none"
            >
              총 판매된 상품
            </ListItem>
            <ListItem
              leading={totalBenefitLeading}
              trailing={"120 개"}
              theme="light"
              border="none"
            >
              현재 판매중인 상품
            </ListItem>
            <ListItem
              leading={totalBenefitLeading}
              trailing={"490 개"}
              theme="light"
              border="none"
            >
              재고 부족
            </ListItem>
            <ListItem
              leading={totalBenefitLeading}
              trailing={"42 개"}
              theme="light"
              border="none"
            >
              재고 없음
            </ListItem>
          </ColumnFlexDiv>
        </Card>
      </WrapperDiv>
    </Fragment>
  );
};

export default MonitoringSection;
