// Line chart: Spot power prices 1998-2024
d3.csv('data/Ex5_ARE_Spot_Prices.csv', d => ({
  year: +d.Year,
  qld: d['Queensland ($ per megawatt hour)'] ? +d['Queensland ($ per megawatt hour)'] : null,
  nsw: d['New South Wales ($ per megawatt hour)'] ? +d['New South Wales ($ per megawatt hour)'] : null,
  vic: d['Victoria ($ per megawatt hour)'] ? +d['Victoria ($ per megawatt hour)'] : null,
  sa: d['South Australia ($ per megawatt hour)'] ? +d['South Australia ($ per megawatt hour)'] : null,
  tas: d['Tasmania ($ per megawatt hour)'] ? +d['Tasmania ($ per megawatt hour)'] : null,
  snowy: d['Snowy ($ per megawatt hour)'] ? +d['Snowy ($ per megawatt hour)'] : null,
  average: +d['Average Price (notTas-Snowy)']
})).then(data => {
  const margin = { top: 20, right: 120, bottom: 60, left: 60 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3.select('#line-chart')
    .append('svg')
    .attr('class', 'chart-svg')
    .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.year))
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => Math.max(d.average, d.qld || 0, d.nsw || 0, d.vic || 0, d.sa || 0))])
    .range([height, 0]);

  // Add axes
  svg.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.format('d')));

  svg.append('g')
    .call(d3.axisLeft(y));

  // Add axis labels
  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('x', width / 2)
    .attr('y', height + margin.bottom - 10)
    .text('Year');

  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', -margin.left + 15)
    .text('Price ($ per MWh)');

  const line = d3.line()
    .x(d => x(d.year))
    .y(d => y(d.average))
    .defined(d => d.average != null);

  // Plot average line
  svg.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 2)
    .attr('d', line);

  // Add legend
  const legend = svg.append('g')
    .attr('transform', `translate(${width - 100}, 20)`);

  legend.append('line')
    .attr('x1', 0)
    .attr('x2', 20)
    .attr('y1', 0)
    .attr('y2', 0)
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 2);

  legend.append('text')
    .attr('x', 25)
    .attr('y', 0)
    .attr('dy', '0.35em')
    .text('Average Price')
    .style('font-size', '12px');
}).catch(console.error);