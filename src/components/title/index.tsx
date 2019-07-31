import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { Dimensions } from "../types";
import { Text, TextProps } from "..";

interface Props extends SVGAttributes<SVGGElement> {
  /** Pass Dimensions for calculations. */
  dim: Dimensions;

  /** Pass Title Text as children shown as title. */
  children: string;
}

export type TitleProps = Props & TextProps;

export const Title: FC<TitleProps> = ({
  dim,
  className,
  children,
  ...rest
}) => {
  return (
    <g transform={`translate(${dim.width / 2}, ${dim.margin.top})`}>
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
