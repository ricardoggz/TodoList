const mode = document.querySelector("#btn-mode");
const body = document.querySelector("body");

mode .addEventListener("click", e => {
    body.classList.toggle("mode");
})