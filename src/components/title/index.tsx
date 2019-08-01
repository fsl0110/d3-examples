import React, { FC, SVGAttributes, useReducer } from "react";
import classNames from "classnames";
import { initialState, chartReducer } from "../../store";
import { Text, TextProps } from "..";

interface Props extends SVGAttributes<SVGGElement> {
  /** Pass Title Text as children shown as title. */
  children: string;
}

export type TitleProps = Props & TextProps;

export const Title: FC<TitleProps> = ({ className, children, ...rest }) => {
  const [store] = useReducer(chartReducer, initialState);

  return (
    <g
      transform={`translate(${store.dimension.width / 2}, ${store.margin.top})`}
      {...rest}
    >
      <Text
        className={classNames("chart-title", className)}
        text-anchor="middle"
        weight={700}
        size={16}
        {...rest}
      >
        {children}
      </Text>
    </g>
  );
};
