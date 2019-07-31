import React, { FC, useState, SVGAttributes, ReactNode } from "react";
import * as d3 from "d3";
import { SharedProps } from "../types";

interface TooltipPorps extends SharedProps, SVGAttributes<SVGGElement> {
  children: ReactNode | ReactNode[];
}

export const Tooltip: FC<TooltipPorps> = ({ data, scales, dim, children }) => {
  /** CurrentData is one DataSet of the data array. */
  const [currentData, setCurrentData] = useState([]);

  if (!scales || !dim || !data) {
    return null;
  }

  let bisectMouseValue = d3.bisector((d: any) => d[0]).left;

  return (
    <g>
      <rect
        width={dim.width}
        height={dim.height}
        opacity="0"
        onMouseMove={e => {
          const mouseValue = scales.x.invert(e.nativeEvent.offsetX);
          const i = bisectMouseValue(data, mouseValue, 1, data.length);
          if (data[i - 1] !== data) {
            setCurrentData(data[i - 1]);
          }
        }}
        onMouseOut={() => {
          setCurrentData([]);
        }}
      />
      {currentData.length &&
        children &&
        React.Children.map(children, child =>
          React.cloneElement(child as never, {
            data: [currentData],
            scales,
            dim
          })
        )}
    </g>
  );
};
