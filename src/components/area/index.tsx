import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import * as d3 from "d3";
import { Data, SharedProps } from "../types";

export interface AreaProps extends SharedProps, SVGAttributes<SVGPathElement> {
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
  if (!scales || !dim || !data) {
    return null;
  }

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
      fillOpacity={opacity}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      d={area(data) || undefined}
    />
  );
};
