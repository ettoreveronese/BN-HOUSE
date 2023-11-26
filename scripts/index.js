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
        document.querySelector('.navbar-logo').src = "assets/logo/new-logo-white.png";
    } else {
        navbar.classList.remove("top-navbar");
        document.querySelector('.navbar-logo').src = "assets/logo/new-logo.png";
    }
    
    prevScrollPos = currentScrollPos;
};

// LOAD THE RIGHT NAVBAR
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".navbar").classList.toggle("top-navbar", !(window.scrollY > 0));
});

var slideIndex = 0;

// Homepage welcome slides animation
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("welcomeSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  
    slides[slideIndex-1].classList.add("show");
    setTimeout(showSlides, 6000);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});