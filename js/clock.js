const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// 즉시 한 번 호출하고 나서
// 1000ms 마다 호출
getClock();
setInterval(getClock, 1000);
