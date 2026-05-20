const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const filterButtons = document.querySelectorAll(".filter-button");
const timelineItems = document.querySelectorAll(".timeline-item");
const accordionTriggers = document.querySelectorAll(".accordion-trigger");
const quizButtons = document.querySelectorAll(".quiz-options button");
const quizResult = document.querySelector(".quiz-result");

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((currentButton) => {
      currentButton.classList.toggle("active", currentButton === button);
    });

    timelineItems.forEach((item) => {
      const matchesFilter = selectedFilter === "all" || item.dataset.category === selectedFilter;
      item.classList.toggle("is-hidden", !matchesFilter);
    });
  });
});

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const panel = trigger.nextElementSibling;
    const willOpen = trigger.getAttribute("aria-expanded") !== "true";

    trigger.setAttribute("aria-expanded", String(willOpen));

    if (panel instanceof HTMLElement) {
      panel.hidden = !willOpen;
    }
  });
});

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    quizButtons.forEach((currentButton) => {
      currentButton.classList.remove("correct", "wrong");
    });

    const isCorrect = button.dataset.answer === "correct";
    button.classList.add(isCorrect ? "correct" : "wrong");

    if (quizResult) {
      quizResult.textContent = isCorrect
        ? "Correct. Writing gave Anne a way to express thoughts, fear, hope, and ambition."
        : "Try again. Look back at the diary section for the clue.";
    }
  });
});
