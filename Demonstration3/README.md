# GENAI Declaration Report for Demonstration3 Exercises (Weeks 4, 5, 6)

## Introduction
The purpose of using AI in this work was to accelerate the development of data visualization exercises for the COS30045 Data Visualization course. AI tools were employed to generate D3.js code snippets, HTML structures, and JavaScript functions for creating interactive charts and SVG graphics. This allowed for faster prototyping and implementation of complex visualizations while focusing on learning data visualization concepts and design principles.

## Tool Description
**GitHub Copilot**: An AI-powered code completion tool developed by GitHub that uses machine learning models to suggest code based on natural language prompts and existing code context. It integrates directly into code editors like VS Code and provides real-time code suggestions, function completions, and documentation assistance.

## Usage Details

### Week 4: SVG House & Garden Demo (Ex4.html)
**Prompts Used:**
- "Create an SVG house with roof, windows, and door using D3.js"
- "Add gradients for sky, wood, and lawn in D3.js SVG"
- "Generate D3.js code for trees, bushes, and flowers in SVG"
- "Add interactive hover effects to SVG elements with D3.js"

**Outputs Received:**
```javascript
// House structure
const house = svg.append('g').attr('transform','translate(180,170)');
house.append('rect').attr('x',0).attr('y',80).attr('width',300).attr('height',200).attr('fill','#f5f0e1').attr('stroke','#c9bba7').attr('stroke-width',2);
house.append('polygon').attr('points','-20,80 150,-20 320,80').attr('fill','#b22222').attr('stroke','#8b0000').attr('stroke-width',2);

// Gradient definitions
const sky = defs.append('linearGradient').attr('id', 'sky').attr('x1', '0%').attr('x2', '0%').attr('y1', '0%').attr('y2', '100%');
sky.append('stop').attr('offset', '0%').attr('stop-color', '#87CEEB');
sky.append('stop').attr('offset', '100%').attr('stop-color', '#E6F7FF');

// Interactive effects
house.select('polygon').on('mouseover',function(){ d3.select(this).attr('fill','#ff6347'); }).on('mouseout',function(){ d3.select(this).attr('fill','#b22222'); });
```

**Modifications Made:**
- Adjusted color schemes to match the garden theme
- Modified positioning and sizing of elements for better visual balance
- Added additional SVG shapes (fence, chimney) beyond the initial AI suggestions
- Customized gradient colors and opacity values for aesthetic appeal

### Week 5: TV Energy Consumption Charts (charts.html and associated JS files)
**Prompts Used:**
- "Create a D3.js scatter plot showing energy consumption vs star rating"
- "Generate D3.js donut chart code for screen technology energy data"
- "Write D3.js bar chart function for comparing TV technologies"
- "Create D3.js line chart for historical electricity prices"

**Outputs Received:**
```javascript
// Scatter plot setup
const x = d3.scaleLinear()
  .domain(d3.extent(data, d => d.star))
  .range([0, width]);

const y = d3.scaleLinear()
  .domain(d3.extent(data, d => d.energy))
  .range([height, 0]);

// Donut chart
const arc = d3.arc()
  .innerRadius(radius * 0.5)
  .outerRadius(radius * 0.8);

const pie = d3.pie()
  .value(d => d.value)
  .sort(null);

// Bar chart
svg.selectAll('rect')
  .data(data)
  .join('rect')
  .attr('x', d => x(d.category))
  .attr('y', d => y(d.value))
  .attr('width', x.bandwidth())
  .attr('height', d => height - y(d.value))
  .attr('fill', 'steelblue');
```

**Modifications Made:**
- Integrated data loading from CSV files with proper type conversion
- Added responsive design elements and CSS styling
- Customized color schemes and chart layouts for better readability
- Implemented proper axis labels and chart titles
- Added error handling for data loading failures

### Week 6: Interactive TV Energy Consumption Histogram (index.html and associated JS files)
**Prompts Used:**
- "Create an interactive D3.js histogram with filtering capabilities"
- "Generate D3.js code for linked scatterplot and histogram"
- "Write JavaScript for dynamic data filtering by screen technology"
- "Create shared constants and data loader functions for D3.js visualizations"

**Outputs Received:**
```javascript
// Histogram with bins
const bins = binGenerator(data);

svg.selectAll('rect')
  .data(bins)
  .join('rect')
  .attr('class', 'bar')
  .attr('x', d => xScale(d.x0))
  .attr('y', d => yScale(d.length))
  .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)
  .attr('height', d => height - yScale(d.length))
  .attr('fill', barColor);

// Interactive filtering
function updateCharts(filteredData) {
  drawHistogram(filteredData);
  drawScatterplot(filteredData);
}
```

**Modifications Made:**
- Restructured code into modular files (data-loader.js, histogram.js, etc.)
- Added CSS styling for better visual hierarchy
- Implemented cross-chart interactions and brushing functionality
- Enhanced data validation and error handling
- Added responsive design for mobile compatibility

## Reflection
The use of AI significantly accelerated the coding process, allowing me to focus more on the conceptual aspects of data visualization rather than getting bogged down in syntax details. GitHub Copilot helped me learn D3.js patterns and best practices by suggesting idiomatic code structures. However, it was crucial to understand the underlying concepts to effectively modify and integrate the AI-generated code. This experience demonstrated how AI can be a powerful tool for rapid prototyping while still requiring human oversight for customization, debugging, and ensuring code quality. The AI assistance enabled me to complete complex visualizations more efficiently, but the learning came from analyzing, modifying, and extending the generated code to meet specific requirements.

## Acknowledgment
Portions of the code in this project, particularly the D3.js visualization functions, SVG element creation, and interactive features, were generated with the assistance of GitHub Copilot. While the AI tool provided valuable code suggestions and accelerated development, all final implementations were reviewed, modified, and integrated by the human developer. The core concepts, data analysis, and design decisions remain the original work of the developer. No copyrighted or proprietary code was used without proper attribution.