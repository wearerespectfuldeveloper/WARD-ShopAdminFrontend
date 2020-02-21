import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import {
  Card,
  Table,
  TableRow,
  DropDown,
  Button,
  ButtonGroup
} from "react-uikit-ward";

type ProductManageSectionProps = {};

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderDiv = styled.div`
  display: felx;
  justify-content: space-between;
`

const DropDownDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`

const ProductManageSection = ({}: ProductManageSectionProps) => {
  return (
    <WrapperDiv>
      <HeaderDiv>
        <h1 style={{ margin: "0px 0px 40px 0px" }}>Products</h1>
        <DropDownDiv>
          <DropDown
            text="카테고리"
            items={[
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} }
            ]}
          ></DropDown>
          <DropDown
            text="카테고리"
            items={[
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} }
            ]}
          ></DropDown>
          <DropDown
            text="카테고리"
            items={[
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} }
            ]}
          ></DropDown>
          <DropDown
            text="카테고리"
            items={[
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} },
              { text: "DropDown", clickFunc: () => {} }
            ]}
          ></DropDown>
        </DropDownDiv>
      </HeaderDiv>
      <Card width="100%" title="상품 목록" backgroundColor="white">
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
          <Link to={"productDetail/:product"}><TableRow
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
          /></Link>
          <Link to="productDetail/:product"><TableRow
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
          /></Link>
          <Link to="productDetail/:product"><TableRow
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
          /></Link>
          <Link to="productDetail/:product"><TableRow
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
              { type: "stock", data: "60" },
              { type: "date", data: "2020-01-20" }
            ]}
          /></Link>
          <Link to="productDetail/:product"><TableRow
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
          /></Link>
        </Table>
      </Card>
    </WrapperDiv>
  );
};

export default ProductManageSection;
