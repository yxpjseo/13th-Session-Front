// querySelector 메서드를 사용하여 클래스명이 todo-form인 요소를 선택하고 "form" 변수에 할당해주세요.
 // <- 코드 입력
 // querySelector 메서드를 사용하여 클래스명이 popup-button인 요소를 선택하고 "btn" 변수에 할당해주세요.
 // <- 코드 입력
 
 // 초기화 함수
 const init = () => {
    // 위에서 가져온 form 요소에서 "submit" 이벤트를 감지하면 addTodoItem 함수를 실행합니다.
    // <- 코드 입력
    // 위에서 가져온 btn 요소에서 "click" 이벤트를 감지하면 displayForm 함수를 실행합니다.
    // <- 코드 입력
  };
  
  // form 입력창 표시/숨기기 함수
  const displayForm = () => {
    // 삼항연산자를 사용해서 form 태그의 display 값이 "none"이면 "block"으로, 아니면 "none"으로 바뀌게 해주세요.
    // <- 코드 입력
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
    // createElement를 사용해 li, span, button 태그를 생성해주세요.
    // <- 코드 입력
    // <- 코드 입력
    // <- 코드 입력
  
    // [할 일 내용]
    // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
    // <- 코드 입력
  
    // 생성한 span 태그를 클릭하면 toggleTodoToDone 함수가 실행되게 해주세요.
    // <- 코드 입력
  
    // [할 일 삭제 버튼]
    // 생성한 button 태그에 "삭제"라는 텍스트를 넣어주세요.
    // <- 코드 입력
  
    // 생성한 button 태그를 클릭하면 deleteTodoItem 함수가 실행되게 해주세요.
    // <- 코드 입력
  
    // [생성한 요소들 연결]
    // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
    // <- 코드 입력
    // <- 코드 입력
  
    // todo-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
    // <- 코드 입력
  
    // [input 창 초기화]
    document.querySelector(".todo-input").value = "";
  };
  
  // 할 일 삭제 함수
  const deleteTodoItem = (e) => {
    // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
    // <- 코드 입력
    // 클래스명이 todo-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
    // <- 코드 입력
  };
  
  // 할 일 -> 끝낸 일 이동 함수
  const toggleTodoToDone = (e) => {
    // 할 일 목록에서 할 일 삭제하기
    deleteTodoItem(e);
    // 끝낸 일 목록에 추가하기
    printDoneItem(e.target.innerText);
  };
  
  // 끝낸 일 출력 함수
  const printDoneItem = (text) => {
    // createElement를 사용해 li, span. button 태그를 생성해주세요.
    // <- 코드 입력
    // <- 코드 입력
    // <- 코드 입력
  
    // [끝낸 일 내용]
    // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
    // <- 코드 입력
  
    // 생성한 span 태그를 클릭하면 toggleDoneToDo 함수가 실행되게 해주세요.
    // <- 코드 입력
  
    // [끝낸 일 삭제 버튼]
    // 생성한 button 태그에 "삭제"라는 텍스트를 넣어주세요.
    // <- 코드 입력
  
    // 생성한 button 태그를 클릭하면 deleteDoneItem 함수가 실행되게 해주세요.
    // <- 코드 입력
  
    // [생성한 요소들 연결]
    // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
    // <- 코드 입력
    // <- 코드 입력
  
    // done-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
    // <- 코드 입력
  
    console.log(text); // 이 콘솔은 임시 코드라 나중에 삭제해주세요:)
  };
  
  // 끝낸 일 삭제 함수
  const deleteDoneItem = (e) => {
    // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
    // <- 코드 입력
    // 클래스명이 done-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
    // <- 코드 입력
  };
  
  // 끝낸 일 -> 할 일 이동 함수
  const toggleDoneToDo = (e) => {
    // 끝낸 일 목록에서 끝낸 일 삭제하기
    deleteDoneItem(e);
    // 할 일 목록에 추가하기
    printTodoItem(e.target.innerText);
  };
  
  // 시작 함수
  init();