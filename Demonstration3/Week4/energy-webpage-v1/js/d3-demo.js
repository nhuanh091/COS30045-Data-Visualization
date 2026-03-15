// D3 demo for the energy webpage — load a CSV and prepare for a bar chart
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
      .attr('viewBox', '0 0 500 1600')
      .style('border', '1px solid black')
      .style('display', 'block')
      .style('margin', '12px auto');

  // Load the CSV data and ensure numeric conversion of the energy column
  // (Column names must match exactly what is in the CSV file.)
  d3.csv('data/ex4_data.csv', d => {
    return {
      brand: d.Brand_Reg,
      energy: +d.Labelled_Energy_Consumption
    };
  })
  .then(data => {
    // Inspect the loaded data in the browser console
    console.log('raw data (first 10 rows):', data.slice(0, 10));
    console.log('row count:', data.length);
    console.log('max energy:', d3.max(data, d => d.energy));
    console.log('min energy:', d3.min(data, d => d.energy));
    console.log('extent [min, max]:', d3.extent(data, d => d.energy));

    // Sort the data (highest energy first)
    data.sort((a, b) => d3.descending(a.energy, b.energy));

    // Call the visualisation builder
    createBarChart(data);
  })
  .catch(error => {
    console.error('Error loading CSV:', error);
  });
}

// A starter function for later exercises. It is called once the data is loaded.
const createBarChart = (data) => {
  // Clear existing SVG content
  const svg = d3.select('.responsive-svg-container svg')
  .append("svg")
  .attr("viewBox", "0 0 500 1600")
  .style("border", "1px solid black");

  const xScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.energy)])
  .range([0, 500]);

  const yScale = d3.scaleBand()
 .domain(data.map(d => d.brand))
 .range([0, 500]);

  // Create a group per data row so the bar and its labels move together
  const barAndLabel = svg
  .selectAll("g")
  .data(data)
  .join("g")
  .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

  

  // Add the category label (brand name)
  barAndLabel
  .append("text")
  .text(d => d.brand)
  .attr("x", 50)
  .attr("y", 15)
  .attr("text-anchor", "end")
  .style("font-family", "sans-serif")
  .style("font-size", "5px");

  // Add the bars
  barAndLabel
    .append('rect')
    .attr('class', d => {
      console.log(d);
      return `bar bar-${d.energy}`;
    })
    .attr('x', 100)
    .attr('y', 15)
    .attr('height', d => yScale.bandwidth())
    .attr('width', d => xScale(d.energy))
    .attr('fill', 'steelblue');

  // Add the value label (energy count)
  barAndLabel
 .append("text")
 .text(d => d.energy)
 .attr("x", d => 100 + xScale(d.energy) + 20)
 .attr("y", 12)
 .style("font-family", "sans-serif")
 .style("font-size", "5px");
};
