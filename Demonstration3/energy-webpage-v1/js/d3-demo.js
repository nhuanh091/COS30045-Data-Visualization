// D3 demo for the energy webpage — responsive SVG container and test rectangle
if (typeof d3 === 'undefined') {
  console.warn('D3 not loaded — ensure https://d3js.org/d3.v7.min.js is included');
} else {
  // style header (small demonstrator)
  d3.select('h1').style('color', 'green');

  // create an SVG inside the responsive container
  const container = d3.select('.responsive-svg-container');
  if (container.empty()) {
    // fallback: append container to body if missing
    d3.select('body').append('div').attr('class', 'responsive-svg-container');
  }

  const svg = d3.select('.responsive-svg-container')
    .append('svg')
      .attr('viewBox', '0 0 1200 1600')
      .style('border', '1px solid black')
      .style('display', 'block')
      .style('margin', '12px auto');

  // add the test rectangle
  svg.append('rect')
    .attr('x', 10)
    .attr('y', 10)
    .attr('width', 414)
    .attr('height', 16)
    .attr('fill', 'blue');
}
