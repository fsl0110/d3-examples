import React, {FC, SVGAttributes} from "react";
import classNames from "classnames";
import * as d3 from "d3";
import {Data} from "../../store";
import {useStore} from "../../hooks";

export interface Props extends SVGAttributes<SVGGElement> {
  data: [number, number];
  index: string;
  /** No Childrens allowed */
  children?: any;
}

export const Bar: FC<Props> = ({data, index, ...rest}) => {
  const {
    state: {dimension, margin, scale},
  } = useStore();

  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  // const format = d3.format(".2f");

  return (
    <g
      className={classNames("bar", classNames)}
      transform={`translate(${scale.x(data[0])}, ${scale.y(data[1])})`}
      {...rest}
    >
      <rect
        width={scale.x.bandwidth()}
        height={dimension.height - margin.bottom - margin.top - scale.y(data[1])}
        fill="aqua"
      />
      <text
        transform={`translate(${scale.x.bandwidth() / 2}, ${-2})`}
        textAnchor="middle"
        fontSize="14"
        fontFamily="arial"
      >
        {data[1]}
      </text>
    </g>
  );
};
