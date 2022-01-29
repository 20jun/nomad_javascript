const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복되는 string은 대문자 변수로 저장해놓는 것이 좋다.
// 왜? 오타 발생 시 error 메세지 출력을 하지 않아서 어디서 에러가 났는지 확인하기가 힘들다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// event는 이름 상관 없지만 보기 쉽게 event라 지정하는게 국룰
function onLoginSubmit(event) {
  // form 안에서 어떤 이벤트 발생 시 새로고침이 되는데 preventDefault로 방지함.
  event.preventDefault();
  // Input 안에 작성한 사용자 이름값을 username으로 저장
  const username = loginInput.value;
  // 로그인 하고 나면 "hidden"을 클래스 이름에 넣는다.
  // css에서 .hidden에 display : none; 이 설정되어 있어서
  // 로그인 뒤에 input이 숨겨진다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 새로고침을 하게 되면 어디에 저장해놓지 않았기 때문에 다시 입력해야됨.
  // 그래서 localStorage에 key는 "username", value는 input에 입력한 값을 저장한다.
  // key value 한 쌍
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  // greeting은 h1 태그, Hello username을 innerText해버림.
  greeting.innerText = `Hello ${username}`;
  // 로그인하고나면 화면에 보여야되므로 id hidden을 지워준다.(보이게)
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에서 key값이 username인 것을 savedUsername에 저장
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 만약, 불러온 것이 없다면
if (savedUsername === null) {
  // loginForm을 보여준다.
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // form에서 submit event 발생 시, onLoginSubmit 함수 실행
  loginForm.addEventListener("submit", onLoginSubmit);
  // 불러온 것이 있다면(이미 값이 존재한다면)
} else {
  // 불러온 값을 인자로 전달하여 화면에 보여준다.
  paintGreetings(savedUsername);
  // show the greetings
}
