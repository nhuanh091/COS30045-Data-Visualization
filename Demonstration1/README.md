# COS30045-Data-Visualization
A collection of exercises, assignments, and projects for the Data Visualization unit. This repository demonstrates practical skills in analyzing datasets and presenting insights through clear, accurate, and effective visualizations using modern data visualization tools and libraries.
**Unit:** COS30045

**Assessment: Demonstration 1**

**Student:** *Nguyen Thi Nhu Anh*

1. **Introduction - Purpose of Using Generative AI**

Generative AI tools were used in this project as **learning aids and productivity tools**, not as replacements for understanding or decision-making. The primary purpose of using GenAI was to:

- Generate initial code templates for HTML, CSS, and JavaScript
- Explore alternative design and layout approaches
- Debug layout and deployment issues (navigation state, GitHub Pages)
- Improve code clarity and maintainability through refinement

All AI-generated outputs were **reviewed, modified, and fully understood** before being included in the final submission.

2. **AI Tools Used**

**2.1 ChatGPT (OpenAI)**

**Purpose:**

- Generate starter code
- Explain JavaScript logic
- Help debug layout and GitHub Pages deployment
- Assist with CSS refinement using an existing design system

**Reason for choice:**

ChatGPT provides clear explanations and code examples suitable for undergraduate-level web development, making it effective for learning and iteration.

**2.2 GitHub Copilot (Visual Studio Code)**

**Purpose:**

- Assist with repetitive code patterns
- Suggest syntax while writing HTML and CSS
- Speed up JavaScript function writing

**Reason for choice:**

GitHub Copilot integrates directly into the IDE and supports incremental development without generating entire solutions at once.

**2.3 Gemini (Web)**

**Purpose:**

- Summarise policy requirements
- Cross-check best practices for documentation wording

**Reason for choice:**

Provides quick clarification while remaining compliant with Swinburne’s Enterprise Data Protection policy.

3. **Usage Details**

**3.1 Prompts Used (Representative Examples)**

Effective **and intentional prompts** are documented below.

<aside>
💡

Prompt 1: AI Role & Task Context (Pre-Prompt)

You are acting as a learning assistant for a university web development assessment.

Your role is to help me **understand requirements, plan structure, and reason about design decisions**, not to immediately generate full solutions.

The task is to build a small interactive website that demonstrates my understanding of **HTML, CSS, JavaScript, and GitHub version control**.

At this stage, do **not generate any code**. Instead, focus on **analysing the task, clarifying constraints, and preparing for correct implementation**.

Only generate code when I explicitly instruct you to do so.

Carefully read and internalise the following assessment aim and requirements.

**Aim:**

Build a small interactive website that demonstrates the use of HTML, CSS, JavaScript, and a GitHub repository.

**Requirements:**

- Three pages: Home, Televisions, About Us
- A top navigation menu that:
    - Allows users to swap between pages using JavaScript
    - Displays a power logo in the top-left corner that returns the user to the Home page when clicked
    - Provides mouse-over feedback
    - Clearly indicates the currently active page
- Styling implemented using an external CSS file
- Colour palette aligned with the logo (yellow, orange, brown)
- Footer including: year, student name, and GenAI acknowledgement (if applicable)
- Placeholder content related to appliance energy consumption in the Australian market

At this stage, **do not generate any HTML, CSS, or JavaScript code**.

Instead, confirm your understanding of the task, identify any key design or technical considerations, and explain how the requirements could be approached at a high level.

## **Output:**

Got it 👍 I’ve read this **carefully** and I understand exactly what’s required. I **will not generate any code at this stage**, as requested.

Here’s a clear confirmation of my understanding, so we’re aligned before moving on.

---

## ✅ My understanding of your task

### 1. Overall aim

You will build a **small interactive website** to demonstrate:

- HTML structure
- CSS styling
- JavaScript interactivity
- Use of a **GitHub repository** with incremental commits

This is a **learning-focused assignment**, not just about the final output but also about **process, understanding, and documentation**.

---

### 2. Website functional requirements

The website must include:

**Pages**

- Three pages:
    - Home
    - Televisions
    - About Us

**Navigation**

- A **top navigation menu** that:
    - Uses **JavaScript** to switch between pages (not simple page reload links)
    - Shows a **power logo** in the top-left corner
        - Clicking the logo returns the user to **Home**
    - Provides:
        - Mouse-over (hover) feedback
        - Clear feedback showing **which page is currently active**

**Styling**

- External **CSS file**
- Colour scheme must match the logo:
    - Yellow
    - Orange
    - Brown

**Footer**

- Present on all pages
- Includes:
    - Current year
    - Your name
    - **GenAI acknowledgement** (if GenAI is used)

**Content**

- Placeholder content related to:
    - Appliance energy consumption
    - Australian market context

</aside>

<aside>
💡

Prompt 2: Code Generation Instruction

Based on the previously discussed requirements and confirmed understanding, now generate a **simple but well-structured three-page website** using HTML, CSS, and JavaScript.

The solution should:

- Follow best practices appropriate for a beginner-to-intermediate university student
- Use clear file separation (HTML, CSS, JS)
- Include inline comments where AI-assisted logic is used
- Be suitable for deployment via GitHub Pages

Generate the code incrementally and explain the purpose of each section as it is introduced.

This is the base CSS Styling Guide (style.css):

```jsx
/* Importing Google fonts*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;;
    font-family: "Poppins", sans-serif;
}

:root {
    /* Colors */
    --white-color: #fff;
    --dark-color: #252525;
    --primary-color: #f7c319;
    --secondary-color: #fcdb6d;
    --light-lime-color: #fdfbcf;
    --medium-gray-color: #ccc;

    /* Font size */
    --font-size-s: 0.9rem;
    --font-size-n: 1rem;
    --font-size-m: 1.12rem;
    --font-size-l: 1.5rem;
    --font-size-xl: 2rem;
    --font-size-xxl: 2.3rem;

    /* Font weight */
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* Border radius */
    --border-radius-s: 8px;
    --border-radius-m: 30px;
    --border-radius-circle: 50%;

    /* Site max width */
    --site-max-width: 1300px;
}

h1 {
    color: var(--primary-color);
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
    border: none;
    background: none;
}

.section-content {
    margin: 0 auto;
    padding: 0 20px;
    max-width: var(--site-max-width);
}

/* styling header*/
header {
    background: var(--primary-color);
    width: 100%;
    z-index: 5;
}

header ul {
    list-style: none;
}
header .navbar {
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
}

.navbar .nav-logo .logo-text {
    color: var(--white-color);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
}

.navbar .logo {
    width: 5%;             /* keep aspect ratio */
}

.navbar .nav-menu {
    display: flex;
    gap: 10px;
}

.navbar .nav-menu .nav-link {
    padding: 10px 18px;
    color: var(--dark-color);
    font-size: var(--font-size-m);
    border-radius: var(--border-radius-m);
    transition: 0.3s ease;
}

.navbar .nav-menu .nav-link:hover {
    /* color: var(--primary-color); */
    background: var(--secondary-color);
}

.hero-section {
    /* min-height: 100vh; */
    background: var(--white-color);
    display: flex;
    padding: 100px;
}

.hero-section .section-content {
    align-items: center;
    margin: 50px 0 40px;
    /* min-height: 100vh; */
    max-width: 70%;
    color: black;
    justify-content: space-between;
    font-size: var(--font-size-m);
}

/* Shared Page Sections */

.page-section {
    padding: 80px 0;
    background: var(--white-color);
}

.page-section.alt {
    background: var(--light-lime-color);
}

.section-card {
    background: var(--white-color);
    border-radius: var(--border-radius-s);
    padding: 30px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    margin-top: 30px;
}

.section-card h2 {
    font-size: var(--font-size-l);
    color: var(--dark-color);
    margin-bottom: 15px;
}

.section-card p {
    font-size: var(--font-size-n);
    color: var(--dark-color);
    line-height: 1.6;
}

/* =========================
   Footer Styling
========================= */

footer {
    background: var(--dark-color);
    color: var(--white-color);
    padding: 30px 0;
    margin-top: 30px;
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
    font-size: var(--font-size-s);
}

.footer-content span {
    color: var(--secondary-color);
}

/* =========================
   Active Navigation State
========================= */

.navbar .nav-menu .nav-link.active {
    background: var(--secondary-color);
    font-weight: var(--font-weight-medium);
}

```

## Output:

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home | Energy Smart Appliances</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<header>
    <nav class="top-nav">
        <!-- GenAI-assisted: navigation structure -->
        <img src="images/power-logo.png" alt="Power Logo" class="logo" onclick="goHome()">

        <ul>
            <li onclick="navigate('home')" id="nav-home">Home</li>
            <li onclick="navigate('tv')" id="nav-tv">Televisions</li>
            <li onclick="navigate('about')" id="nav-about">About Us</li>
        </ul>
    </nav>
</header>

<main id="content">
    <h1>Welcome to Energy Smart Appliances</h1>
    <p>
        Australian households are increasingly focused on reducing energy consumption.
        Understanding appliance energy ratings can help reduce electricity bills and
        environmental impact.
    </p>
</main>

<footer>
    <p>© <span id="year"></span> Your Name | GenAI used for code generation and learning support</p>
</footer>

<script src="js/navigation.js"></script>
</body>
</html>

```

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Televisions | Energy Smart Appliances</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<header>
    <nav class="top-nav">
        <img src="images/power-logo.png" alt="Power Logo" class="logo" onclick="goHome()">
        <ul>
            <li onclick="navigate('home')" id="nav-home">Home</li>
            <li onclick="navigate('tv')" id="nav-tv">Televisions</li>
            <li onclick="navigate('about')" id="nav-about">About Us</li>
        </ul>
    </nav>
</header>

<main id="content">
    <h1>Energy Efficient Televisions</h1>
    <p>
        Modern televisions sold in Australia are rated using the Energy Rating Label.
        Choosing higher star ratings can significantly reduce annual energy consumption.
    </p>
    <p>
        Screen size, display technology, and usage time all impact power usage.
    </p>
</main>

<footer>
    <p>© <span id="year"></span> Your Name | GenAI used for code generation and learning support</p>
</footer>

<script src="js/navigation.js"></script>
</body>
</html>

```

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Us | Energy Smart Appliances</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<header>
    <nav class="top-nav">
        <img src="images/power-logo.png" alt="Power Logo" class="logo" onclick="goHome()">
        <ul>
            <li onclick="navigate('home')" id="nav-home">Home</li>
            <li onclick="navigate('tv')" id="nav-tv">Televisions</li>
            <li onclick="navigate('about')" id="nav-about">About Us</li>
        </ul>
    </nav>
</header>

<main id="content">
    <h1>About Us</h1>
    <p>
        This website demonstrates basic web technologies while raising awareness
        of appliance energy efficiency in the Australian market.
    </p>
</main>

<footer>
    <p>© <span id="year"></span> Your Name | GenAI used for code generation and learning support</p>
</footer>

<script src="js/navigation.js"></script>
</body>
</html>

```

</aside>

<aside>
💡

Prompt 3: Explain how to use GitHub Pages to load the view of the website code”

## Output:

## ✅ How to view your website using GitHub Pages (after publishing)

### 1️⃣ Go to your GitHub repository

- Open your repo on GitHub (the one with `index.html`)

---

### 2️⃣ Open **Settings**

- Click **Settings** (top menu of the repo)
- In the left sidebar, click **Pages**

---

### 3️⃣ Configure GitHub Pages

Under **Build and deployment**:

- **Source**:
    
    👉 Select `Deploy from a branch`
    
- **Branch**:
    - Branch: `main` (or `master`, depending on your repo)
    - Folder: `/ (root)`

✅ Click **Save**

---

### 4️⃣ Wait for deployment (important ⏳)

GitHub Pages is **not instant**.

- Wait **30 seconds to 2 minutes**
- Refresh the page

You should see a message like:

> ✅ Your site is published at:
> 
> 
> `https://your-username.github.io/repository-name/`
> 

---

### 5️⃣ Open the URL

Click the URL GitHub gives you — or open it in a new tab.

That’s your live website 🎉

</aside>

**3.2 Outputs Received**

GenAI provided:

- HTML templates for multi-page navigation
- JavaScript logic for page navigation and active state highlighting
- CSS layout suggestions aligned with an existing :root design system
- Explanations for GitHub Pages deployment constraints (/root and /docs)

The outputs were treated as **drafts**, not final solutions.

**3.3 Modifications Made to AI-Generated Content**

Significant modifications were made, including:

- Removing hard-coded navigation states and replacing them with dynamic JavaScript logic
- Refactoring CSS to align with an existing colour palette and spacing system
- Adjusting layout rules to remove excessive min-height: 100vh usage
- Reorganising files to comply with GitHub Pages deployment rules
- Adding semantic structure and accessibility-friendly markup

All final decisions were made manually after understanding the AI suggestions.

4. **Inline AI Acknowledgement in Code**

AI-assisted sections were explicitly marked in code comments, for example:

// GenAI-assisted: navigation logic adapted and refined by the author

This ensures transparency and compliance with unit requirements.

5. **Incremental Development & Version Control**

The project was developed incrementally using GitHub:

- Initial repository setup and structure
- Basic HTML page creation
- CSS layout and design system integration
- JavaScript navigation logic
- GitHub Pages deployment configuration
- Debugging and refinement

Commits were made regularly to demonstrate ongoing progress rather than a single large submission.

6. **Evidence of Learning and Investigation**

The following artefacts were collected during development:

- Draft HTML and CSS versions
- Incremental GitHub commits
- Notes on CSS layout behaviour (padding vs min-height)
- GitHub Pages deployment testing
- GenAI chat history excerpts
- References reviewed:
    - GitHub Pages documentation
    - W3Schools (HTML/CSS/JS basics)

These materials demonstrate active engagement with the learning process.

7. **Reflection on the Use of Generative AI**

Using Generative AI significantly improved development efficiency, particularly during early scaffolding and debugging stages. However, AI outputs were not always optimal and occasionally introduced issues such as unnecessary layout constraints or hard-coded values.

The most valuable learning occurred when AI outputs were questioned, refined, or rejected. This reinforced the importance of understanding foundational concepts rather than relying on AI blindly.

Overall, GenAI functioned as a **collaborative assistant**, while all architectural and design decisions remained human-driven.

8. **Acknowledgement**

This project includes code and ideas generated with the assistance of Generative AI tools, including ChatGPT, GitHub Copilot, and Gemini. All AI-generated content was reviewed, modified, and understood by the author. The final submission reflects the author’s own understanding and decisions.
