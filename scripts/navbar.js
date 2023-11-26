// NAVBAR ANIMATION ON SCROLL
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector(".navbar");

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-10vh";
    }
    
    if(!(window.scrollY > 0)) {
        navbar.classList.add("top-navbar");
        document.querySelector('.navbar-logo').src = "../assets/logo/new-logo-white.png";
    } else {
        navbar.classList.remove("top-navbar");
        document.querySelector('.navbar-logo').src = "../assets/logo/new-logo.png";
    }
    
    prevScrollPos = currentScrollPos;
};

// LOAD THE RIGHT NAVBAR
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".navbar").classList.toggle("top-navbar", !(window.scrollY > 0));
});