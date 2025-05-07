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

//carrousel

let first_item = document.querySelector(".first-item");
let second_item = document.querySelector(".second-item");
let third_item = document.querySelector(".third-item");
let fourth_item = document.querySelector(".fourth-item");
let fifth_item = document.querySelector(".fifth-item");
let sixth_item = document.querySelector(".sixth-item");
let seventh_item = document.querySelector(".seventh-item");