// Histogram drawing function

function drawHistogram(data) {
    // Clear existing chart
    d3.select('#chart').selectAll('*').remove();

    // Set up the chart area
    const svg = d3.select('#chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Generate bins
    const bins = binGenerator(data);
    console.log('Bins:', bins);

    // Define scales
    const xDomain = [bins[0].x0, bins[bins.length - 1].x1];
    const yMax = d3.max(bins, d => d.length);

    xScale = d3.scaleLinear()
        .domain(xDomain)
        .range([0, width]);

    yScale = d3.scaleLinear()
        .domain([0, yMax])
        .range([height, 0]);

    // Draw bars
    svg.selectAll('rect')
        .data(bins)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.x0))
        .attr('y', d => yScale(d.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)
        .attr('height', d => height - yScale(d.length))
        .attr('fill', barColor);

    // Add bottom axis
    svg.append('g')
        .attr('class', 'axis bottom')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

    svg.append('text')
        .attr('class', 'axis-label')
        .attr('x', width / 2)
        .attr('y', height + 40)
        .style('text-anchor', 'middle')
        .text('Energy Consumption (kWh/year)');

    // Add left axis
    svg.append('g')
        .attr('class', 'axis left')
        .call(d3.axisLeft(yScale));

    svg.append('text')
        .attr('class', 'axis-label')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -40)
        .style('text-anchor', 'middle')
        .text('Frequency');
}