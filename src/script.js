const themeSwitcher = document.querySelector(".app__toggle-slider");
themeSwitcher.addEventListener("click", (e) => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
});
