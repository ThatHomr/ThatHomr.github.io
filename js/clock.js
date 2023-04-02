const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  let hours2 = hours;
  let amPm = "AM";
  if (hours2 >= 12) {
    amPm = "PM";
    hours2 -= 12;
    hours2 = String(hours2).padStart(2, "0");
  }
  clock.innerText = `${amPm}${hours2}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
