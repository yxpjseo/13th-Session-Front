//mood 선택
const checkboxes = document.querySelectorAll(".single-check");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkboxes.forEach((other) => {
        if (other !== checkbox) other.checked = false;
      });
    }
  });
});

// querySelector 메서드를 사용하여 클래스명이 todo-form인 요소를 선택하고 "form" 변수에 할당해주세요.
const form = document.querySelector(".todo-write");
//add 버튼&img 선택하고 변수에 할당
const addBtn = document.querySelector(".add");
const addImg = addBtn.querySelector("img");
// querySelector 메서드를 사용하여 클래스명이 popup-button인 요소를 선택하고 "btn" 변수에 할당해주세요.
const btn = document.querySelector("#plus");
//초기상태 초기화
const currentDisplay = getComputedStyle(form).display;
form.style.display = "none";

// 초기화 함수
const init = () => {
  // 위에서 가져온 form 요소에서 "submit" 이벤트를 감지하면 addTodoItem 함수를 실행합니다.
  form.addEventListener("submit", addTodoItem);
  //addBtn 마우스 hover시 이미지 변경, out시 복원
  addBtn.addEventListener("mouseover", () => {
    addImg.src = "img/add2.svg";
    addBtn.addEventListener("mouseout", () => {
      addImg.src = "img/add1.svg";
    });
  });
  // 위에서 가져온 btn 요소에서 "click" 이벤트를 감지하면 displayForm 함수를 실행합니다.
  btn.addEventListener("change", () => {
    if (btn.checked) {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  });
};

// 할 일 추가 함수
const addTodoItem = () => {
  // 새로고침 방지 함수
  event.preventDefault();
  // input에 입력한 value를 선택하여 todoContent에 할당한 후 value가 존재하면 할 일 출력 함수 실행
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력 함수
const printTodoItem = (text) => {
  // createElement를 사용해 태그를 생성해주세요.
  // li 요소 생성
  const li = document.createElement("li");

  // label 요소 (체크박스 + 이미지)
  const label = document.createElement("label");
  label.className = "check";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const checkImg = document.createElement("img");
  checkImg.src = "img/check1.svg";
  checkImg.alt = "check";

  // span 요소 (텍스트)
  const span = document.createElement("span");
  // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
  span.innerText = text;

  // button 요소 (삭제 버튼)
  const minusBtn = document.createElement("button");
  minusBtn.className = "minus";

  const minusImg = document.createElement("img");
  minusImg.src = "img/minus1.svg";
  minusImg.alt = "minus";

  minusBtn.appendChild(minusImg);

  // 생성한 checkbox를 클릭하면 toggleTodoToDone 함수가 실행되게 해주세요.
  checkbox.addEventListener("click", toggleTodoToDone);
  // [할 일 삭제 버튼]
  // 생성한 button 태그를 클릭하면 deleteTodoItem 함수가 실행되게 해주세요.
  minusBtn.addEventListener("click", deleteTodoItem);
  // [생성한 요소들 연결]
  // li에 자식 요소들 추가
  label.appendChild(checkbox);
  label.appendChild(checkImg);
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  li.appendChild(label);
  li.appendChild(span);
  li.appendChild(minusBtn);

  // todo-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  const todoList = document.querySelector(".todo-list");
  todoList.appendChild(li);
  // [input 창 초기화]
  document.querySelector(".todo-input").value = "";
};

// 할 일 삭제 함수
const deleteTodoItem = (e) => {
  // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
  const target = e.target.closest("li");
  // 클래스명이 todo-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
  document.querySelector(".todo-list").removeChild(target);
};

// 할 일 -> 끝낸 일 이동 함수
const toggleTodoToDone = (e) => {
  const li = e.target.closest("li");
  const text = li.querySelector("span").innerText;
  //체크박스 체크
  deleteTodoItem(e);
  printDoneItem(text);
};

// 끝낸 일 출력 함수
const printDoneItem = (text) => {
  // createElement를 사용해 태그를 생성해주세요.
  // li 요소 생성
  const li = document.createElement("li");

  // label 요소 (체크박스 + 이미지)
  const label = document.createElement("label");
  label.className = "check";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = true;

  const checkImg = document.createElement("img");
  checkImg.src = "img/check1.svg";
  checkImg.alt = "check";

  // span 요소 (텍스트)
  const span = document.createElement("span");
  // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
  span.innerText = text;

  // button 요소 (삭제 버튼)
  const minusBtn = document.createElement("button");
  minusBtn.className = "minus";

  const minusImg = document.createElement("img");
  minusImg.src = "img/minus1.svg";
  minusImg.alt = "minus";

  minusBtn.appendChild(minusImg);

  // 생성한 checkbox를 클릭하면 toggleTodoToDone 함수가 실행되게 해주세요.
  checkbox.addEventListener("click", toggleDoneToTodo);
  // [할 일 삭제 버튼]
  // 생성한 button 태그를 클릭하면 deleteTodoItem 함수가 실행되게 해주세요.
  minusBtn.addEventListener("click", deleteDoneItem);
  // [생성한 요소들 연결]
  // li에 자식 요소들 추가
  label.appendChild(checkbox);
  label.appendChild(checkImg);
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  li.appendChild(label);
  li.appendChild(span);
  li.appendChild(minusBtn);

  // todo-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  const doneList = document.querySelector(".done-list");
  doneList.appendChild(li);

  //console.log(text); // 이 콘솔은 임시 코드라 나중에 삭제해주세요:)
};

// 끝낸 일 -> 할 일 이동 함수
const toggleDoneToTodo = (e) => {
  const li = e.target.closest("li");
  const text = li.querySelector("span").innerText;
  //체크박스 해제
  deleteDoneItem(e);
  printTodoItem(text);
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
  const target = e.target.closest("li");
  // 클래스명이 todo-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
  document.querySelector(".done-list").removeChild(target);
};

//minus버튼 이미지 변경
const todoList = document.querySelector(".todo-list");
const doneList = document.querySelector(".done-list");

// 공통 마우스 오버/아웃 처리 함수
const handleHover = (e) => {
  if (e.target.closest("button.minus")) {
    const img = e.target.closest("button.minus").querySelector("img");
    img.src = e.type === "mouseover" ? "img/minus2.svg" : "img/minus1.svg";
  }
};

// 이벤트 위임 등록
todoList.addEventListener("mouseover", handleHover);
todoList.addEventListener("mouseout", handleHover);
doneList.addEventListener("mouseover", handleHover);
doneList.addEventListener("mouseout", handleHover);

// 시작 함수
init();
