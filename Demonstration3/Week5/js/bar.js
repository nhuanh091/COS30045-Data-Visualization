// Bar chart: Energy by screen technology (55-inch TVs)
d3.csv('data/Ex5_TV_energy_55inchtv_byScreenType.csv', d => ({
  tech: d.Screen_Tech,
  energy: +d['Mean(Labelled energy consumption (kWh/year))']
})).then(data => {
  const margin = { top: 20, right: 30, bottom: 60, left: 60 };
  const width = 500 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3.select('#bar-chart')
    .append('svg')
    .attr('class', 'chart-svg')
    .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand()
    .domain(data.map(d => d.tech))
    .range([0, width])
    .padding(0.2);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.energy)])
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
    .text('Screen Technology');

  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', -margin.left + 15)
    .text('Energy Consumption (kWh/year)');

  // Add bars
  svg.selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', d => x(d.tech))
    .attr('y', d => y(d.energy))
    .attr('width', x.bandwidth())
    .attr('height', d => height - y(d.energy))
    .attr('fill', 'steelblue');

  // Add value labels on bars
  svg.selectAll('.label')
    .data(data)
    .join('text')
    .attr('class', 'label')
    .attr('x', d => x(d.tech) + x.bandwidth() / 2)
    .attr('y', d => y(d.energy) - 5)
    .attr('text-anchor', 'middle')
    .text(d => d.energy.toFixed(0))
    .style('font-size', '12px');
}).catch(console.error);