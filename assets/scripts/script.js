//burger menu
let burger = document.getElementById("burger");
let navbar = document.getElementById("navbar");
let open_menu = 0;
burger.addEventListener("click", function () {
    if (open_menu == 0) {
        navbar.style.display = "flex";
        open_menu = 1;
    } else {
        navbar.style.display = "none";
        open_menu = 0;
    }
});

window.addEventListener("scroll", function () {
    let scroll = this.scrollY;
    let nav = document.getElementById("nav");
    if (scroll > 0) {
        nav.style.height = "3px";
        navbar.style.display = "none";
    } else {
        header.style.backgroundColor = "transparent";
    }
});