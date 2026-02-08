---

# Data Story: Television Market Overview in Australia

---

## Step 1: Who is the audience?

### Primary audience

**General consumers and policy stakeholders in Australia**, such as:

* Consumers interested in understanding the current TV market
* Retail analysts and marketers
* Government or regulatory staff interested in product availability trends

### Audience characteristics

* **Non-technical** or semi-technical
* Interested in **high-level insights**, not raw data
* Prefer **clear, simple visuals**
* Familiar with brands and screen sizes, but **not energy datasets**

### Priority questions for this audience

1. What types of TV technologies are available in Australia?
2. What screen sizes are most common?
3. Which brands dominate the market in terms of model variety?

Energy efficiency and deeper technical metrics are **secondary** and not the focus here.

---

### Visualisation guidelines (based on audience)

* Use **simple bar charts**
* Avoid clutter and excessive technical labels
* Use **plain language titles**
* Rank categories from most to least frequent
* Highlight key takeaways with annotations

---

## Step 2: What do they want to know?

The audience wants to understand:

* **Market availability**

  * Which TV technologies are common vs niche?
* **Product choice**

  * What screen sizes are most widely available?
* **Brand presence**

  * Which brands offer the widest range of models?

They are **not** looking for:

* Model-level technical details
* Complex statistical analysis
* Raw tables without interpretation

---

## Step 3: How will the information be presented?

### Overview

The information will be presented as a **short visual data story**, using:

* Aggregated datasets prepared in KNIME
* Bar charts generated in KNIME or Excel
* A simple website structure with a logical flow

---

## Storyboard: User experience

### 🧭 Landing section

**Title:**

> *“An Overview of the Australian Television Market”*

**Purpose:**
Introduce what the viewer will learn and why it matters.

---

### 📺 Section 1: TV Screen Technologies in Australia

**Question answered:**

> What type of TV screen technologies are currently available in Australia and which are the most frequent?

**Visualisation:**

* **Bar chart**

  * X-axis: Screen Technology
  * Y-axis: Number of TV models

**Why this works:**

* Technologies are categorical
* Bar chart clearly compares frequency
* Easy to identify dominant technologies (e.g. LED vs OLED)

**Annotation example:**

> “LED technology dominates the Australian TV market, while OLED remains a smaller but growing segment.”

---

### 📐 Section 2: Screen Sizes Available

**Question answered:**

> What screen sizes are currently available, and which are the most frequent?

**Visualisation:**

* **Bar chart**

  * X-axis: Screen Size Category (e.g. 32”, 40”, 55”)
  * Y-axis: Number of models

**Why this works:**

* Screen sizes are discrete, familiar categories
* Consumers relate directly to advertised sizes
* Shows preference for mid-to-large screens

**Annotation example:**

> “Mid-range screen sizes such as 40” and 55” are the most common in the Australian market.”

---

### 🏷️ Section 3: Brands with the Most Models

**Question answered:**

> Which brands have the greatest number of different models?

**Visualisation:**

* **Horizontal bar chart**

  * Y-axis: Brand
  * X-axis: Number of distinct models

**Why this works:**

* Brand names are easier to read horizontally
* Ranking is immediately clear
* Highlights dominant manufacturers

**Annotation example:**

> “Samsung and LG offer the widest range of TV models, indicating strong market presence.”

---

### 🧠 Final takeaway section

Summarise key insights in 2–3 bullet points:

* LED TVs dominate availability
* Medium-to-large screen sizes are most common
* A small number of brands control most of the market

---

## Step 4: README.md content

You can copy and paste the following structure directly.

---

## 📁 About the Data

### Data source

The dataset is sourced from the **Australian Government Greenhouse and Energy Minimum Standards (GEMS) product database**, containing registered television products and their characteristics.

---

### Data processing

Data was processed using **KNIME Analytics Platform**:

* Duplicate model records were removed
* Only **Approved** and **Available** TVs were retained
* Products sold in **Australia** were identified using substring filtering
* Brand names were standardised
* Screen sizes were converted from centimetres to inches and grouped into advertised size categories
* Aggregation was performed using GroupBy operations

---

### Privacy

* The dataset contains **no personal or sensitive information**
* All records relate to commercial products, not individuals
* No privacy risks are present

---

### Accuracy and limitations

* Data accuracy depends on **self-reported manufacturer submissions**
* The dataset represents registrations up to **May 2015**
* Availability status may not reflect current retail stock
* Some brand and model naming inconsistencies required standardisation

---

### Ethics

* Data was analysed at an **aggregate level**, avoiding misleading comparisons
* Care was taken to avoid double-counting models
* Visualisations were designed to be clear and accessible, avoiding deceptive scaling or selective filtering

---

## 📌 Data Story Summary

This data story provides a high-level overview of the Australian television market, focusing on screen technologies, screen sizes, and brand presence. The visualisations are designed for a general audience and highlight key market trends using clear, aggregated insights.

---

If you want next:

* I can **rewrite this in a more academic tone**
* Or help you **convert this into a GitHub-friendly README**
* Or help you design **actual chart titles and captions**

You’ve now covered *data prep → aggregation → visualisation → storytelling* — that’s the full pipeline 👏
