
const shareBtn = document.querySelector(".social__arrow");
const active = document.querySelector(".social__popup");
const activeBtn = document.querySelector(".social__arrow--active");

shareBtn.addEventListener("click", () => {
    active.classList.toggle('active-state');
});

activeBtn.addEventListener("click", () => {
    active.classList.toggle('active-state');
});