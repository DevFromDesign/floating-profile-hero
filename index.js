// Activate hamburger menu
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// Remove navlist when a menu item is clicked
navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
});

// Rotating text effect in the circular element
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML
    .split("")
    .map((char, i) => `<b style="transform:rotate(${i * 10}deg)">${char}</b>`)
    .join("");
