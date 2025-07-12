// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");
if(close) {
    close.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
}

if(bar) {
    bar.addEventListener("click", () => {
        navbar.classList.add("active");
        
    });
}
