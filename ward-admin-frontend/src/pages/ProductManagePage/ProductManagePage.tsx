import React from "react";
import styled from "styled-components";

import ProductManageSection from "../../components/sections/ProductManageSection/ProductManageSection";

const WrapperDiv = styled.div`
  background-color: #f0f0f7;
  padding: 3.125rem 4.6875rem;
  height: 100%;

  > h1 {
    margin: 0px 0px 40px 0px;
  }

  @media screen and (max-width: 1020px) {
    padding: 1.5rem;
  }
`;

const ProductManagePage = ({}) => {
  return (
    <WrapperDiv>
      <ProductManageSection></ProductManageSection>
    </WrapperDiv>
  );
};

export default ProductManagePage;
