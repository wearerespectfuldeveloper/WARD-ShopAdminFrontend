import React from "react";
import HolyGrailTemplate from '../../components/templates/HolyGrail/HolyGrail';
import styled from 'styled-components';

import MonitoringSection from '../../components/sections/MonitoringSection/MonitoringSection';

type DashboardPageProps = {
  template: React.ReactNode;
};

const WrapperDiv = styled.div`
  background-color: #F0F0F7;
  padding: 3.125rem 4.6875rem;
  height: 100%;

  > h1 {
    margin: 0px 0px 40px 0px;
  }
`



const DashboardPage = ({}: DashboardPageProps) => {
  return (
    <HolyGrailTemplate>
      <WrapperDiv>
        <h1>Products</h1>
        <MonitoringSection></MonitoringSection>
      </WrapperDiv>
    </HolyGrailTemplate>
  );
};

export default DashboardPage;
