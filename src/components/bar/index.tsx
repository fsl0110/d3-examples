import React, {FC, useRef, useEffect, SVGAttributes} from "react";
import classNames from "classnames";
import * as d3 from "d3";
import {Data} from "../../store";
import {useStore} from "../../hooks";

export interface BarProps extends SVGAttributes<SVGGElement> {
  /** No Childrens allowed */
  children?: never;
}

export const Bar: FC<BarProps> = ({...rest}) => {
  const el = useRef<SVGGElement>(null);
  const {
    state: {data, dimension, margin, scale},
  } = useStore();

  useEffect(() => {
    d3.select(el.current)
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: Data) => scale.x(d[0]))
      .attr("y", dimension.height - margin.bottom)
      .attr("width", scale.x.bandwidth())
      .style("fill", "aqua")
      .transition()
      .duration(300)
      .ease(d3.easePolyInOut)
      .attr("y", (d: Data) => scale.y(d[1]))
      .attr("height", (d: Data) => dimension.height - scale.y(d[1]) - margin.bottom);

    d3.select(el.current)
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d: Data) => scale.x(d[0]) + margin.left) // tslint:disable-line
      .attr("y", dimension.height - margin.bottom - 5)
      .transition()
      .duration(300)
      .ease(d3.easePolyInOut)
      .text((d: Data) => d[1].toString())
      .attr("y", (d: Data) => scale.y(d[1]) - 5)
      .style("fill", "red")
      .style("font-size", "14px")
      .style("font-family", "arial")
      .attr("text-anchor", "middle");
  }, [data, scale, dimension, margin]);

  return <g className={classNames("bar", classNames)} ref={el} {...rest} />;
};
