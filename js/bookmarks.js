const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-text"]');

console.log(answerButton);
console.log(answerText);

//Bookmark
const addBookmarkToCard = () => {
  bookmarkIcon.setAttribute("fill", "black");
};

const removeBookmarkFromCard = () => {
  bookmarkIcon.setAttribute("fill", "none");
};

bookmarkButton.addEventListener("click", () => {
  const currentFill = bookmarkIcon.getAttribute("fill");

  if (currentFill === "none") {
    addBookmarkToCard();
  } else {
    removeBookmarkFromCard();
  }
});

//Answer button
answerButton.addEventListener("click", () => {
  const isHidden = answerText.toggleAttribute("hidden");
  answerButton.textContent = isHidden ? "Show answer" : "Hide answer";
});