import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import { getCurrentDate } from "../../../util";

import "./MonitoringSection.scss";

import { ListItem, Card, Icon, Table, TableRow } from "react-uikit-ward";

// 색션 props 타입
type MonitoringSection = {};

// 섹션 Styled Components
const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;

  > * {
    flex-grow: 1;
    margin: 10px;
  }
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
  <thead style={{display: "block"}}>
    <TableRow
      width="100%"
      key={2500}
      type="head"
      className="product-table"
      cellList={[
        { type: "text", data: "상품" },
        { type: "text", data: "가격" },
        { type: "text", data: "설명" },
        { type: "text", data: "등록날짜" }
      ]}
    />
  </thead>
);

const MonitoringSection = ({}: MonitoringSection) => {
  // 섹션 State
  const productsStore = useProducts();
  useEffect(() => {
    productsStore.loadProductsByCategoryIdx({
      categoryIdx: "13",
      createdDate: getCurrentDate()
    });
  }, []);

  const productsList = productsStore.products.data.map(item => {
    return (
      <TableRow
        className="product-table"
        key={item.idx}
        width="100%"
        cellList={[
          {
            type: "picture",
            data: { imageUrl: item.imageResource, title: item.name }
          },
          { type: "text", data: item.description },
          { type: "price", data: item.price },
          { type: "date", data: item.createdDate }
        ]}
      />
    );
  });

  const TableBody = <tbody style={{display: "block"}}>{productsList}</tbody>;

  return (
    <>
      {productsStore.products.loading && (
        <p style={{ textAlign: "center" }}>로딩중..</p>
      )}
      {productsStore.products.error && (
        <p style={{ textAlign: "center" }}>에러 발생!</p>
      )}
      {productsStore.products.data.length !== 0 && (
        <div className="monitoring-section">
          <h1 style={{ margin: "0px 0px 20px 10px" }}>Products</h1>
          <WrapperDiv>
            <Card className="card-item" backgroundColor="white">
              <ListItem
                theme="light"
                border="none"
                leading={totalBenefitLeading}
                trailing={totalBenefitTrailing}
              >
                {totalBenefitContent}
              </ListItem>
            </Card>
            <Card className="card-item" backgroundColor="white">
              <ListItem
                theme="light"
                border="none"
                leading={monthlyBenefitLeading}
                trailing={monthlyBenefitTrailing}
              >
                {monthlyBenefitContent}
              </ListItem>
            </Card>
            <Card className="card-item" backgroundColor="white">
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
              <Table width="100%">
                {TableHead}
                {TableBody}
              </Table>
              <div className="move-to-detail">
                <Link to="/productManage">상품 전체 보기</Link>
              </div>
            </Card>
            <Card title="개요" backgroundColor="white">
              <ColumnFlexDiv>
                <ListItem
                  key={1}
                  leading={totalBenefitLeading}
                  trailing={"290 명"}
                  theme="light"
                  border="none"
                >
                  현재 회원
                </ListItem>
                <ListItem
                  key={2}
                  leading={totalBenefitLeading}
                  trailing={"490 개"}
                  theme="light"
                  border="none"
                >
                  총 판매된 상품
                </ListItem>
                <ListItem
                  key={3}
                  leading={totalBenefitLeading}
                  trailing={"120 개"}
                  theme="light"
                  border="none"
                >
                  현재 판매중인 상품
                </ListItem>
                <ListItem
                  key={4}
                  leading={totalBenefitLeading}
                  trailing={"490 개"}
                  theme="light"
                  border="none"
                >
                  재고 부족
                </ListItem>
                <ListItem
                  key={5}
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
        </div>
      )}
    </>
  );
};

export default MonitoringSection;
