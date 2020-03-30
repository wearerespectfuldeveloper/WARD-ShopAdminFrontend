import React, { useEffect } from "react";
import useProducts from "../../../hooks/useProducts";
import useCategories from '../../../hooks/useCategories'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getCurrentDate } from "../../../util";
import "./ProductManageSection.scss";

import {
  Card,
  Table,
  TableRow,
  DropDown,
  ClickableIcon,
  Button
} from "react-uikit-ward";

type ProductManageSectionProps = {};

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1.6rem;
`;

const DropDownDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  > * {
    margin-left: 15px;
  }
`;

const ProductManageSection = ({}: ProductManageSectionProps) => {
  // 섹션 State
  const productsStore = useProducts();

  const categoriesStore = useCategories();
  useEffect(() => {
    categoriesStore.loadCategories();
  }, []);


  const productsList = productsStore.products.data.map(item => {
    return (
      <TableRow
        className="product-table"
        key={item.idx}
        cellList={[
          {
            type: "extra",
            data: (
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Link to={`/productDetail/${item.idx}`}><ClickableIcon icon="pencil"></ClickableIcon></Link>
                <ClickableIcon icon="close"></ClickableIcon>
              </div>
            )
          },
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

  const emptyProductObj = {
    name: "",
    categoryIdx: 1,
    description: "",
    price: 0,
    stockQuantity: 0,
  };

  const addButton = (
    <Button onClick={() => productsStore.createProducts(emptyProductObj)}>상품 추가</Button>
  );

  const TableBody = <tbody style={{ display: "block" }}>{productsList}</tbody>;

  return (
    <WrapperDiv className="_product-management-section">
      <HeaderDiv>
        <div className="header">
          <h1>Products</h1>
        </div>
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
      <Card title="상품 목록" backgroundColor="white" sideContent={addButton}>
        <Table>
          <thead style={{ display: "block" }}>
            <TableRow
              className="product-table"
              type="head"
              cellList={[
                { type: "text", data: "" },
                { type: "text", data: "상품" },
                { type: "text", data: "설명" },
                { type: "text", data: "가격" },
                { type: "text", data: "등록날짜" }
              ]}
            />
          </thead>

          {TableBody}
        </Table>
      </Card>
    </WrapperDiv>
  );
};

export default ProductManageSection;
