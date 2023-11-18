let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector(".navbar");
    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the navbar
        navbar.style.top = "0";
    } else {
        // Scrolling down, hide the navbar
        navbar.style.top = "-10vh"; // Adjust the value as needed
    }
    navbar.classList.toggle("top-navbar", !(window.scrollY > 0));
    prevScrollPos = currentScrollPos;
};

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".navbar").classList.toggle("top-navbar", !(window.scrollY > 0));
});

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("welcomeSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  
    slides[slideIndex-1].classList.add("show");
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});