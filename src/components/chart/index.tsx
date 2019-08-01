import React, {
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useReducer
} from "react";
import {
  initialState,
  chartReducer,
  Dimension,
  Margin,
  Data,
  Scale
} from "../../store";

import { StyledDiv, StyleProps } from "./styles";

interface ChartProps extends StyleProps, HTMLAttributes<HTMLDivElement> {
  /** Define scales for your Chart */
  scale: Scale;

  /** Pass in Data from outside */
  data?: Data;

  /** Override default dimensions with your individual dimensions */
  dimension?: Dimension;

  /** Override default margins with your individual margins */
  margin?: Margin;
  /** Wether the error indicator should be shown. */
  hasError?: boolean;

  /** Wether the loading indicator should be shown. */
  isLoading?: boolean;

  /** Children is mandantory */
  children: ReactNode | ReactNode[];
}

export const Chart: FC<ChartProps> = ({
  data,
  dimension,
  margin,
  scale,
  children,
  ...rest
}) => {
  const [store, dispatch] = useReducer(chartReducer, initialState);

  useEffect(() => {
    data && dispatch({ type: "SET_DATA", payload: data });
  }, [data]);

  useEffect(() => {
    dimension && dispatch({ type: "SET_DIMENSION", dimension });
  }, [dimension]);

  useEffect(() => {
    margin && dispatch({ type: "SET_MARGIN", margin });
  }, [margin]);

  useEffect(() => {
    scale && dispatch({ type: "SET_SCALE", scale });
  }, [scale]);

  return (
    <StyledDiv {...rest}>
      <svg width={store.dimension.width} height={store.dimension.height}>
        <g transform={`translate(${store.margin.left}, ${store.margin.top})`}>
          {children}
        </g>
      </svg>
    </StyledDiv>
  );
};
