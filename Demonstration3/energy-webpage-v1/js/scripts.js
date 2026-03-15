// GenAI-assisted: navigation highlighting based on current page

function navigate(page) {
    if (page === "home") window.location.href = "index.html";
    if (page === "tv") window.location.href = "televisions.html";
    if (page === "about") window.location.href = "about.html";
}

// Highlight active navigation link
const currentPath = window.location.pathname;

document.querySelectorAll(".nav-link").forEach(link => {
    const page = link.dataset.page;

    if (
        (page === "home" && currentPath.includes("index")) ||
        (page === "tv" && currentPath.includes("televisions")) ||
        (page === "about" && currentPath.includes("about"))
    ) {
        link.classList.add("active");
    }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
