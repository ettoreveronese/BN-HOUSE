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
    prevScrollPos = currentScrollPos;
  };
  

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".navbar").style.position = "sticky";
});