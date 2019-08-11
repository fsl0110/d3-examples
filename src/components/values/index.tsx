import React, {FC, SVGAttributes} from "react";
import classNames from "classnames";
import {Data, Item} from "../../store";
import {useStore} from "../../hooks";
import {StyledText, StyleProps} from "./styles";

interface Props extends SVGAttributes<SVGGElement> {
  /**
   * Map tooltip instead of datas when Tooltip Component is parent of this component.
   * Tooltip values comes automatically from the parent Tooltip Component via cloneElement.
   */
  tooltip?: Item;
  /** No Childrens allowed */
  children?: never;
}

export type ValuesProps = Props & StyleProps;

export const Values: FC<ValuesProps> = ({tooltip, className}) => {
  const {
    state: {data, scale},
  } = useStore();

  const dataToMap = tooltip || data;

  return (
    <g className={classNames("values", className)}>
      {dataToMap.map((item: Data, i: number) => (
        <StyledText className="value" key={i} x={scale.x(item[0])} y={scale.y(item[1]) - 15} textAnchor="middle">
          {item[1]}
        </StyledText>
      ))}
    </g>
  );
};
