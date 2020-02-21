import React from "react";
import styled from "styled-components";
import ProductDetailSection from "../../components/sections/ProductDetailSection/ProductDetailSection";

const WrapperDiv = styled.div`
  background-color: #f0f0f7;
  padding: 3.125rem 4.6875rem;
  height: 100%;

  > h1 {
    margin: 0px 0px 40px 0px;
  }
`;

const ProductDetailPage = ({}) => {
  return (
    <WrapperDiv>
      <ProductDetailSection></ProductDetailSection>
    </WrapperDiv>
  );
};

export default ProductDetailPage;
