"use strict";
// THEME SWITCHER
const themeSwitcher = document.querySelector(".app__toggle-slider");

themeSwitcher.addEventListener("click", (e) => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
});

// FONT-FAMILY SWITCHER
const fontSwitcherText = document.querySelector(".app__font-desc");
const fontItemsDropdown = document.querySelector(".app__font-items-dropdown");
const partOfSpeechText = document.querySelector(".app__part-of-speech");
const bodyElement = document.body;

fontItemsDropdown.addEventListener("click", (e) => {
  if (e.target.textContent === "Sans Serif") {
    fontSwitcherText.textContent = "Sans Serif";
    bodyElement.style.fontFamily = "sans-serif";
    partOfSpeechText.style.fontWeight = "700";
    partOfSpeechText.style.fontStyle = "italic";
  } else if (e.target.textContent === "Serif") {
    fontSwitcherText.textContent = "Serif";
    bodyElement.style.fontFamily = "lora";
    partOfSpeechText.style.fontWeight = "400";
    partOfSpeechText.style.fontStyle = "normal";
  } else if (e.target.textContent === "Mono") {
    fontSwitcherText.textContent = "Mono";
    bodyElement.style.fontFamily = "mono";
    partOfSpeechText.style.fontWeight = "400";
    partOfSpeechText.style.fontStyle = "normal";
  }
});

// FORM VALIDATION & FETCH DATA
const inputElement = document.querySelector(".app__input");
const inputErrorText = document.querySelector(".app__input-empty-error");
const inputTextElement = document.querySelector(".app__input-text");
const phoneticTextElement = document.querySelector(".app__phonetic");
const meaningSrcLink = document.querySelector(".app__meaning-src-link");

inputElement.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (this.value === "") {
      this.style.borderColor = "#FF5252";
      inputErrorText.style.visibility = "visible";
    } else {
      this.style.borderColor = "#A445ED";
      inputErrorText.style.visibility = "hidden";
    }

    fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputElement.value}`
    )
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        inputTextElement.textContent = val[0].word;
        phoneticTextElement.textContent = val[0].phonetic;
        meaningSrcLink.setAttribute("href", val[0].sourceUrls[0]);
        meaningSrcLink.textContent = val[0].sourceUrls[0];
      });
  }
});
