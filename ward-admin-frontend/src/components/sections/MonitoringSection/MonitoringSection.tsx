import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ListItem, Card, Icon, Table, TableRow } from "react-uikit-ward";

import useProducts from "../../../hooks/useProducts";

// 색션 props 타입
type MonitoringSection = {};

// 섹션 Styled Components
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

// 섹션 정적 BLOCK and UNIT
const totalBenefitLeading = (
  <Icon icon="moneyBag" color="#56D9FE" bgColor="#56D9FE"></Icon>
);
const totalBenefitTrailing = <Icon icon="menu"></Icon>;

const monthlyBenefitLeading = (
  <Icon icon="cart" color="#A4A1FB" bgColor="#A4A1FB"></Icon>
);
const monthlyBenefitTrailing = <Icon icon="menu"></Icon>;

const growthRateLeading = (
  <Icon icon="trendUp" color="#4AD991" bgColor="transparent"></Icon>
);
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

const TableHead = (
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
);

// 기타 변수
const upperCardWidth = "450px";

const MonitoringSection = ({}: MonitoringSection) => {
  // 섹션 State
  const products = useProducts();

  

  const ProductRows = products.map(product => {
    console.log(product);
    return (
      <TableRow
        cellList={[
          {
            type: "picture",
            data: [product.imageResource, product.name]
          },
          {
            type: "text",
            data: product.categoryName
          },
          {
            type: "price",
            data: product.price
          },
          {
            type: "stock",
            data: product.amount
          },
          {
            type: "date",
            data: product.createdDate
          }
        ]}
      />
    );
  });

  return (
    <Fragment>
      <h1 style={{ margin: "0px 0px 40px 0px" }}>Products</h1>
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
            {TableHead}
            {ProductRows}
          </Table>
          <Link to="/productManage">상품 전체 보기</Link>
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
