// Donut chart: Energy by screen technology (all sizes)
d3.csv('data/Ex5_TV_energy_Allsizes_byScreenType.csv', d => ({
  tech: d.Screen_Tech,
  energy: +d['Mean(Labelled energy consumption (kWh/year))']
})).then(data => {
  const width = 400;
  const height = 400;
  const margin = 40;
  const radius = Math.min(width, height) / 2 - margin;

  const svg = d3.select('#donut-chart')
    .append('svg')
    .attr('class', 'chart-svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.tech))
    .range(d3.schemeCategory10);

  const pie = d3.pie()
    .value(d => d.energy);

  const arc = d3.arc()
    .innerRadius(radius * 0.5) // Donut hole
    .outerRadius(radius);

  const arcs = svg.selectAll('arc')
    .data(pie(data))
    .join('path')
    .attr('d', arc)
    .attr('fill', d => color(d.data.tech))
    .attr('stroke', 'white')
    .style('stroke-width', '2px');

  // Add labels
  svg.selectAll('text')
    .data(pie(data))
    .join('text')
    .text(d => `${d.data.tech}: ${d.data.energy.toFixed(0)} kWh`)
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .style('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('fill', 'white');
}).catch(console.error);