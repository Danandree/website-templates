const aboutButton = document.getElementById("aboutButton");
const projectButton = document.getElementById("projectButton");
const experienceButton = document.getElementById("experienceButton");
const contactButton = document.getElementById("contactButton");
const aboutSection = document.getElementById("about");
const projectSection = document.getElementById("project");
const experienceSection = document.getElementById("experience");
const contactSection = document.getElementById("contact");
const submitButton = document.getElementById("submit-button");

const titleCardNav = document.querySelector(".title-card-nav");

buttons = [
    {
        name: "aboutButton",
        button: aboutButton,
        section: aboutSection
    },
    {
        name: "projectButton",
        button: projectButton,
        section: projectSection
    },
    {
        name: "experienceButton",
        button: experienceButton,
        section: experienceSection
    },
    {
        name: "contactButton",
        button: contactButton,
        section: contactSection
    }
]

document.addEventListener("scroll", () => {
    buttons.forEach((button) => {
        const sectionTop = button.section.getBoundingClientRect().top - titleCardNav.getBoundingClientRect().height;
        const sectionBottom = button.section.getBoundingClientRect().bottom - titleCardNav.getBoundingClientRect().height;
        if (sectionTop <= 0 && sectionBottom >= 0) { button.button.classList.add("link-hover"); }
        else { button.button.classList.remove("link-hover"); }
    });
})

titleCardNav.addEventListener("click", (event) => {
    removeLinkOver();
    buttons.forEach((button) => {
        if (event.target.id === button.name) {
            button.button.classList.add("link-hover");
            button.section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    })
});

function removeLinkOver() {
    buttons.forEach((button) => {
        button.button.classList.remove("link-hover");
    })
}
