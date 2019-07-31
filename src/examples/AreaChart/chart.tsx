import React, { FC } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import moment from "moment";
import _ from "lodash";
import { Dimensions } from "../../components/types";
import { Axis, Area } from "../../components";

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
    return [moment(year[0], "YYYY"), _.sumBy(year[1], (item: any) => item.y)];
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
            <Area data={newData} scales={scales} dim={d} opacity={0.3} />
          </g>
          <g transform={`translate(${margin.left}, ${0})`}>
            <Axis
              scales={y}
              align="axisLeft"
              dim={d}
              tickSize={-width + 20}
              tickSizeOuter={0}
              tickPadding={10}
              tickColor={"#ededed"}
              tickTextColor={"#777"}
              tickTextFamily={"serif"}
              hideAxisLine={true}
            />
          </g>
          <g transform={`translate(${margin.left}, ${height - margin.bottom})`}>
            <Axis
              scales={x}
              align="axisBottom"
              dim={d}
              tickSizeInner={-height + 20}
              tickSizeOuter={0}
              tickPadding={10}
              tickColor={"#ededed"}
              axisColor={"#777"}
              tickTextFamily={"serif"}
              tickTextColor={"#777"}
            />
          </g>
        </g>
      </svg>
    </StyledDiv>
  );
};
