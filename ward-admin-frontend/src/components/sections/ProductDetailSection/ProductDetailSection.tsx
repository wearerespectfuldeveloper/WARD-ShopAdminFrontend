import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Card, Table, TableRow, Button } from "react-uikit-ward";

type ProductDetailSectionProps = {};

const WrapperDiv = styled.div`
  display: flex;
`;

const ProductInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const SideContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const ProductDetailInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const sideContent = (
  <SideContentDiv>
    <div>
      <span>전체 남은 수량 : </span>
      <span>0</span>
    </div>
    <div>
      <span>기본 할인율 : </span>
      <span>0%</span>
    </div>
    <div>
      <span>카테고리 : </span>
      <span>상의</span>
    </div>
  </SideContentDiv>
);

const ProductDetailSection = ({}: ProductDetailSectionProps) => {
  return (
    <WrapperDiv>
      <Card
        backgroundColor="white"
        width="100%"
        title="상품 이름"
        sideContent={sideContent}
      >
        <ProductInfoDiv>
          <Table>
            <TableRow
              type="head"
              cellList={[
                { type: "text", data: "#" },
                { type: "text", data: "옵션" },
                { type: "text", data: "설명" },
                { type: "text", data: "할인율" },
                { type: "text", data: "가격" }
              ]}
            />
            <TableRow
              cellList={[
                { type: "text", data: "1" },
                { type: "text", data: "기본" },
                { type: "text", data: "상품 설명" },
                { type: "text", data: "0%" },
                { type: "text", data: "20000" }
              ]}
            />
            <TableRow
              cellList={[
                { type: "text", data: "1" },
                { type: "text", data: "기본" },
                { type: "text", data: "상품 설명" },
                { type: "text", data: "0%" },
                { type: "text", data: "20000" }
              ]}
            />
            <TableRow
              cellList={[
                { type: "text", data: "1" },
                { type: "text", data: "기본" },
                { type: "text", data: "상품 설명" },
                { type: "text", data: "0%" },
                { type: "text", data: "20000" }
              ]}
            />
            <AddButtonDiv>
              <Button iconOnly size="small" theme="tertiary">
                +
              </Button>
            </AddButtonDiv>
          </Table>
        </ProductInfoDiv>
      </Card>
    </WrapperDiv>
  );
};

export default ProductDetailSection;
