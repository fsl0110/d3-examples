import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import * as d3 from "d3";
import { Data, Dimensions } from "../types";

export interface AreaProps extends SVGAttributes<SVGPathElement> {
  /** Pass Data for calculations. */
  data: any; // TODO: Replace by generic

  /** Pass Scales for calculations. */
  scales: { x: any; y: any }; // TODO: Replace by generic

  /** Pass Dimensions for calculations. */
  dim: Dimensions;

  /** Define a background color for the area.
   * @efault aqua
   */
  color?: string;

  /** Define a opacity for the background color of the area.
   * @default 0.3
   */
  opacity?: number;

  /** Define a stroke color for the area.
   * @default aqua
   */
  strokeColor?: string;

  /** Define a stroke width for the area.
   * @default 0
   */
  strokeWidth?: number;

  /** Define a type for the area.
   * @default curveMonotoneX
   */
  type?:
    | "curveLinear"
    | "curveStep"
    | "curveStepBefore"
    | "curveStepAfter"
    | "curveBasis"
    | "curveCardinal"
    | "curveMonotoneX"
    | "curveCatmullRom";

  /** No Childrens allowed */
  children?: never;
}

export const Area: FC<AreaProps> = ({
  data,
  scales,
  dim,
  color = "aqua",
  type = "curveMonotoneX",
  opacity = 0.3,
  strokeColor = "aqua",
  strokeWidth = 0,
  className
}) => {
  const area = d3
    .area()
    .x((d: Data) => scales.x(d[0]))
    .y0(dim.height - dim.margin.top - dim.margin.bottom)
    .y1((d: Data) => scales.y(d[1]))
    .curve(d3[type]);

  return (
    <path
      className={classNames("area", className)}
      fill={color}
      fill-opacity={opacity}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      d={area(data) || undefined}
    />
  );
};
