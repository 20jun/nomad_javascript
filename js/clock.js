// HTML 내부에서 h2 태그의 id가 clock인 element를 clock변수에 저장
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();

  // padStart로 시간 단위가 한자리인 경우 0을 채워놓음.
  // 1 => 01
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // clock 텍스트 지정
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 즉시 한 번 호출하고 나서(호출하지 않으면 기본 00:00이 1초간 보임)
getClock();
// 1000ms(1초) 마다 시간을 불러오게 setInterval 사용,
// 한 번만 불러올거면 setTimeout 함수 사용
setInterval(getClock, 1000);
