const form = document.querySelector ("form");
const cards_1 = document.querySelector(".cards");
const cards_2 = document.querySelector(".card");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    cards_1.classList.add("hide");
    cards_2.classList.remove("hide");
})