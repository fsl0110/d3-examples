import React, {FC} from "react";
import styled from "styled-components";
import {axiosOpenFDA, openFDA} from "../../data/rest/openFDA";
import {Chart, DrawZone, Bars, Axis, Values} from "../../components";

const StyledDiv = styled.div`
  width: 100%;
`;

/**
 * The only true chart.
 *
 * @visibleName The Best Chart Ever 🐙
 */

export const BarChart: FC = () => (
  <StyledDiv>
    <Chart
      fetch={axiosOpenFDA(openFDA.foodEnforcementReports(""))}
      scaleX="scaleBand"
      scaleY="scaleLinear"
      dimension={{width: 760, height: 460}}
      margin={{top: 20, left: 20, bottom: 20, right: 20}}
    >
      <DrawZone>
        <Bars />
      </DrawZone>
      <Axis align="axisLeft" />
      <Axis align="axisBottom" />
    </Chart>
  </StyledDiv>
);
