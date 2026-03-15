// Scatterplot drawing function

function drawScatterplot(data) {
    // Clear existing chart
    d3.select('#scatterplot').selectAll('*').remove();

    // Set up the chart area
    const svg = d3.select('#scatterplot')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Reference to inner chart for tooltips
    innerChartS = svg;

    // Set up x and y scales
    const xMax = d3.max(data, d => d.energyConsumption);
    const yMax = d3.max(data, d => d.star);

    xScaleS = d3.scaleLinear()
        .domain([0, xMax])
        .range([0, width]);

    yScaleS = d3.scaleLinear()
        .domain([0, yMax])
        .range([height, 0]);

    // Set up colour scale
    colorScale = d3.scaleOrdinal()
        .domain(['LCD', 'LED', 'OLED'])
        .range(['#1f77b4', '#ff7f0e', '#2ca02c']); // Blue, Orange, Green

    // Draw circles
    svg.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', d => xScaleS(d.energyConsumption))
        .attr('cy', d => yScaleS(d.star))
        .attr('r', 5)
        .attr('fill', d => colorScale(d.screenTech))
        .attr('opacity', 0.5);

    // Add bottom axis
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScaleS));

    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + 40)
        .style('text-anchor', 'middle')
        .text('Energy Consumption (kWh/year)');

    // Add left axis
    svg.append('g')
        .call(d3.axisLeft(yScaleS));

    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -40)
        .style('text-anchor', 'middle')
        .text('Star Rating');

    // Add legend
    const legend = svg.append('g')
        .attr('transform', `translate(${width - 100}, 20)`);

    const legendData = ['LCD', 'LED', 'OLED'];

    legend.selectAll('rect')
        .data(legendData)
        .join('rect')
        .attr('x', 0)
        .attr('y', (d, i) => i * 20)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', d => colorScale(d));

    legend.selectAll('text')
        .data(legendData)
        .join('text')
        .attr('x', 20)
        .attr('y', (d, i) => i * 20 + 12)
        .text(d => d)
        .style('font-size', '12px');
}