
const hamswitch = document.querySelectorAll(".hamburger__switch");

hamswitch.forEach((item) => { 
    item.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("hamburger__menu--active");
    })
})

const hamburgerMenu = document.querySelector(".hamburger__menu");