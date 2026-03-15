// Data loader for TV energy consumption data

let tvData = [];

d3.csv('data/Ex6_TVdata.csv', d => ({
    brand: d.brand,
    model: d.model,
    screenSize: +d.screenSize,
    screenTech: d.screenTech,
    energyConsumption: +d.energyConsumption,
    star: +d.star
})).then(data => {
    tvData = data;
    console.log('Data loaded:', tvData.length, 'records');
    console.log('Sample data:', tvData.slice(0, 5));

    // Initialize the visualization
    drawHistogram(tvData);
    drawScatterplot(tvData);
    populateFilters();
    createTooltip();
    handleMouseEvents();
}).catch(error => {
    console.error('Error loading data:', error);
});