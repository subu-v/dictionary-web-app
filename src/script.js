const themeSwitcher = document.querySelector(".app__toggle-slider");
const fontItemsDropdown = document.querySelector(".app__font-items-dropdown");
const secondaryHeading = document.querySelector(".app__secondary-heading");
const bodyElement = document.body;
// THEME SWITCHER
themeSwitcher.addEventListener("click", (e) => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
});

// FONT-FAMILY SWITCHER
fontItemsDropdown.addEventListener("click", (e) => {
  if (e.target.textContent === "Sans Serif") {
    bodyElement.style.fontFamily = "sans-serif";
    secondaryHeading.style.fontWeight = "700";
    secondaryHeading.style.fontStyle = "italic";
  } else if (e.target.textContent === "Serif") {
    bodyElement.style.fontFamily = "lora";
    secondaryHeading.style.fontWeight = "400";
    secondaryHeading.style.fontStyle = "normal";
  } else if (e.target.textContent === "Mono") {
    bodyElement.style.fontFamily = "mono";
    secondaryHeading.style.fontWeight = "400";
    secondaryHeading.style.fontStyle = "normal";
  }
});
