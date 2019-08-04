import React, { FC, SVGAttributes, ReactNode } from "react";
import * as d3 from "d3";
import { Data } from "../../store";
import { useStore } from "../../hooks";

interface TooltipProps extends SVGAttributes<SVGGElement> {
  children: ReactNode | ReactNode[];
}

export const Tooltip: FC<TooltipProps> = ({ children, ...rest }) => {
  const {
    state: { data, dimension, scale, tooltip },
    dispatch
  } = useStore();

  let bisectMouseValue = d3.bisector((d: Data) => d[0]).left;

  return (
    <g transform={`translate(20,20)`} {...rest}>
      <rect
        width={dimension.width}
        height={dimension.height}
        opacity="0"
        onMouseMove={e => {
          const mouseValue = scale.x.invert(e.nativeEvent.offsetX);
          const i = bisectMouseValue(data, mouseValue, 0, data.length);

          if (data[i] !== data) {
            dispatch({ type: "SET_TOOLTIP", value: data[i] });
          }
        }}
        onMouseOut={() => {
          dispatch({ type: "SET_TOOLTIP", value: [] });
        }}
      />
      {tooltip.length && (
        <g className="tooltip">
          {React.Children.map(children, child =>
            React.cloneElement(child as never, { tooltip: [tooltip] })
          )}
        </g>
      )}
    </g>
  );
};
