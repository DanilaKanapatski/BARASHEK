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

const burgerMob = document.getElementById("header-mob-burger");
const navMob = document.getElementById("header-nav-mob");
const closeMob = document.getElementById("close-mob");

burgerMob.addEventListener("click", (e) => {
    navMob.classList.toggle("active");
})
closeMob.addEventListener("click", (e) => {
    navMob.classList.toggle("active");
})