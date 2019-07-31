import React, { FC } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import moment from "moment";
import _ from "lodash";
import { Dimensions } from "../../components/types";
import { Axis, Line, Tooltip, Values, Cross, Marker } from "../../components";

const StyledDiv = styled.div`
  svg {
  }
`;

interface Props {
  data: any;
}

export const Chart: FC<Props> = ({ data }) => {
  /* const [ref, size] = useComponentSize(); */
  const groupedByYear = _.groupBy(data, (item: any) =>
    moment(item.x, "YYYYMMDD").format("YYYY")
  );
  const countedByYears = Object.entries(groupedByYear).map((year: any) => {
    return [year[0], _.sumBy(year[1], (item: any) => item.y)];
  });
  const newData = countedByYears;
  const outerHight = 500;
  const outerWidth = 800;
  const margin = { top: 20, right: 20, bottom: 20, left: 40 };
  const width = outerWidth - margin.left * 2 - margin.right;
  const height = outerHight - margin.top - margin.bottom;

  const d: Dimensions = {
    width,
    height,
    margin
  };

  const xMin = Math.min(...newData.map((d: any) => d[0]));
  const xMax = Math.max(...newData.map((d: any) => d[0]));
  const yMax = Math.max(...newData.map((d: any) => d[1]));

  const y = d3
    .scaleLinear()
    .domain([0, yMax])
    .range([height - margin.top, 0]);

  const x = d3
    .scaleTime()
    .domain([xMin, xMax])
    .range([0, width - margin.right]);

  const scales = { x, y };

  return (
    <StyledDiv>
      <svg className="chart" width={outerWidth} height={outerHight}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <Line data={newData} scales={scales} />
            <Tooltip data={newData} scales={scales} dim={d}>
              <Values />
              {/*       <Marker /> */}
              {/*     <Cross /> */}
            </Tooltip>
          </g>
          <g transform={`translate(${margin.left}, ${0})`}>
            <Axis
              scale={y}
              align="axisLeft"
              dim={d}
              tickSize={-width + 20}
              tickStyle="2.2"
              tickSizeOuter={0}
              tickPadding={10}
              hideAxisLine={true}
            />
          </g>
          <g transform={`translate(${margin.left}, ${height - margin.bottom})`}>
            <Axis
              scale={x}
              align="axisBottom"
              dim={d}
              axisWidth="6"
              tickSize={0}
              tickPadding={15}
            />
          </g>
        </g>
      </svg>
    </StyledDiv>
  );
};
