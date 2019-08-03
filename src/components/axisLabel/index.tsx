import React, { FC, SVGAttributes, useReducer } from "react";
import classNames from "classnames";
import { Text, TextProps } from "..";
import { AxisLabelAlign } from "../../store";
import { useAxisLabel, useStore } from "../../hooks";

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
  const {
    state: { dimension, margin }
  } = useStore();
  const [transform, textAnchor] = useAxisLabel(align, dimension, margin);

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
