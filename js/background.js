// images 무작위로 뽑기 위해서 파일명 배열 형태로 저장
const images = ["0.jpg", "1.jpg", "2.jpg"];

// Math.random() 0~1 곱하기 images.length 3
// 의 내림값으로 0, 1, 2만 나옴
const chosenImage = images[Math.floor(Math.random() * images.length)];

// img 태그 생성
const bgImage = document.createElement("img");

// img src 경로에 0.jpg, 1.jpg, 2.jpg 넣기
bgImage.src = `img/${chosenImage}`;

// body 아래에 bgImage(img) 덧붙이기
document.body.appendChild(bgImage);
