// SLIDESHOW 1
let slideIndex1 = 1;
function changeSlide1(n) {
    showSlides1(slideIndex1 += n);
}
function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("slides1");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1-1].style.display = "block";
}
document.addEventListener("DOMContentLoaded", function() {
    showSlides1(slideIndex1);
}); 

// SLIDESHOW 2
let slideIndex2 = 1;
function changeSlide2(n) {
    showSlides2(slideIndex2 += n);
}
function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("slides2");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2-1].style.display = "block";
}
document.addEventListener("DOMContentLoaded", function() {
    showSlides2(slideIndex2);
}); 