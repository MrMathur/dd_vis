import React from "react";
import ScrollMagic from "scrollmagic";
import * as d3 from "d3";

const YELLOW = "#FFE767";
const ORANGE = "#CA5A09";
const LIGHT_BLUE = "#BCDFFF";
const DARK_BLUE = "#285ADA";
const TEXT = "#374151";

const COS_30 = 0.8660254037;
const SIN_30 = 0.5;

export default class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  createHexagon(x, y, r, content = "", type = "ablebodied") {
    let points = [
      [0, 0 + r],
      [0 + r * COS_30, 0 + r * SIN_30],
      [0 + r * COS_30, 0 - r * SIN_30],
      [0, 0 - r],
      [0 - r * COS_30, 0 - r * SIN_30],
      [0 - r * COS_30, 0 + r * SIN_30],
    ];

    let pathOfLine = d3.line()(points);

    let hexagon = this.svg
      .append("g")
      .attr("class", "hexagon")
      .attr("transform", `translate(${x},${y})`);

    hexagon
      .append("path")
      .attr("class", "shape")
      .attr("fill", type == "disabled" ? ORANGE : YELLOW)
      .attr("d", pathOfLine);

    hexagon
      .append("text")
      .attr("class", "label")
      .text(content)
      .attr("transform", "translate(0,50)")
      .attr("text-anchor", "middle")
      .attr("font-size", 16)
      .attr("opacity", 0)
      .attr("fill", TEXT);
  }

  sceneZero() {
    this.sceneCount = 0;
    this.clearSVG();
    this.createHexagon(200, 400, 25, "50,000 able bodied individuals");
    this.createHexagon(
      1400,
      400,
      25,
      "50,000 individuals with a disability",
      "disabled"
    );
    this.hideLabels();
  }

  sceneOne() {
    if (this.sceneCount == 0) {
      this.clearSVG();
      this.createHexagon(200, 400, 25, "50,000 able bodied individuals");
      this.createHexagon(
        1400,
        400,
        25,
        "50,000 individuals with a disability",
        "disabled"
      );
      this.showLabels();
    } else if (this.sceneCount == 2) {
      this.svg
        .selectAll(".hexagon")
        .data([
          [200, 400],
          [1400, 400],
        ])
        .transition()
        .attr("transform", (d) => `translate(${d[0]}, ${d[1]})`);
      this.showLabels();
    }
    this.sceneCount = 1;
  }

  sceneTwo() {
    this.sceneCount = 2;
    this.hideLabels();

    this.svg
      .selectAll(".hexagon")
      .data([
        [200, 300],
        [200, 600],
      ])
      .transition()
      .attr("transform", (d) => `translate(${d[0]}, ${d[1]})`);
  }

  showLabels() {
    d3.selectAll(".label ").transition().attr("opacity", 1);
  }

  hideLabels() {
    d3.selectAll(".label ").transition().attr("opacity", 0);
  }

  clearSVG() {
    this.svg.selectAll(".hexagon").transition().remove();
  }

  componentDidMount() {
    this.svg = d3.select("#vis");
    this.sceneZero();
    this.addScenesToController();
  }

  addScenesToController() {
    new ScrollMagic.Scene({
      triggerElement: "#scene-1",
      triggerHook: 0.9,
    })
      .on("enter", () => this.sceneOne())
      .on("leave", () => this.sceneZero())
      .addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: "#scene-2",
      triggerHook: 0.9,
    })
      .on("enter", () => this.sceneTwo())
      .on("leave", () => this.sceneOne())
      .addTo(this.controller);
  }

  render() {
    return (
      <div className="w-full h-full fixed -z-10">
        <svg
          className="w-full max-h-full aspect-video"
          viewBox="0 0 1600 900"
          id="vis"
        ></svg>
      </div>
    );
  }
}
