function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
}
function lightDarkMode(){
    const darkMode = document.querySelector(".dark-mode i");
    const elements = document.querySelectorAll("#desktop-nav,a,body,.section__text__p2,.section__text__p1,.title,#about,#about .arrow,#experience,#experience .arrow,#about .text-container,.hamburger-icon span,.menu-links,.btn-color-2,p,.project-btn");

    darkMode.classList.toggle("fa-sun")
    darkMode.classList.toggle("fa-moon")
    darkMode.style.color=darkMode.classList.contains("fa-sun")?"white":"black";

    elements.forEach(element=> 
        element.classList.toggle("dark-mode-class")
    );
}