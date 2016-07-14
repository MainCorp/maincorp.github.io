var link = document.querySelector(".open-menu");
var menu = document.querySelector(".full-menu");
var close = document.querySelector(".close-menu");

link.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.add("full-menu-show");
});

close.addEventListener("click", function(event) {
   event.preventDefault();
    menu.classList.remove("full-menu-show");
});