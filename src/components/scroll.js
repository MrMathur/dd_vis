import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Scroll extends Component {

  constructor() {
  }
  
  hideLabels() {
    d3.selectAll('.label')
      .attr('opacity', 0);
  }
  
  render() {
    return(<></>);
  }
}