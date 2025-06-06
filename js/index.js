//VARIABLES
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-text"]');

//FUNCTIONS
const toggleBookmark = () => {
  const isCardBookmarked = bookmarkIcon.getAttribute("fill") === "black";
  bookmarkIcon.setAttribute("fill", isCardBookmarked ? "none" : "black");
};

//EVENT LISTENERS
bookmarkButton.addEventListener("click", toggleBookmark);

answerButton.addEventListener("click", () => {
  const isAnswerHidden = answerText.toggleAttribute("hidden");
  answerButton.textContent = isAnswerHidden ? "Show answer" : "Hide answer";
});