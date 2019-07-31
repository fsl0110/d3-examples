import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { StyledDiv, StyleProps } from "./styles";

interface Props extends StyleProps {
  children?: string;
}

export type TextProps = Props & SVGAttributes<SVGTextElement>;

export const Text: FC<TextProps> = ({
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
    <foreignObject className="foreign">
      <StyledDiv
        className={classNames("text", className)}
        color={color}
        family={family}
        size={size}
        weight={weight}
        letterSpacing={letterSpacing}
        /*   textAnchor={textAnchor} */
        /*     fill={color} */
      >
        {children}
      </StyledDiv>
    </foreignObject>
  );
};
