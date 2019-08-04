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
import Context from "../../store/context";
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
  const [state, dispatch] = useReducer(chartReducer, initialState);

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

  if (!state.data.length) {
    return null;
  }

  return (
    <Context.Provider value={{ state, dispatch }}>
      <StyledDiv {...rest}>
        <svg
          width={state.dimension.width + 40}
          height={state.dimension.height + 40}
        >
          <g transform={`translate(${state.margin.left}, ${state.margin.top})`}>
            {children}
          </g>
        </svg>
      </StyledDiv>
    </Context.Provider>
  );
};
