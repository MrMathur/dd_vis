import React from 'react';
import * as d3 from "d3";

const YELLOW = '#FFE767';
const ORANGE = '#CA5A09';
const LIGHT_BLUE = '#BCDFFF';
const DARK_BLUE = '#285ADA';
const TEXT = '#374151';

export default class Visualization extends React.Component {

  constructor(props) {
    super(props);
    this.COS_30 = 0.8660254037;
    this.SIN_30 = 0.5;
  }

  createHexagon(x, y, r, content = '', type = 'ablebodied') {
    let points = [
      [0, 0 + r],
      [0 + r * this.COS_30, 0 + r * this.SIN_30],
      [0 + r * this.COS_30, 0 - r * this.SIN_30],
      [0, 0 - r],
      [0 - r * this.COS_30, 0 - r * this.SIN_30],
      [0 - r * this.COS_30, 0 + r * this.SIN_30],
    ];
    
    let pathOfLine = d3.line()(points);

    let hexagon = this.svg
      .append('g')
      .attr('class', 'hexagon')
      .attr('transform', `translate(${x},${y})`);

    hexagon.append('path')
      .attr('class', 'shape')
      .attr('fill', (type == "disabled") ?  ORANGE : YELLOW)
      .attr('d', pathOfLine);

    hexagon.append('text')
      .attr('class', 'label')
      .text(content)
      .attr('transform', 'translate(0,50)')
      .attr('text-anchor', 'middle')
      .attr('font-size', 16)
      .attr('fill', TEXT);
  }

  componentDidMount() {
    this.svg = d3.select('#vis');
    this.createHexagon(200, 400, 25, "50,000 able bodied individuals");
    this.createHexagon(1400, 400, 25, "50,000 individuals with a disability", "disabled");
  }

  render() {
    return(
      <div className='w-full h-full fixed -z-10'>
        <svg className='w-full max-h-full aspect-video' viewBox='0 0 1600 900' id='vis'>
        </svg>
      </div>
    );
  }
}