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

let first_item = document.querySelector(".first_item");
let second_item = document.querySelector(".second_item");
let third_item = document.querySelector(".third_item");
let fourth_item = document.querySelector(".fourth_item");
let fifth_item = document.querySelector(".fifth_item");
let sixth_item = document.querySelector(".sixth_item");
let seventh_item = document.querySelector(".seventh_item");

let first_button = document.querySelector(".first_button");
let second_button = document.querySelector(".second_button");
let third_button = document.querySelector(".third_button");
let fourth_button = document.querySelector(".fourth_button");
let fifth_button = document.querySelector(".fifth_button");
let sixth_button = document.querySelector(".sixth_button");
let seventh_button = document.querySelector(".seventh_button");
first_button.style.backgroundColor = "#000";

button = 1;
//fonction pour changer l'item avec les boutons 

function change_item(button) {
    if (button == 1) {
        first_item.style.display = "flex";
        first_button.style.backgroundColor = "#000";
        second_item.style.display = "none";
        second_button.style.backgroundColor = "#FFFFFF";
        third_item.style.display = "none";
        third_button.style.backgroundColor = "#FFFFFF";
        fourth_item.style.display = "none";
        fourth_button.style.backgroundColor = "#FFFFFF";
        fifth_item.style.display = "none";
        fifth_button.style.backgroundColor = "#FFFFFF";
        sixth_item.style.display = "none";
        sixth_button.style.backgroundColor = "#FFFFFF";
        seventh_item.style.display = "none";
        seventh_button.style.backgroundColor = "#FFFFFF";
    }
    if (button == 2) {
        first_item.style.display = "none";
        first_button.style.backgroundColor = "#FFFFFF";
        second_item.style.display = "flex";
        second_button.style.backgroundColor = "#000";
        third_item.style.display = "none";
        third_button.style.backgroundColor = "#FFFFFF";
        fourth_item.style.display = "none";
        fourth_button.style.backgroundColor = "#FFFFFF";
        fifth_item.style.display = "none";
        fifth_button.style.backgroundColor = "#FFFFFF";
        sixth_item.style.display = "none";
        sixth_button.style.backgroundColor = "#FFFFFF";
        seventh_item.style.display = "none";
        seventh_button.style.backgroundColor = "#FFFFFF";
    }
    if (button == 3) {
        first_item.style.display = "none";
        first_button.style.backgroundColor = "#FFFFFF";
        second_item.style.display = "none";
        second_button.style.backgroundColor = "#FFFFFF";
        third_item.style.display = "flex";
        third_button.style.backgroundColor = "#000";
        fourth_item.style.display = "none";
        fourth_button.style.backgroundColor = "#FFFFFF";
        fifth_item.style.display = "none";
        fifth_button.style.backgroundColor = "#FFFFFF";
        sixth_item.style.display = "none";
        sixth_button.style.backgroundColor = "#FFFFFF";
        seventh_item.style.display = "none";
        seventh_button.style.backgroundColor = "#FFFFFF";
    }
    if (button == 4) {
        first_item.style.display = "none";
        first_button.style.backgroundColor = "#FFFFFF";
        second_item.style.display = "none";
        second_button.style.backgroundColor = "#FFFFFF";
        third_item.style.display = "none";
        third_button.style.backgroundColor = "#FFFFFF";
        fourth_item.style.display = "flex";
        fourth_button.style.backgroundColor = "#000";
        fifth_item.style.display = "none";
        fifth_button.style.backgroundColor = "#FFFFFF";
        sixth_item.style.display = "none";
        sixth_button.style.backgroundColor = "#FFFFFF";
        seventh_item.style.display = "none";
        seventh_button.style.backgroundColor = "#FFFFFF";
    }
    if (button == 5) {
        first_item.style.display = "none";
        first_button.style.backgroundColor = "#FFFFFF";
        second_item.style.display = "none";
        second_button.style.backgroundColor = "#FFFFFF";
        third_item.style.display = "none";
        third_button.style.backgroundColor = "#FFFFFF";
        fourth_item.style.display = "none";
        fourth_button.style.backgroundColor = "#FFFFFF";
        fifth_item.style.display = "flex";
        fifth_button.style.backgroundColor = "#000";
        sixth_item.style.display = "none";
        sixth_button.style.backgroundColor = "#FFFFFF";
        seventh_item.style.display = "none";
        seventh_button.style.backgroundColor = "#FFFFFF";
    }
    if (button == 6) {
        first_item.style.display = "none";
        first_button.style.backgroundColor = "#FFFFFF";
        second_item.style.display = "none";
        second_button.style.backgroundColor = "#FFFFFF";
        third_item.style.display = "none";
        third_button.style.backgroundColor = "#FFFFFF";
        fourth_item.style.display = "none";
        fourth_button.style.backgroundColor = "#FFFFFF";
        fifth_item.style.display = "none";
        fifth_button.style.backgroundColor = "#FFFFFF";
        sixth_item.style.display = "flex";
        sixth_button.style.backgroundColor = "#000";
        seventh_item.style.display = "none";
        seventh_button.style.backgroundColor = "#FFFFFF";
    }
    if (button == 7) {
        first_item.style.display = "none";
        first_button.style.backgroundColor = "#FFFFFF";
        second_item.style.display = "none";
        second_button.style.backgroundColor = "#FFFFFF";
        third_item.style.display = "none";
        third_button.style.backgroundColor = "#FFFFFF";
        fourth_item.style.display = "none";
        fourth_button.style.backgroundColor = "#FFFFFF";
        fifth_item.style.display = "none";
        fifth_button.style.backgroundColor = "#FFFFFF";
        sixth_item.style.display = "none";
        sixth_button.style.backgroundColor = "#FFFFFF";
        seventh_item.style.display = "flex";
        seventh_button.style.backgroundColor = "#000";
    }
}

first_button.addEventListener("click", function () {
    console.log("first button clicked");
    button = 1;
    console.log(button);
    change_item(button);
});
second_button.addEventListener("click", function () {
    button = 2;
    change_item(button);
});
third_button.addEventListener("click", function () {
    button = 3;
    change_item(button);
});
fourth_button.addEventListener("click", function () {
    button = 4;
    change_item(button);
});
fifth_button.addEventListener("click", function () {
    button = 5;
    change_item(button);
});
sixth_button.addEventListener("click", function () {
    button = 6;
    change_item(button);
});
seventh_button.addEventListener("click", function () {
    button = 7;
    change_item(button);
});