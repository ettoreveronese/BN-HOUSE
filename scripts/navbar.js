// NAVBAR ANIMATION ON SCROLL
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (!(prevScrollPos > currentScrollPos)) {
        navbar.style.top = "-10vh";
    } else {
        navbar.style.top = "0";
    }
    
    if(!(window.scrollY > 0)) {
        navbar.classList.add("top-navbar");
        document.querySelector('.navbar-logo').src = "../assets/logo/new-logo-white.png";
    } else {
        navbar.classList.remove("top-navbar");
        document.querySelector('.navbar-logo').src = "../assets/logo/new-logo.png";
    }
    
    prevScrollPos = currentScrollPos;
})

// LOAD THE RIGHT NAVBAR
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".navbar").classList.toggle("top-navbar", !(window.scrollY > 0));
}); 