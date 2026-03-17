# GenAI Declaration – Data Visualization Assignment (Weeks 5 & 6)

## 1. Introduction

The purpose of using Generative AI (GenAI) in this assignment was to support the development of interactive data visualisations using D3.js. Given the complexity of implementing multiple chart types, responsive layouts, and interactive features (such as filters and tooltips), GenAI tools were used to improve efficiency, provide coding guidance, and explain unfamiliar concepts.

The use of AI was focused on enhancing understanding and accelerating development rather than replacing learning.

## 2. Tool Description

The following GenAI tools were used:

* **ChatGPT (OpenAI)**: Used for generating code examples, debugging issues, explaining D3 concepts, and suggesting best practices for structuring visualisations.
* **Claude (Anthropic)**: Used to refine code structure, improve readability, and provide alternative implementations and explanations.

Both tools are large language models capable of generating human-like text and code based on user prompts.

## 3. Usage Details

### 3.1 Prompts Used

Careful prompting was used to ensure relevant, efficient, and high-quality outputs. Examples include:

* *“Generate a responsive D3.js scatter plot using CSV data with energy consumption vs star rating.”*
* *“Create a donut chart in D3 showing proportions of categories from CSV data, following best practices for color and labeling.”*
* *“How do I implement a histogram in D3 using d3.bin() with custom bin sizes?”*
* *“Help me add interactive filter buttons in D3 that update a chart based on category selection.”*
* *“Explain how to implement tooltips in a D3 scatter plot using mouse events.”*
* *“Suggest a modular file structure for a multi-chart D3 webpage with separate JS files.”*
* *“Improve this D3 code to follow best practices and make it more efficient.”*

These prompts were iterative and refined based on previous outputs to improve accuracy and relevance.


### 3.2 Outputs Received

The AI tools generated:

* D3.js code snippets for:

  * Scatter plots
  * Donut charts
  * Bar charts
  * Line charts
  * Histograms using `d3.bin()`
* Code for:

  * Responsive SVG layouts
  * Scales and axes
  * Color schemes
  * Tooltip creation using `mouseenter` and `mouseleave`
  * Interactive filter buttons
* Suggested HTML structure (`index.html`) and CSS styling
* Explanations of key D3 concepts such as:

  * Scales and domains
  * Data binding
  * Selections and joins
  * Event handling

### 3.3 Modifications Made

The AI-generated code was not used directly without changes. The following modifications were made:

* Adjusted variable names and structure to match assignment requirements
* Integrated code across multiple files (e.g., `shared-constants.js`, `interactions.js`, `scatterplot.js`)
* Modified chart dimensions and margins for responsiveness
* Customised color schemes to improve readability and visual design
* Refined bin sizes and scale domains for more meaningful data representation
* Fixed errors and bugs when integrating multiple charts on a single webpage
* Adapted tooltip positioning and formatting for better user experience
* Ensured consistency across charts (e.g., axes, spacing, layout)

## 4. Reflection

The use of GenAI significantly improved the efficiency of completing this assignment, especially when working with complex D3.js features such as histograms, filtering, and tooltips.

By interacting with AI tools, I was able to:

* Better understand how D3 handles data binding and transformations
* Learn different approaches to structuring visualisation code
* Debug issues more quickly
* Explore best practices in data visualisation design

However, it was necessary to critically evaluate AI-generated outputs, as some code required correction or adaptation to fit the assignment requirements.

Overall, GenAI acted as a learning assistant rather than a replacement for understanding, helping to deepen my knowledge of D3.js and interactive web visualisation.

## 5. Acknowledgment

This assignment includes code that was partially generated with the assistance of GenAI tools, specifically **ChatGPT (OpenAI)** and **Claude (Anthropic)**.

The generated code has been reviewed, modified, and integrated into the final solution. Therefore, the final submission is not entirely original and includes AI-assisted components.

All AI usage has been disclosed in accordance with academic integrity guidelines.

