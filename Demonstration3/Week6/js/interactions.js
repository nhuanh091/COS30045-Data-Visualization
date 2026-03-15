// Interactions for filtering the histogram

function populateFilters() {
    const filterContainer = d3.select('#filters');

    // Create buttons
    const buttons = filterContainer.selectAll('button')
        .data(filters_screen)
        .join('button')
        .attr('class', d => d.isActive ? 'active' : '')
        .text(d => d.label)
        .on('click', function(event, d) {
            // Update active state
            filters_screen.forEach(f => f.isActive = false);
            d.isActive = true;

            // Update button classes
            filterContainer.selectAll('button')
                .attr('class', f => f.isActive ? 'active' : '');

            // Update histogram
            updateHistogram(d.id);
        });
}

function updateHistogram(filterId) {
    let filteredData = tvData;

    if (filterId !== 'all') {
        filteredData = tvData.filter(d => d.screenTech === filterId);
    }

    // Generate new bins
    const bins = binGenerator(filteredData);

    // Update scales
    const xDomain = [bins[0].x0, bins[bins.length - 1].x1];
    const yMax = d3.max(bins, d => d.length);

    xScale.domain(xDomain);
    yScale.domain([0, yMax]);

    // Update bars with transition
    const svg = d3.select('#chart svg g');

    svg.selectAll('rect')
        .data(bins)
        .join('rect')
        .attr('class', 'bar')
        .transition()
        .duration(500)
        .attr('x', d => xScale(d.x0))
        .attr('y', d => yScale(d.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)
        .attr('height', d => height - yScale(d.length))
        .attr('fill', barColor);

    // Update axes
    svg.select('.axis.bottom').remove();
    svg.select('.axis.left').remove();
    svg.selectAll('.axis-label').remove();

    svg.append('g')
        .attr('class', 'axis bottom')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

    svg.append('g')
        .attr('class', 'axis left')
        .call(d3.axisLeft(yScale));

    svg.append('text')
        .attr('class', 'axis-label')
        .attr('x', width / 2)
        .attr('y', height + 40)
        .style('text-anchor', 'middle')
        .text('Energy Consumption (kWh/year)');

    svg.append('text')
        .attr('class', 'axis-label')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -40)
        .style('text-anchor', 'middle')
        .text('Frequency');
}

// Tooltip functions for scatterplot
function createTooltip() {
    // Append tooltip to scatterplot innerChart
    const tooltip = innerChartS.append('g')
        .attr('id', 'tooltip')
        .style('opacity', 0);

    // Append background rectangle
    tooltip.append('rect')
        .attr('width', tooltipWidth)
        .attr('height', tooltipHeight)
        .attr('fill', barColor)
        .attr('rx', 5)
        .attr('ry', 5)
        .style('opacity', 0.8);

    // Append text
    tooltip.append('text')
        .attr('x', tooltipPadding)
        .attr('y', tooltipPadding + 15)
        .style('font-size', '12px')
        .style('fill', 'white')
        .text('Tooltip text');
}

function handleMouseEvents() {
    // Select all circles in scatterplot
    innerChartS.selectAll('circle')
        .on('mouseenter', function(event, d) {
            console.log('Mouse enter:', d);

            // Update tooltip text
            d3.select('#tooltip text')
                .text(`Energy: ${d.energyConsumption} kWh, Star: ${d.star}`);

            // Position tooltip
            const [x, y] = d3.pointer(event);
            d3.select('#tooltip')
                .attr('transform', `translate(${x + 10}, ${y - 10})`)
                .transition()
                .duration(200)
                .style('opacity', 1);
        })
        .on('mouseleave', function() {
            console.log('Mouse leave');

            // Hide tooltip
            d3.select('#tooltip')
                .transition()
                .duration(200)
                .style('opacity', 0)
                .attr('transform', 'translate(-1000, -1000)'); // Move off-screen
        });
}