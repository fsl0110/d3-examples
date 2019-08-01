import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import * as d3 from "d3";
import { useSelector } from "react-redux";
import { AppState, Data, Dimension, Margin } from "../../store/initialState";

export interface AreaProps extends SVGAttributes<SVGPathElement> {
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
  color = "aqua",
  type = "curveMonotoneX",
  opacity = 0.3,
  strokeColor = "aqua",
  strokeWidth = 0,
  className
}) => {
  const data = useSelector<AppState, Data>(state => state.data.CHART);
  const scales = useSelector<AppState, any>(state => state.scales.CHART);
  const dimension = useSelector<AppState, Dimension>(
    state => state.dimension.CHART
  );
  const margin = useSelector<AppState, Margin>(state => state.margin.CHART);

  const area = d3
    .area()
    .x((d: Data) => scales.x(d[0]))
    .y0(dimension.height - margin.top - margin.bottom)
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
