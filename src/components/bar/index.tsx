import React, { FC, useRef, useEffect, SVGAttributes, useReducer } from "react";
import classNames from "classnames";
import { initialState, chartReducer, Data } from "../../store";
import * as d3 from "d3";

export interface BarProps extends SVGAttributes<SVGGElement> {
  /** No Childrens allowed */
  children?: never;
}

export const Bar: FC<BarProps> = ({ ...rest }) => {
  const el = useRef<SVGGElement>(null);
  const [store] = useReducer(chartReducer, initialState);

  useEffect(() => {
    d3.select(el.current)
      .selectAll("rect")
      .data(store.data)
      .enter()
      .append("rect")
      .attr("x", (d: Data) => store.scale.x(d[0]))
      .attr("y", store.dimension.height - store.margin.bottom)
      .attr("width", store.scale.x.bandwidth())
      .style("fill", "aqua")
      .transition()
      .duration(300)
      .ease(d3.easePolyInOut)
      .attr("y", (d: Data) => store.scale.y(d[1]))
      .attr(
        "height",
        (d: Data) =>
          store.dimension.height - store.scale.y(d[1]) - store.margin.bottom
      );

    d3.select(el.current)
      .selectAll("text")
      .data(store.data)
      .enter()
      .append("text")
      .attr("x", (d: Data) => store.scale.x(d[0]) + store.margin.left)
      .attr("y", store.dimension.height - store.margin.bottom - 5)
      .transition()
      .duration(300)
      .ease(d3.easePolyInOut)
      .text((d: Data) => d[1].toString())
      .attr("y", (d: Data) => store.scale.y(d[1]) - 5)
      .style("fill", "red")
      .style("font-size", "14px")
      .style("font-family", "arial")
      .attr("text-anchor", "middle");
  }, [store.data, store.scale, store.dimension, store.margin]);

  return <g className={classNames("bar", classNames)} ref={el} {...rest} />;
};
