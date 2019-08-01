import React, { FC, SVGAttributes, ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { StyledDiv, StyleProps } from "./styles";
import store from "../../store";

interface Props extends SVGAttributes<HTMLDivElement> {
  // optional option to pass datafetching mechanism
  // optional interface for more config from outside
  data: any;
  width?: number;
  height?: number;
  margin?: [number, number, number, number];
  hasError?: boolean;
  isLoading?: boolean;
  xScale?: "scaleLinear" | "scaleTime" | "scaleOrdinal";
  yScale?: "scaleLinear" | "scaleTime" | "scaleOrdinal";
  scale?: string;
  children?: ReactNode | ReactNode[];
}

export type ChartProps = Props & StyleProps;

export const Chart: FC<ChartProps> = ({ children }) => {
  /*   const dispatch = useDispatch();
   */
  console.log("chart component");

  return (
    /*    <Provider store={store}> */
    <StyledDiv>
      {/*       <svg className="chart" width={width} height={height}>
        <g transform={`translate(${margin[2]}, ${margin[1]})`}>{children}</g>
      </svg> */}
    </StyledDiv>
    /*     </Provider> */
  );
};
