import React, {FC, SVGAttributes} from "react";
import classNames from "classnames";
import * as d3 from "d3";
import {Data} from "../../store";
import {useStore} from "../../hooks";
import {Bar} from "../";

export interface Props extends SVGAttributes<SVGGElement> {
  /** No Childrens allowed */
  children?: never;
}

export const Bars: FC<Props> = ({...rest}) => {
  const {
    state: {data, margin},
  } = useStore();

  return (
    <g {...rest}>
      {data.map((d: any, i: string) => (
        <Bar key={i} data={d} index={i} />
      ))}
    </g>
  );
};
