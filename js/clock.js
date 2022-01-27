const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 즉시 한 번 호출하고 나서
// 1000ms 마다 호출
getClock();
setInterval(getClock, 1000);
