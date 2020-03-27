import React from "react";
import styled from "styled-components";

import MonitoringSection from "../../components/sections/MonitoringSection/MonitoringSection";

type DashboardPageProps = {
  template: React.ReactNode;
};

const WrapperDiv = styled.div`
  background-color: #f0f0f7;
  padding: 3.125rem 4.6875rem;
  height: 100%;

  @media screen and (max-width: 1020px) {
    padding: 1.5rem;
  }
`;

const DashboardPage = ({}: DashboardPageProps) => {
  return (
    <WrapperDiv>
      <MonitoringSection></MonitoringSection>
    </WrapperDiv>
  );
};

export default DashboardPage;
