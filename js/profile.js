const bodyElement = document.querySelector('[data-js="body"]');
const darkButton = document.getElementById('dark-mode-toggle');


darkButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
})