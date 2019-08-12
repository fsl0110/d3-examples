import React, {FC, SVGAttributes} from "react";
import * as d3 from "d3";
import {Data, Curves} from "../../store";
import {useStore} from "../../hooks";

export interface LineProps extends SVGAttributes<SVGGElement> {
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
  lineType?: Curves;

  /** Childrens are not allowed */
  children?: never;
}

export const Line: FC<LineProps> = ({
  color = "aqua",
  dash,
  width = 2,
  lineType = "curveMonotoneX",
  children,
  ...rest
}) => {
  const {
    state: {scale, data},
  } = useStore();

  const lineGenerator = d3
    .line()
    .x((d: Data) => scale.x(d[0]))
    .y((d: Data) => scale.y(d[1]))
    .curve(d3[lineType]);

  return (
    <g {...rest}>
      <path
        className="line"
        d={lineGenerator(data) || ""}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeDasharray={dash}
      />
    </g>
  );
};
