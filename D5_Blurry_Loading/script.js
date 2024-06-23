const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (int > 99) {
    clearInterval(int);
  }
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${30 - 3 * (load / 10)}px)`;
}
