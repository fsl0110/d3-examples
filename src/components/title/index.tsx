import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { SharedProps } from "../types";
import { Text, TextProps } from "..";

interface Props extends SharedProps, SVGAttributes<SVGGElement> {
  /** Pass Title Text as children shown as title. */
  children: string;
}

export type TitleProps = Props & TextProps;

export const Title: FC<TitleProps> = ({
  data,
  scales,
  dim,
  className,
  children,
  ...rest
}) => {
  if (!scales || !dim || !data) {
    return null;
  }

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
