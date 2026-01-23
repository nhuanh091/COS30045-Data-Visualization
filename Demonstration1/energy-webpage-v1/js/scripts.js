// GenAI-assisted: navigation logic using JavaScript

function navigate(page) {
    if (page === 'home') {
        window.location.href = 'index.html';
    } else if (page === 'tv') {
        window.location.href = 'televisions.html';
    } else if (page === 'about') {
        window.location.href = 'about.html';
    }
}

function goHome() {
    window.location.href = 'index.html';
}

// Highlight current page
const currentPage = window.location.pathname;

if (currentPage.includes("index")) {
    document.getElementById("nav-home")?.classList.add("active");
} else if (currentPage.includes("televisions")) {
    document.getElementById("nav-tv")?.classList.add("active");
} else if (currentPage.includes("about")) {
    document.getElementById("nav-about")?.classList.add("active");
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
