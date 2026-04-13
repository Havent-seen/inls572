const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isHidden = details.classList.contains("hidden");

    if (isHidden) {
      details.classList.remove("hidden");
      button.textContent = "Hide project details";
      button.setAttribute("aria-expanded", "true");
    } else {
      details.classList.add("hidden");
      button.textContent = "Show project details";
      button.setAttribute("aria-expanded", "false");
    }
  });
});

const filterButtons = document.querySelectorAll(".filter-buttons button");
const projects = document.querySelectorAll(".projects-grid article");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    projects.forEach((project) => {
      if (filter === "all" || project.dataset.category === filter) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    });
  });
});

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}