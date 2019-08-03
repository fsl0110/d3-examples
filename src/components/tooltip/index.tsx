import React, { FC, SVGAttributes } from "react";
import * as d3 from "d3";
import { Data } from "../../store";
import { Text } from "../../components";
import { useStore } from "../../hooks";

interface TooltipProps extends SVGAttributes<SVGGElement> {
  children: string;
}

export const Tooltip: FC<TooltipProps> = ({ children, ...rest }) => {
  const {
    state: { data, dimension, scale, tooltip },
    dispatch
  } = useStore();

  let bisectMouseValue = d3.bisector((d: Data) => d[0]).left;

  return (
    <g {...rest}>
      <rect
        width={dimension.width}
        height={dimension.height}
        opacity="0"
        onMouseMove={e => {
          const mouseValue = scale.x.invert(e.nativeEvent.offsetX);
          const i = bisectMouseValue(data, mouseValue, 1, data.length);
          if (data[i - 1] !== data) {
            dispatch({ type: "SET_TOOLTIP", value: data[i - 1] });
          }
        }}
        onMouseOut={() => {
          dispatch({ type: "SET_TOOLTIP", value: [] });
        }}
      />
      {tooltip.length && <Text>{children}</Text>}
    </g>
  );
};
