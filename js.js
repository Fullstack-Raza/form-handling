const form = document.querySelector("form");
const apple = document.querySelector("#apple");
const seb = document.querySelector("#seb");
const se = document.querySelector("#se");
const app = document.querySelector("#app");
const Start = document.querySelector("#Start");
const Stop = document.querySelector("#Stop");
const boxbg = document.querySelector("#bg");
const arr = [1, 2, 3, 4, 5, 6];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  se.textContent = apple.value;
  app.textContent = seb.value;

  apple.value = "";
  seb.value = "";
});
function tilo() {
  boxbg.style.backgroundColor = randomcolor();
}
var timi;
const timelog = function () {
  timi = setInterval(tilo, 200);
};

const cleartime = function () {
  clearInterval(timi);
};
Start.addEventListener("click", timelog);
Stop.addEventListener("click", cleartime);

const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
