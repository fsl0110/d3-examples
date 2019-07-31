import React, { FC, useEffect, useRef, SVGAttributes } from "react";
import * as d3 from "d3";
import classNames from "classnames";
import { SharedProps } from "../types";
import { StyledAxisG, StyleProps } from "./styles";
import { useAxis } from "../../hooks";

export interface AxisProps
  extends StyleProps,
    SharedProps,
    SVGAttributes<SVGGElement> {
  /** Alignment of the Axis and Ticks. */
  align: "axisLeft" | "axisRight" | "axisBottom" | "axisTop";

  /** Wether to show the axis line.
   * @default false
   */
  hideAxisLine?: boolean;

  // TODO: fix the issue with passing strings.
  /** Define the amount of tick shown on the axis.
   * @default undefined
   */
  ticks?: number;

  // TODO: Not working. Fix this issue.
  /** Define inividual tick values shown on the axis.
   * @default undefined
   */
  tickValues?: any;

  // TODO: check this out or remove it.
  /** Define inividual tick arguments.
   * @default undefined
   */
  tickArguments?: any;

  // TODO: test this.
  /** Define inividual tick format.
   * @default undefined
   */
  tickFormat?: any;

  /** Define a size for the ticks.
   * @default undefined
   */
  tickSize?: number;

  /** Define a size for the inner ticks.
   * @default undefined
   */
  tickSizeInner?: number;

  /** Define a size for the outer ticks.
   * @default undefined
   */
  tickSizeOuter?: number;

  /** Define a padding between tick line and tick text.
   * @default undefined
   */
  tickPadding?: number;

  /** Define a individual position for the tick text.
   * @default undefined
   */
  tickTextPosition?: [number, number];

  /** No Childrens allowed */
  children?: never;
}

export const Axis: FC<AxisProps> = ({
  data,
  scales,
  dim,
  align,
  hideAxisLine = false,
  ticks,
  tickValues,
  tickArguments,
  tickFormat,
  tickSize,
  tickSizeInner,
  tickSizeOuter,
  tickPadding,
  tickTextPosition,
  // style
  axisColor = "#b8b8b8",
  axisStyle,
  axisWidth,
  tickColor = "#b8b8b8",
  tickStyle,
  tickWidth,
  tickTextColor = "#b8b8b8",
  tickTextSize = 14,
  tickTextFamily = "inherit",
  className
}) => {
  const el = useRef<SVGGElement>(null);
  const [transform, scale] = useAxis(align, scales, dim);
  console.log(transform);

  useEffect(() => {
    // @ts-ignore
    const axis = d3[align]().scale(scale);

    // api options
    ticks && axis.ticks(ticks);
    tickValues && axis.tickValues(tickValues);
    tickArguments && axis.tickArguments(tickArguments);
    tickFormat && axis.tickFormat(tickFormat);
    (tickSize || tickSize === 0) && axis.tickSize(tickSize);
    (tickSizeInner || tickSizeInner === 0) && axis.tickSizeInner(tickSizeInner);
    (tickSizeOuter || tickSizeOuter === 0) && axis.tickSizeOuter(tickSizeOuter);
    (tickPadding || tickPadding === 0) && axis.tickPadding(tickPadding);

    const g = d3.select(el.current).call(axis);

    hideAxisLine && g.select(".domain").remove();

    tickTextPosition &&
      g
        .selectAll(".tick text")
        .attr("x", tickTextPosition[0])
        .attr("dy", tickTextPosition[1]);

    d3.select(".axis .tick:nth-child(1) text").remove();
  }, []);

  return (
    <StyledAxisG
      transform={transform}
      axisColor={axisColor}
      axisStyle={axisStyle}
      axisWidth={axisWidth}
      tickColor={tickColor}
      tickStyle={tickStyle}
      tickWidth={tickWidth}
      tickTextColor={tickTextColor}
      tickTextSize={tickTextSize}
      tickTextFamily={tickTextFamily}
      className={classNames("axis", className)}
      ref={el}
    />
  );
};
