# Exercise 2:

### Step 1: Answering questions with data

For each question answer the following questions:

- What data is needed to answer this question?
- What chart type would be good to represent this data and give some reasons?
- Draw a sketch of the chart
- Draw a sketch of the data table required to build the chart
    1. What type of TV screen technologies are currently available in Australia and which are the most frequent?
        
        
        | Column Name | Data Type | Description |
        | --- | --- | --- |
        | Screen_Tech | String | Type of TV screen technology (e.g. LCD, LED, OLED) |
        | Availability Status | String | Indicates whether the TV is currently available |
        | SubmitStatus | String | Indicates whether the TV registration is approved |
        | Tech_Count | Integer | Count of TV models per screen technology (derived using GroupBy) |
        | SoldIn | String | The countries where the product is registered for sale and may include Australia, New Zealand and/or Fiji |
        
        Chart type: **Bar chart**
        
        - Screen technology is a **categorical variable**
        - Bar charts clearly show **frequency comparisons**
        - Easy to see which technology dominates the market
        
        Sketch:
        
        ![image.png](attachment:ecefccba-ee86-4c37-bc98-754416c33b68:image.png)
        
        Data table:
        
        ![image.png](attachment:39ad06f9-b0f4-4ca1-a619-b2008607b870:image.png)
        
    2. What screen sizes are currently available, and which are the most frequent?
        
        
        | Column Name | Data Type | Description |
        | --- | --- | --- |
        | screensize | Double | Screen size measured in centimeters |
        | Screen_Size_Inches | Double | Screen size converted from centimeters to inches |
        | Screen_Size_Category | String | Advertised screen size group (e.g. 32", 40", 55") |
        | Availability Status | String | Filters to currently available models |
        | Size_Count | Integer | Number of TV models per screen size category (derived) |
        
        Chart type: **Bar chart**
        
        - Screen size categories are **discrete groups**
        - Bar chart shows **frequency of each size**
        - Easy for non-technical users to interpret
        
        Sketch: 
        
        ![image.png](attachment:ceb25fb9-deab-49bd-abb3-417b58214d30:image.png)
        
        Data Table:
        
        ![image.png](attachment:9705ca07-7627-4352-88d6-d98afd26baab:image.png)
        
    3. Which brands have the greatest number of different models?
        
        
        | Column Name | Data Type | Description |
        | --- | --- | --- |
        | Brand_Recognition | String | Standardised TV brand name |
        | Model_No | String | Unique TV model identifier |
        | Availability Status | String | Filters to currently available models |
        | **Model_Count** | Integer | Number of distinct TV models per brand (derived) |
        
        Chart type: **Horizontal bar chart**
        
        - Brand names are long text labels
        - Count field enables ranking
        - Horizontal bars improve readability
        
        Sketch:
        
        ![image.png](attachment:bcf9b0d6-fa6f-4265-a330-7541be4e05f3:image.png)
        
        Data Table:
        
        ![image.png](attachment:7378d773-a02b-4685-9507-773107fbcb8b:image.png)
        

### Step 2: Aggregate the data set

Some questions can be answered using every row in the data set. However, for many questions you will need to simplify the data set by summarising selected variables. This makes it easier to compare different groups, identify patterns and trends and is known as aggregation. KNIME has a number of nodes that assist with this process. It may take some trial and error to get the data in the format you want.

For each question generate a data table in the format you prototyped for each question in Step 1.

### Step 3: Generate charts

Use KNIME Views nodes to generate charts using the data tables you generated in Step 2.

Appropriately edit charts settings and labels to make your chart clear to the general public.

Question 1:

![image.png](attachment:46966a90-64c8-47c0-9488-17bea37fa2d9:image.png)

Question 2:

![image.png](attachment:3dcc4613-0ad4-41ea-bc12-b9f28733f8d5:image.png)

Question 3:

![image.png](attachment:df14b341-a608-42b7-8f98-892d4707a73c:image.png)

# Exercise 3:

# Data Story: Television Market Overview in Australia

## Step 1: Who is the audience?

### Primary audience

**General consumers and policy stakeholders in Australia**, such as:

- Consumers interested in understanding the current TV market
- Retail analysts and marketers
- Government or regulatory staff interested in product availability trends

### Audience characteristics

- **Non-technical** or semi-technical
- Interested in **high-level insights**, not raw data
- Prefer **clear, simple visuals**
- Familiar with brands and screen sizes, but **not energy datasets**

### Priority questions for this audience

1. What types of TV technologies are available in Australia?
2. What screen sizes are most common?
3. Which brands dominate the market in terms of model variety?

Energy efficiency and deeper technical metrics are **secondary** and not the focus here.

### Visualisation guidelines (based on audience)

- Use **simple bar charts**
- Avoid clutter and excessive technical labels
- Use **plain language titles**
- Rank categories from most to least frequent
- Highlight key takeaways with annotations

## Step 2: What do they want to know?

The audience wants to understand:

- **Market availability**
    - Which TV technologies are common vs niche?
- **Product choice**
    - What screen sizes are most widely available?
- **Brand presence**
    - Which brands offer the widest range of models?

They are **not** looking for:

- Model-level technical details
- Complex statistical analysis
- Raw tables without interpretation

## Step 3: How will the information be presented?

### Overview

The information will be presented as a **short visual data story**, using:

- Aggregated datasets prepared in KNIME
- Bar charts generated in KNIME or Excel
- A simple website structure with a logical flow

## Storyboard Frames

### **Frame 1 – Introduction: Market Overview**

**User action**

The user opens the website and reads the introductory text.

**What the website shows**

A headline introducing the Australian television market, followed by a short paragraph explaining that the data comes from registered TV products sold in Australia.

**Purpose of the visualisation**

To provide context and clearly state what the user will learn from the visualisation story.

**User understanding / emotion**

The user understands the scope of the data and feels oriented and ready to explore further.

### **Frame 2 – Screen Technologies Available in Australia**

**User action**

The user scrolls down to the first visualisation.

**What the website shows**

A bar chart showing the number of TV models by screen technology (e.g. LED, LCD, OLED, Plasma), with a short annotation highlighting the most common technologies.

**Purpose of the visualisation**

To answer the question: *What types of TV screen technologies are available in Australia, and which are the most frequent?*

**User understanding / emotion**

The user realises that LED technology dominates the market, while other technologies are less common.

### **Frame 3 – Screen Sizes Available**

**User action**

The user scrolls further down the page.

**What the website shows**

A bar chart displaying the number of TV models by advertised screen size category (e.g. 32”, 40”, 50”, 55”, 65”).

**Purpose of the visualisation**

To answer the question: *What screen sizes are currently available, and which are the most frequent?*

**User understanding / emotion**

The user understands that medium to large screen sizes are the most widely available and common in the Australian market.

### **Frame 4 – Brands with the Most Models**

**User action**

The user scrolls to the final section of the story.

**What the website shows**

A horizontal bar chart ranking TV brands by the number of distinct models available.

**Purpose of the visualisation**

To answer the question: *Which brands have the greatest number of different TV models?*

**User understanding / emotion**

The user recognises that a small number of major brands dominate the market in terms of product variety.

## 📁 About the Data

### Data source

The dataset is sourced from the **Australian Government Greenhouse and Energy Minimum Standards (GEMS) product database**, containing registered television products and their characteristics.

### Data processing

Data was processed using **KNIME Analytics Platform**:

- Duplicate model records were removed
- Only **Approved** and **Available** TVs were retained
- Products sold in **Australia** were identified using substring filtering
- Brand names were standardised
- Screen sizes were converted from centimetres to inches and grouped into advertised size categories
- Aggregation was performed using GroupBy operations

### Privacy

- The dataset contains **no personal or sensitive information**
- All records relate to commercial products, not individuals
- No privacy risks are present

### Accuracy and limitations

- Data accuracy depends on **self-reported manufacturer submissions**
- The dataset represents registrations up to **May 2015**
- Availability status may not reflect current retail stock
- Some brand and model naming inconsistencies required standardisation

### Ethics

- Data was analysed at an **aggregate level**, avoiding misleading comparisons
- Care was taken to avoid double-counting models
- Visualisations were designed to be clear and accessible, avoiding deceptive scaling or selective filtering

# Documentation of Generative AI Use in Code

## Introduction

Generative AI was used in this project to assist with structuring and writing HTML content for a data storytelling webpage. The purpose of using AI was to help translate a predefined storyboard into clear, well-organised webpage content that effectively communicates insights from the television energy consumption dataset to a non-technical audience.

## Tool Description

The AI tool used was **ChatGPT (OpenAI)**, a large language model designed to generate and refine text and code based on user prompts. The tool was used to assist with HTML structure, narrative flow, and explanatory text for data visualisations.

## Usage Details

### Prompts Used

The following prompt was provided to the AI tool:

> Generate HTML content for a webpage (`televisions.html`) that presents a clear data story based on a storyboard about the Australian television market.
> 
> 
> The webpage should follow a narrative structure aligned with the storyboard frames, including:
> 
> - An introduction that provides context for the dataset and explains the purpose of the page
> - A section on TV screen technologies available in Australia
> - A section on screen size categories and their frequency
> - A section comparing brands by the number of distinct TV models
> 
> Each section must include:
> 
> - Explanatory text that contextualises the visualisation for a non-technical audience
> - A placeholder for an image of the corresponding chart
> - A short insight or takeaway that explains what the reader should learn from the visualisation
> 
> The HTML must integrate into an existing website structure, preserving the provided navigation bar, footer, CSS link, and JavaScript navigation logic.
> 
> The focus should be on storytelling and clarity rather than technical chart generation.
> 

### Outputs Received

The AI generated:

- A structured HTML layout for the `televisions.html` page
- Section headings aligned with the storyboard frames
- Contextual explanatory text for each visualisation
- Placeholder `<img>` elements for chart images
- Insight statements summarising the key takeaway of each chart

The generated output was used as a draft foundation for the final webpage.

### Modifications Made

The AI-generated code was reviewed and modified by the author to:

- Ensure consistency with existing website navigation and styling
- Adjust wording to better match assignment requirements and tone
- Add appropriate `alt` text for accessibility
- Resize chart images using custom CSS for improved readability
- Remove or simplify any unnecessary descriptive text

These changes ensured the final webpage met both technical and assessment criteria.

## Reflection

Using generative AI significantly improved the efficiency of the development process by helping to quickly translate a conceptual storyboard into structured HTML content. It allowed greater focus on data interpretation, visual storytelling, and design decisions rather than manual drafting of boilerplate code. Reviewing and refining the AI-generated output also strengthened understanding of HTML structure, accessibility considerations, and effective data communication.

## Acknowledgment

Parts of the HTML content in this project were generated with the assistance of **ChatGPT (OpenAI)**. The final code is not entirely original and has been reviewed, edited, and integrated by the author to meet the specific requirements of the assignment.