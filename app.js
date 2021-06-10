const statements = document.querySelectorAll(".statements");
const form = document.querySelector("form");
const formContainer = document.querySelector(".form-container");
const descriptionDesign = document.querySelector(".description-design");
const description = document.querySelector(".description");
const descriptionPharagraph = document.querySelector(".mission");

const animateStatements = () => {
  let optionsStatement = {
    rootMargin: "-45%",
    treshold: 0.0,
  };

  let observer = new IntersectionObserver(showItem, optionsStatement);

  function showItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-statements");
      }
    });
  }

  statements.forEach((item) => {
    observer.observe(item);
  });
};

const animateForm = () => {
  let optionsForm = {
    rootMargin: "-20%",
    treshold: 0.0,
  };

  let observer = new IntersectionObserver(showItem, optionsForm);

  function showItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-form-container");
        form.classList.add("active-form");
      }
    });
  }

  observer.observe(formContainer);
};

const animateDescriptionDesign = () => {
  let optionsDescription = {
    rootMargin: "-40%",
    treshold: 0.0,
  };

  let observer = new IntersectionObserver(showItem, optionsDescription);

  function showItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-description-design");
        description.classList.add("active-description");
        descriptionPharagraph.classList.add("active-mission");
      }
    });
  }

  observer.observe(descriptionDesign);
};

animateStatements();
animateForm();
animateDescriptionDesign();
