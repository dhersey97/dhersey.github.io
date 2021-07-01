// Nav Link buttons
const homeButton = document.getElementById("home-button");
const aboutButton = document.getElementById("about-button");
const workButton = document.getElementById("work-button");
const contactButton = document.getElementById("contact-button");

// Hamburger Buttons
const hamToggle = document.querySelector('.hamburger-toggle');
const hamHome = document.getElementById('HamHome');
const hamAbout = document.getElementById('HamAbout');
const hamWork = document.getElementById('HamWork');
const hamContact = document.getElementById('HamContact');

// Misc Buttons
const abtContactbtn = document.getElementById('abtContact');

// Hides the section as well as changes the color of the
// list item backgrounds back to "inactive" or black
function hideAll() {
    document.getElementById("home").style.display = "none";
    document.getElementById("homeItem").style.backgroundColor = '';

    document.getElementById("about").style.display = "none";
    document.getElementById("aboutItem").style.backgroundColor = '';

    document.getElementById("work").style.display = "none";
    document.getElementById("workItem").style.backgroundColor = '';

    document.getElementById("contact").style.display = "none";
    document.getElementById("contactItem").style.backgroundColor = '';
}

// Changes the section as well as the color of the active list item
function changeView(sectionName, buttonName) {
    hideAll();
    document.getElementById(sectionName).style.display = "initial";
    document.getElementById(buttonName).style.backgroundColor = 'var(--clr-accent)';
}

//Sets default color for initial active page
window.addEventListener("load", () => {
    changeView('home', 'homeItem');
});

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

abtContactbtn.addEventListener('click', () => {
    changeView('contact', 'contactItem');
});

// Hamburger Event Listeners
hamToggle.addEventListener('click', () => {
    document.body.classList.toggle('hamburger-open');
});

hamHome.addEventListener('click', () => {
    document.body.classList.remove('hamburger-open');
    changeView('home', 'homeItem');
});

hamAbout.addEventListener('click', () => {
    document.body.classList.remove('hamburger-open');
    changeView('about', 'aboutItem');
});

hamWork.addEventListener('click', () => {
    document.body.classList.remove('hamburger-open');
    changeView('work', 'workItem');
});

hamContact.addEventListener('click', () => {
    document.body.classList.remove('hamburger-open');
    changeView('contact', 'contactItem');
});
