import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { Text, TextProps } from "..";
import { Dimensions } from "../types";

interface Props extends SVGAttributes<SVGGElement> {
  /** Pass Dimensions for calculations. */
  dim: Dimensions;

  /** Define an alignment to position the label. */
  align:
    | "verticalTop"
    | "verticalCenter"
    | "verticalBottom"
    | "horizontalLeft"
    | "horizontalCenter"
    | "horizontalRight";

  /** Define a text as children shown as label for an axis. */
  children: string;
}

export type AxisLabelProps = Props & TextProps;

export const AxisLabel: FC<AxisLabelProps> = ({
  dim,
  align,
  letterSpacing,
  className,
  children,
  ...rest
}) => {
  let transform: string;
  let textAnchor: string;

  switch (align) {
    case "verticalTop":
      transform = `translate(${-60}, ${0}) rotate(-90)`;
      textAnchor = "end";
      break;
    case "horizontalRight":
      transform = `translate(${dim.width - dim.margin.right}, ${40})`;
      textAnchor = "end";
      break;
    case "verticalCenter":
      transform = `translate(${-60}, ${dim.height / 2}) rotate(-90)`;
      textAnchor = "middle";
      break;
    case "horizontalCenter":
      transform = `translate(${dim.width / 2}, ${40})`;
      textAnchor = "middle";
      break;
    case "verticalBottom":
      transform = `translate(${-60}, ${dim.height -
        dim.margin.bottom}) rotate(-90)`;
      textAnchor = "start";
      break;
    case "horizontalLeft":
      transform = `translate(${0}, ${40})`;
      textAnchor = "start";
      break;
    default:
      transform = "";
      textAnchor = "";
  }

  return (
    <g transform={transform}>
      <Text
        className={classNames("axis-label", className)}
        textAnchor={textAnchor}
        {...rest}
      >
        {children}
      </Text>
    </g>
  );
};
