// Nav Link buttons
const homeButton = document.getElementById("home-button");
const aboutButton = document.getElementById("about-button");
const workButton = document.getElementById("work-button");
const contactButton = document.getElementById("contact-button");

// Hides the section as well as changes the color of the
// list item backgrounds back to "inactive" or black
function hideAll() {
    document.getElementById("home").style.display = "none";
    document.getElementById("homeItem").style.backgroundColor = 'var(--clr-leftHeader)';

    document.getElementById("about").style.display = "none";
    document.getElementById("aboutItem").style.backgroundColor = 'var(--clr-leftHeader)';

    document.getElementById("work").style.display = "none";
    document.getElementById("workItem").style.backgroundColor = 'var(--clr-leftHeader)';

    document.getElementById("contact").style.display = "none";
    document.getElementById("contactItem").style.backgroundColor = 'var(--clr-leftHeader)';
}

// Changes the section as well as the color of the active list item
function changeView(sectionName, buttonName) {
    hideAll();
    document.getElementById(buttonName).style.backgroundColor = 'var(--clr-accent)';
    document.getElementById(sectionName).style.display = "initial";
}

// Event listeners for the navigation
homeButton.addEventListener("click", () => {
    changeView('home', 'homeItem');
});

aboutButton.addEventListener("click", () => {
    changeView('about', 'aboutItem');
});

workButton.addEventListener("click", () => {
    changeView('work', 'workItem');
});

contactButton.addEventListener("click", () => {
    changeView('contact', 'contactItem');
});