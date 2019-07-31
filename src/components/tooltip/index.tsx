import React, { FC, useState, SVGAttributes } from "react";
import * as d3 from "d3";
import { Dimensions } from "../types";
import { Values, Cross, Marker } from "..";

interface TooltipPorps extends SVGAttributes<SVGGElement> {
  /** Pass Data for calculations. */
  data: any; // TODO: Replace by generic

  /** Pass Scales for calculations. */
  scales: any; // TODO: Replace by generic

  /** Pass Dimesions for calculations */
  dim: Dimensions;
}

export const Tooltip: FC<TooltipPorps> = ({ data, scales, dim }) => {
  /** CurrentData is one DataSet of the data array. */
  const [currentData, setCurrentData] = useState([]);

  let bisectMouseValue = d3.bisector((d: any) => d[0]).right;

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
      {currentData.length && (
        <>
          <Values data={[currentData]} scales={scales} />
          <Marker data={[currentData]} scales={scales} />
          <Cross
            data={[currentData]}
            scales={scales}
            dim={dim}
            full={true}
            color="red"
          />
        </>
      )}
    </g>
  );
};
