import React, { FC } from "react";
import styled from "styled-components";
import { FetchDispatch } from "../../components";
import { axiosOpenFDA, openFDA } from "../../data/rest/openFDA";
import { ChartStart } from "./chartStart";

const StyledDiv = styled.div`
  width: 100%;
`;

export const LineTooltip: FC = () => {
  return (
    <StyledDiv>
      <FetchDispatch fetch={axiosOpenFDA(openFDA.foodEnforcementReports(""))}>
        {(data: any) => <ChartStart data={data} />}
      </FetchDispatch>
    </StyledDiv>
  );
};
