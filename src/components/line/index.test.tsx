import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import * as d3 from "d3";
import { XAxis, Props } from ".";

const width = 600;
const height = 500;
const margin = { top: 20, right: 0, bottom: 20, left: 0 };
const scale = d3
  .scaleTime()
  .domain([new Date(2010, 7, 1), new Date(2012, 7, 1)])
  .range([0, width]);

const testCases: Array<[string, Props]> = [
  ["default", { faux: true, width, height, margin, scale }],
  ["default", { faux: false, width, height, margin, scale }]
];

describe("<XAxis>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(mount(<XAxis {...options} />))).toMatchSnapshot();
    });
  });
});
