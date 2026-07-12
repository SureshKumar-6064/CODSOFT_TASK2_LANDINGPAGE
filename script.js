console.log("Landing Page Loaded Successfully");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Your message has been received.");
});
