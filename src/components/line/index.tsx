import React, { FC, SVGAttributes } from "react";
import * as d3 from "d3";
import { Data } from "../types";

export interface LineProps extends SVGAttributes<SVGPathElement> {
  /** Pass Data for calculations. */
  data: any; // TODO: Replace by generic

  /** Pass Scales for calculations. */
  scales: { x: any; y: any }; // TODO: Replace by generic

  /**
   * Define a color for the line
   * @default aqua
   */
  color?: string;

  /**
   * Define a style for the line
   * @default undefined
   */
  dash?: string;

  /**
   * Define a width for the line
   * @default undefined
   */
  width?: number;

  /**
   * Define a type for the line
   * @default curveMonotoneX
   */
  lineType?:
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

export const Line: FC<LineProps> = ({
  data,
  scales,
  color = "aqua",
  dash,
  width = 2,
  lineType = "curveMonotoneX"
}) => {
  const lineGenerator = d3
    .line()
    .x((d: Data) => scales.x(d[0]))
    .y((d: Data) => scales.y(d[1]))
    .curve(d3[lineType]);

  return (
    <path
      className="line"
      d={lineGenerator(data) || ""}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeDasharray={dash}
    />
  );
};
