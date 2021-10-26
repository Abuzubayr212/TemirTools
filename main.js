
// const { AOS } = require("./aos");

const navAnim = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-1");
    const navLinks = document.querySelectorAll(".nav-1 button");

    // Toggle nav
    burger.addEventListener("click", () => {
    
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""; 
        }
        else {
            link.style.animation = `navLinkMove 0.5s ease forwards ${ index / 7 + 0.35 }s`;
        }
        
        if (nav.style.display == 'block') {
            nav.style.display = 'none'
            nav.style.transform =  "translatex(100%)"

        }else {
            nav.style.display = 'block'
            nav.style.transform =  "translatex(0%)"

        }

    });

    //Burger animat
    burger.classList.toggle("toggle");
    });


};
navAnim();

var dropit = document.querySelector('.dropit')
var dropdown = document.querySelector('.dropdown')


dropit.addEventListener("click", () => {
        if (dropdown.style.display == 'none' || !dropdown.style.display ) {
            dropdown.style.display = 'block'
        }else{
            dropdown.style.display = 'none'
        }
});

dropdown.addEventListener("mouseout", () => {
    if (dropdown.style.display == 'none' || !dropdown.style.display ) {
        dropdown.style.display = 'block'
    }else{
        dropdown.style.display = 'none'
    }
});




