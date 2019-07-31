import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { StyledText, StyleProps } from "./styles";

interface Props extends StyleProps {
  /** Pass Text as prop to shown as label for axes. */
  text: string;
  /** No Childrens allowed */
  children?: never;
}

export type TextProps = Props & SVGAttributes<SVGTextElement>;

export const Text: FC<TextProps> = ({
  text,
  color = "#555",
  family,
  size,
  weight,
  letterSpacing,
  textAnchor,
  className,
  children
}) => {
  return (
    <StyledText
      className={classNames("text", className)}
      color={color}
      family={family}
      size={size}
      weight={weight}
      letterSpacing={letterSpacing}
      textAnchor={textAnchor}
      fill={color}
    >
      {text}
    </StyledText>
  );
};
