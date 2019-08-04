import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { Text, TextProps } from "..";
import { useStore } from "../../hooks";

interface Props extends SVGAttributes<SVGGElement> {
  /** Pass Title Text as children shown as title. */
  children: string;
}

export type TitleProps = Props & TextProps;

export const Title: FC<TitleProps> = ({ className, children, ...rest }) => {
  const {
    state: { dimension, margin }
  } = useStore();

  return (
    <g transform={`translate(${dimension.width / 2}, ${margin.top})`} {...rest}>
      <Text
        className={classNames("chart-title", className)}
        text-anchor="middle"
        weight={700}
        size={16}
        {...rest}
      >
        {children}
      </Text>
    </g>
  );
};
