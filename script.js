function createSnow() {
  let container = document.querySelector(".container");
  let span = document.createElement("span");

  span.style.left = Math.random() * innerWidth + "px";

  container.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 5000);
}

setInterval(createSnow, 100);

// count down part

let countDate = new Date("jan 01, 2023 00:00:00").getTime();

function countDown() {
  let now = new Date().getTime();
  gap = countDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / seconds);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
}

setInterval(() => {
  countDown();
}, 1000);
