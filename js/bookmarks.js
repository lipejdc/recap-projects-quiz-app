const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-text"]');

//Bookmark
const addBookmarkToCard = () => {
  bookmarkIcon.setAttribute("fill", "black");
};

const removeBookmarkFromCard = () => {
  bookmarkIcon.setAttribute("fill", "none");
};

bookmarkButton.addEventListener("click", () => {
  const currentFill = bookmarkIcon.getAttribute("fill");
  currentFill === "none" ? addBookmarkToCard() : removeBookmarkFromCard();
});

//Answer button
answerButton.addEventListener("click", () => {
  const isHidden = answerText.toggleAttribute("hidden");
  answerButton.textContent = isHidden ? "Show answer" : "Hide answer";
});
