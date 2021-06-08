const statements = document.querySelectorAll(".statements");
const description = document.querySelector(".description p");

let options = {
  rootMargin: "-45%",
  treshold: 0.0,
};

const animateStatements = () => {
  let observer = new IntersectionObserver(showItem, options);

  function showItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }

  statements.forEach((item) => {
    observer.observe(item);
  });
};

const animateDescription = () => {
  let observer = new IntersectionObserver(showItem, options);

  function showItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-description");
        console.log("hello");
      }
    });
  }

  observer.observe(description);
};

animateStatements();
// animateDescription();
