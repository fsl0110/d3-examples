import React, { FC, SVGAttributes, useReducer } from "react";
import classNames from "classnames";
import { Text, TextProps } from "..";
import { initialState, chartReducer, AxisLabelAlign } from "../../store";
import { useAxisLabel } from "../../hooks";

interface Props extends SVGAttributes<SVGGElement> {
  /** Define an alignment to position the label. */
  align: AxisLabelAlign;

  /** Define a text as children shown as label for an axis. */
  children: string;
}

export type AxisLabelProps = Props & TextProps;

export const AxisLabel: FC<AxisLabelProps> = ({
  align,
  letterSpacing,
  className,
  children,
  ...rest
}) => {
  const [store] = useReducer(chartReducer, initialState);
  const [transform, textAnchor] = useAxisLabel(
    align,
    store.dimension,
    store.margin
  );

  return (
    <g transform={transform} {...rest}>
      <Text
        className={classNames("axis-label", className)}
        textAnchor={textAnchor}
      >
        {children}
      </Text>
    </g>
  );
};
