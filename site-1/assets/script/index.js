const headerMenuButton = document.querySelector(".header_menu");
const menu = document.querySelector(".menu_content");
const rowMenu = document.querySelector(".header-menu-row");
const menuList = document.querySelector(".menu_list");
const menuLogo1 = document.querySelector(".logo1");
const menuLogo2 = document.querySelector(".logo2");
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const projectSection = document.getElementById("project");
const contactSection = document.getElementById("contact");
const homeButton = document.querySelectorAll(".home-button");
const aboutButton = document.querySelectorAll(".about-button");
const projectButton = document.querySelectorAll(".project-button");
const contactButton = document.querySelectorAll(".contact-button");

const navbarHeight = document.querySelector(".header").getBoundingClientRect().height;
const header = document.querySelector(".header");

const sections = [{
    name: "home-button",
    section: homeSection,
    button: homeButton
},
{
    name: "about-button",
    section: aboutSection,
    button: aboutButton
},
{
    name: "project-button",
    section: projectSection,
    button: projectButton
},
{
    name: "contact-button",
    section: contactSection,
    button: contactButton
}];


headerMenuButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
    menuLogo1.classList.toggle("hide");
    menuLogo2.classList.toggle("hide");
    menuList.classList.toggle("active");
});

menu.addEventListener("click", () => {
    menuLogo1.classList.toggle("hide");
    menuLogo2.classList.toggle("hide");
    menu.classList.toggle("hide");
});

sections.forEach((section) => {
    section.button.forEach((button) => {
        button.addEventListener("click", (event) => {
            window.scrollTo({ top: section.section.offsetTop - navbarHeight, behavior: "smooth" });
        });
    });
});