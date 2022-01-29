const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// 자주사용하는 string이므로 대문자 변수명에 저장
const TODOS_KEY = "todos";

// let은 재할당 가능
let toDos = [];

// localStorage에 저장하기 위해 선언한 함수
function saveToDos() {
  // key : todos, value : toDos배열
  // string으로 저장하기 위해 JSON.stringify 사용
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// X 버튼 클릭 시 실행되는 함수
function deleteToDo(event) {
  // 실행된 event의 부모 element : li
  const li = event.target.parentElement;
  // 지운다.
  console.log(li);
  li.remove();
  // X 버튼을 클릭한 li의 id 값과 li 목록에 있는 id값이 일치하는 것만 제외하고 새롭게 배열을 생성하여 기존에 선언한 toDos 배열에 다시 저장
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  // li element 생성
  const li = document.createElement("li");
  // 할 일 목록을 지울 때, 어떤 li인지 판별하기 위해 id값에 고유값 지정
  li.id = newTodo.id;
  // span element 생성
  const span = document.createElement("span");
  // 입력한 할 일을 span innerText로 지정
  span.innerText = newTodo.text;
  // button element 생성
  const button = document.createElement("button");
  // X 버튼 만들기 위해
  button.innerText = "❌";
  // button을 클릭했을 때 deleteToDo 함수 실행
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// event 정보가 담겨져있는 event를 받음
function handleToDoSubmit(event) {
  // event 중단
  event.preventDefault();

  // form 안에 있는 input에 입력한 값을 newTodo에 저장
  const newTodo = toDoInput.value;
  // input을 비워줌.(새롭게 작성하기 위해서)
  toDoInput.value = "";
  const newTodoObj = {
    // text는 입력한 할 일,
    text: newTodo,
    // id는 현재시간(겹칠 일 없는 유일 값 만들기 위해)
    id: Date.now(),
  };
  // toDos 배열에 객체를 넣어준다.
  toDos.push(newTodoObj);

  paintToDo(newTodoObj);
  saveToDos();
}

// todo-form에서 event 발생 시에 handleToDoSubmit 함수 실행
toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage에 저장된 값을 찾아온다.
const savedToDos = localStorage.getItem(TODOS_KEY);

// 만약 저장되어있는 값이 있다면
if (savedToDos) {
  // JSON stingify를 사용하여 저장된 값을 객체형태로 바꾸어 줌
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // parsedToDos 배열 하나하나마다 paintToDo 함수 실행 적용
  parsedToDos.forEach(paintToDo);
}

function sexyFilter(item) {
  console.log(item);
}

[1, 2, 3, 4].filter(sexyFilter);
