var days = document.getElementById('days')
var hours = document.getElementById('hours')
var min = document.getElementById('min')
var sec = document.getElementById('sec')
const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  days.innerText = d;
  hours.innerText = h;
  min.innerText = m;
  sec.innerText = s;
  setTimeout(updateCountdown, 1000)
}