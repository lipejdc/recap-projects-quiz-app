//VARIABLES
const newCardForm = document.querySelector('[data-js="add-card-form"]');
const newCardQuestion = document.querySelector('[data-js="textarea-question"]');
const newCardAnswer = document.querySelector('[data-js="textarea-answer"]');
const questionCharCount = document.querySelector(
  '[data-js="question-char-count"]'
);
const answerCharCount = document.querySelector('[data-js="answer-char-count"]');

//FUNCTIONS
const updateCharacterCount = (textAreaElement, counterElement) => {
  const charactersRemaining =
    textAreaElement.maxLength - textAreaElement.value.length;
  counterElement.textContent = `${charactersRemaining} characters left.`;
};

const createNewCard = (question, answer, tag) => {
  const card = document.createElement("article");
  card.classList.add("question-card");

  const heading = document.createElement("h2");
  heading.classList.add("question-card__heading");
  heading.textContent = question;

  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("question-card__tags");

  const tagSpan = document.createElement("span");
  tagSpan.classList.add("question-card__tag");
  tagSpan.textContent = `#${tag}`;
  tagsContainer.append(tagSpan);

  const answerParagraph = document.createElement("p");
  answerParagraph.classList.add("question-card__text");
  answerParagraph.setAttribute("data-js", "answer-text");
  answerParagraph.hidden = true;
  answerParagraph.textContent = answer;

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("question-card__bookmark-button");
  bookmarkButton.setAttribute("data-js", "bookmark-button");

  const bookmarkIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  bookmarkIcon.classList.add("question-card__bookmark-icon");
  bookmarkIcon.setAttribute("viewBox", "0 0 24 24");
  bookmarkIcon.setAttribute("fill", "none");
  bookmarkIcon.setAttribute("stroke", "currentColor");
  bookmarkIcon.setAttribute("stroke-width", "2");
  bookmarkIcon.setAttribute("stroke-linecap", "round");
  bookmarkIcon.setAttribute("stroke-linejoin", "round");
  bookmarkIcon.setAttribute("data-js", "bookmark-icon");

  const bookmarkPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  bookmarkPath.setAttribute(
    "d",
    "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
  );

  bookmarkButton.append(bookmarkIcon);
  bookmarkIcon.append(bookmarkPath);

  const answerButton = document.createElement("button");
  answerButton.classList.add("question-card__answer-button");
  answerButton.setAttribute("data-js", "answer-button");
  answerButton.textContent = "Hide answer";

  card.append(heading);
  card.append(tagsContainer);
  card.append(answerParagraph);
  card.append(bookmarkButton);
  card.append(answerButton);

  return card;
};

//EVENT LISTENERS
newCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target;
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  //   const { question, answer, tag } = data;

  const cardQuestion = data.question;
  const cardAnswer = data.answer;
  const cardTag = data.tag;

  const card = createNewCard(cardQuestion, cardAnswer, cardTag);
  //   newCardForm.append(card);
  newCardForm.insertAdjacentElement("afterend", card);

  const answerButton = card.querySelector('[data-js="answer-button"]');
  const answerText = card.querySelector('[data-js="answer-text"]');
  const bookmarkIcon = card.querySelector('[data-js="bookmark-icon"]');

  answerButton.addEventListener("click", () => {
    const isHidden = answerText.toggleAttribute("hidden");
    answerButton.textContent = isHidden ? "Show answer" : "Hide answer";
  });

  bookmarkIcon.addEventListener("click", () => {
    const isBookmarked = bookmarkIcon.getAttribute("fill") === "black";
    bookmarkIcon.setAttribute("fill", isBookmarked ? "none" : "black");
  });

  event.target.reset();
  updateCharacterCount(newCardQuestion, questionCharCount);
  updateCharacterCount(newCardAnswer, answerCharCount);
});

newCardQuestion.addEventListener("input", () => {
  updateCharacterCount(newCardQuestion, questionCharCount);
});

newCardAnswer.addEventListener("input", () => {
  updateCharacterCount(newCardAnswer, answerCharCount);
});
