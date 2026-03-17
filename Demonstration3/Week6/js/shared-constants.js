// Shared constants for the histogram visualization

// Chart dimensions and margins
const margin = { top: 20, right: 30, bottom: 60, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Colors
const bodyBackgroundColor = '#f4f4f4';
const barColor = 'steelblue';

// Bin generator for histogram
const binGenerator = d3.bin()
    .value(d => d.energyConsumption)
    .domain([0, 2700]) // Adjust based on data range
    .thresholds(20); // Number of bins

// Scales (to be used in histogram)
let xScale, yScale;

// Scales for scatterplot
let xScaleS, yScaleS;

// Inner chart reference for scatterplot tooltips
let innerChartS;

// Tooltip constants
const tooltipWidth = 180;
const tooltipHeight = 40;
const tooltipPadding = 5;

// Colour scale for scatterplot
let colorScale;

// Filter options for screen technology
const filters_screen = [
    { id: 'all', label: 'All', isActive: true },
    { id: 'LCD', label: 'LCD', isActive: false },
    { id: 'LED', label: 'LED', isActive: false },
    { id: 'OLED', label: 'OLED', isActive: false }
];