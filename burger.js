const burger = document.getElementById("burger")
const nav = document.getElementById("header-nav");
const close = document.getElementById("close");

burger.addEventListener("click", (e) => {
    nav.classList.toggle("active");
})
close.addEventListener("click", (e) => {
    nav.classList.toggle("active");
})

console.log(burger);
console.log(nav)