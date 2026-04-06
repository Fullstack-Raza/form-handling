const form = document.querySelector("form");
const apple = document.querySelector("#apple");
const seb = document.querySelector("#seb");
const se = document.querySelector("#se");
const app = document.querySelector("#app");
const arr = [1, 2, 3, 4, 5, 6];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  
  
 se.textContent=(apple.value)
 app.textContent=(seb.value)
});
