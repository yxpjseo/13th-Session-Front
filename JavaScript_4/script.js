const form = document.querySelector(".todo-form");
const btn = document.querySelector(".popup-button");

// 초기화 함수
const init = () => {
  form.addEventListener("submit", addTodoItem);
  btn.addEventListener("click", displayForm);
};

// form 입력창 표시/숨기기 함수
const displayForm = () => {
  form.style.display === "none"
    ? (form.style.display = "block")
    : (form.style.display = "none");
};

// 할 일 추가 함수
const addTodoItem = () => {
  event.preventDefault();

  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력 함수
const printTodoItem = (text) => {
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const todoDel = document.createElement("button");

  // [할 일 내용]
  todoText.innerText = text;
  todoText.addEventListener("click", toggleTodoToDone);

  // [할 일 삭제 버튼]
  todoDel.innerText = "삭제";
  todoDel.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDel);
  document.querySelector(".todo-list").appendChild(todoItem);

  // [input 창 초기화]
  document.querySelector(".todo-input").value = "";
};

// 할 일 삭제 함수
const deleteTodoItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".todo-list").removeChild(target);
};

// 할 일 -> 끝낸 일 이동 함수
const toggleTodoToDone = (e) => {
  deleteTodoItem(e);
  printDoneItem(e.target.innerText);
};

// 끝낸 일 출력 함수
const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneText = document.createElement("span");
  const doneDel = document.createElement("button");

  // [끝낸 일 내용]
  doneText.innerText = text;
  doneText.addEventListener("click", toggleDoneToDo);

  // [끝낸 일 삭제 버튼]
  doneDel.innerText = "삭제";
  doneDel.addEventListener("click", deleteDoneItem);

  // [생성한 요소들 연결]
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);
  document.querySelector(".done-list").appendChild(doneItem);
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-list").removeChild(target);
};

// 끝낸 일 -> 할 일 이동 함수
const toggleDoneToDo = (e) => {
  deleteDoneItem(e);
  printTodoItem(e.target.innerText);
};

// 시작 함수
init();