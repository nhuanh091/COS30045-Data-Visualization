// D3 demo for the energy webpage — load a CSV and prepare for a bar chart
if (typeof d3 === 'undefined') {
  console.warn('D3 not loaded, ensure https://d3js.org/d3.v7.min.js is included');
} else {
  // Exercise 2
  // d3.select('h1').style('color', 'green');

  // // create an SVG inside the responsive container
  // d3.select('div')
  //   .append("p")
  //    .text("Purchasing a low energy consumption TV will help with your energy bills!");

  // d3.select("svg")
  // .append("rect")
  // .attr("x", 50)
  //  .attr("y", 50)
  //  .attr("width", 100)
  //  .attr("height", 30)
  //  .style("fill", "green");

  const svg = d3.select(".responsive-svg-container")
    .append("svg")
      .attr("viewBox", "0 0 500 1600")
      .style("border", "1px solid black"); 

  // svg
  // .append("rect")
  //   .attr("x", 10)
  //   .attr("y", 10)
  //   .attr("width", 414)
  //   .attr("height", 16)
  //   .attr("fill", "blue");    

  // Load the CSV data and ensure numeric conversion of the energy column
  d3.csv("data/ex4_data.csv", d => {
    console.log(d); 
  }
  );
  d3.csv('data/ex4_data.csv', d => {
    return {
      brand: d.Brand_Reg,
      energy: +d.Labelled_Energy_Consumption
    };
  })
  .then(data => {
    // Inspect the loaded data in the browser console
    console.log(data);
    console.log(data.length);
    console.log(d3.max(data, d => d.energy));
    console.log(d3.min(data, d => d.energy));
    console.log(d3.extent(data, d => d.energy)); //=> array with min and max

    // Sort the data (highest energy first)
    data.sort((a, b) => d3.descending(a.energy, b.energy));

    // Call the visualisation builder
    createBarChart(data);
  })
  .catch(error => {
    console.error('Error loading CSV:', error);
  });

  // A starter function for later exercises. It is called once the data is loaded.
  const createBarChart = (data) => {
    const xScale = d3.scaleLinear()
    .domain([0, 1310])
    .range([0, 500]);

    const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 500])
    .padding(0.2);

    svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => {
      console.log(d);
      return `bar bar-${d.energy}`;
    })

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
      .attr('y', 12)
      .attr('height', d => yScale.bandwidth())
      .attr('width', d => xScale(d.energy))
      .attr('fill', 'steelblue');

    // Add the value label (energy count)
    barAndLabel
    .append("text")
    .text(d => d.energy)
    .attr("x", d => 100 + xScale(d.energy) + 20)
    .attr("y", 15)
    .style("font-family", "sans-serif")
    .style("font-size", "5px");
  };  
}
