import React, { FC } from "react";
import styled from "styled-components";
import { axiosOpenFDA, openFDA } from "../../../data/rest/openFDA";
import {
  Chart,
  DrawZone,
  Line,
  Axis,
  Marker,
  Area,
  Cross,
  Tooltip,
  Values
} from "../../../components";

const StyledDiv = styled.div`
  width: 100%;
`;

/**
 * The only true chart.
 *
 * @visibleName The Best Chart Ever 🐙
 */

export const Line1: FC = () => {
  return (
    <StyledDiv>
      <Chart
        fetch={axiosOpenFDA(openFDA.foodEnforcementReports(""))}
        scaleX="scaleTime"
        scaleY="scaleLinear"
        dimension={{ width: 760, height: 460 }}
      >
        <DrawZone>
          <Line />
          <Area />
        </DrawZone>
        <Axis align="axisLeft" />
        <Axis align="axisBottom" />
      </Chart>
    </StyledDiv>
  );
};
