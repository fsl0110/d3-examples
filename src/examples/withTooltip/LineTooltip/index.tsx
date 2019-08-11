import React, {FC} from "react";
import styled from "styled-components";
import {axiosOpenFDA, openFDA} from "../../../data/rest/openFDA";
import {Chart, DrawZone, Line, Axis, Marker, Area, Cross, Tooltip, Values} from "../../../components";

const StyledDiv = styled.div`
  width: 100%;
`;

export const LineTooltip: FC = () => (
  <StyledDiv>
    <Chart
      fetch={axiosOpenFDA(openFDA.foodEnforcementReports(""))}
      scaleX="scaleTime"
      scaleY="scaleLinear"
      dimension={{width: 760, height: 460}}
    >
      <DrawZone>
        <Line />
        <Area />
      </DrawZone>
      <Tooltip>
        <Values />
        <Cross hideY={true} />
        <Marker />
      </Tooltip>
      <Axis align="axisLeft" />
      <Axis align="axisBottom" />
    </Chart>
  </StyledDiv>
);
