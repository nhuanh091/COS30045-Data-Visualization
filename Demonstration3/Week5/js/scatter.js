// Scatter plot: Energy consumption vs Star rating
d3.csv('data/Ex5_TV_energy.csv', d => ({
  brand: d.brand,
  screenTech: d.screen_tech,
  screenSize: +d.screensize,
  energy: +d.energy_consumpt,
  star: +d.star2,
  count: +d.count
})).then(data => {
  const margin = { top: 20, right: 30, bottom: 60, left: 60 };
  const width = 500 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3.select('#scatter-chart')
    .append('svg')
    .attr('class', 'chart-svg')
    .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.star))
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.energy))
    .range([height, 0]);

  // Add axes
  svg.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append('g')
    .call(d3.axisLeft(y));

  // Add axis labels
  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('x', width / 2)
    .attr('y', height + margin.bottom - 10)
    .text('Star Rating');

  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', -margin.left + 15)
    .text('Energy Consumption (kWh/year)');

  // Add points
  svg.selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', d => x(d.star))
    .attr('cy', d => y(d.energy))
    .attr('r', 3)
    .attr('fill', 'steelblue')
    .attr('opacity', 0.7);
}).catch(console.error);