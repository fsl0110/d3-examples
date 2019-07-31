import React, { FC, SVGAttributes, ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { StyledDiv, StyleProps } from "./styles";
import store from "../../store";

interface Props extends SVGAttributes<HTMLDivElement> {
  // optional option to pass datafetching mechanism
  // optional option to pass datas directly
  // optional height and with options e.g. to disable responsive by giving a fixed width
  // optional margin options
  // interface for more config from outside
  data: any;
  width?: number;
  height?: number;
  margin?: [number, number, number, number];
  children: ReactNode | ReactNode[];
}

export type ChartProps = Props & StyleProps;

export const Chart: FC<ChartProps> = ({
  data,
  width,
  height = 400,
  margin = [20, 20, 20, 20],
  children
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_DIMENSION" });
    dispatch({ type: "SET_MARGIN" });
  }, []);

  return (
    <Provider store={store}>
      <StyledDiv>
        <svg className="chart" width={width} height={height}>
          <g transform={`translate(${margin[2]}, ${margin[1]})`}>{children}</g>
        </svg>
      </StyledDiv>
    </Provider>
  );
};
