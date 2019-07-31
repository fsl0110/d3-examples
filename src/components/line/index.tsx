import React, { FC, SVGAttributes, ReactNode } from "react";
import * as d3 from "d3";
import { Data, SharedProps } from "../types";

export interface LineProps extends SharedProps, SVGAttributes<SVGGElement> {
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

  /** */
  children?: ReactNode | ReactNode[];
}

export const Line: FC<LineProps> = ({
  data,
  scales,
  dim,
  color = "aqua",
  dash,
  width = 2,
  lineType = "curveMonotoneX",
  children
}) => {
  if (!scales || !dim || !data) {
    return null;
  }

  const lineGenerator = d3
    .line()
    .x((d: Data) => scales.x(d[0]))
    .y((d: Data) => scales.y(d[1]))
    .curve(d3[lineType]);

  return (
    <g>
      <path
        className="line"
        d={lineGenerator(data) || ""}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeDasharray={dash}
      />
      {children &&
        React.Children.map(children, child =>
          React.cloneElement(child as never, {
            data,
            scales,
            dim
          })
        )}
    </g>
  );
};
