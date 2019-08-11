import {Dimension, Margin, AxisLabelAlign} from "../../store";

export function useAxisLabel(align: AxisLabelAlign, dimension: Dimension, margin: Margin) {
  let transform: string;
  let textAnchor: string;

  switch (align) {
    case "verticalTop":
      transform = `translate(${-60}, ${0}) rotate(-90)`;
      textAnchor = "end";
      break;
    case "horizontalRight":
      transform = `translate(${dimension.width - margin.right}, ${40})`;
      textAnchor = "end";
      break;
    case "verticalCenter":
      transform = `translate(${-60}, ${dimension.height / 2}) rotate(-90)`;
      textAnchor = "middle";
      break;
    case "horizontalCenter":
      transform = `translate(${dimension.width / 2}, ${40})`;
      textAnchor = "middle";
      break;
    case "verticalBottom":
      transform = `translate(${-60}, ${dimension.height - margin.bottom}) rotate(-90)`;
      textAnchor = "start";
      break;
    case "horizontalLeft":
      transform = `translate(${0}, ${40})`;
      textAnchor = "start";
      break;
    default:
      transform = "";
      textAnchor = "";
      break;
  }

  return [transform, textAnchor];
}
