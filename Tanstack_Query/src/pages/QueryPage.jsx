import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Mock Data
const mockTodos = [
  { id: 1, title: "React 복습하기", completed: false },
  { id: 2, title: "React Query 스터디", completed: true },
  { id: 3, title: "Vanilla JS 복습하기", completed: false },
  { id: 4, title: "이대 멋사 13기 운영진하기 ㅎ.ㅎ", completed: false },
];

const fetchTodos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTodos);
    }, 100);
  });
};

//새로운 To-Do 항목을 추가하는 mock 함수
const addTodo = async (newTodo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMockTodo = { ...newTodo, id: mockTodos.length + 1 };
      mockTodos.push(newMockTodo); //mock 데이터에 추가
      resolve(newMockTodo);
    }, 100);
  });
};

//To-Do 항목을 삭제하는 mock 함수
const deleteTodo = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mockTodos.findIndex((todo) => todo.id === id);
      if (index !== -1) mockTodos.splice(index, 1); // mock 데이터에서 삭제
      resolve(id);
    }, 100);
  });
};

const QueryPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  //1) useQuery로 To-Do 리스트 가져오기
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  //2) useMutation으로 새로운 To-Do 항목 추가
  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  //3) useMutation으로 To-Do 항목 삭제
  //위 addMutation을 참고해서 useMutation을 사용한 delete 기능을 구현해봅시다!
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching todos</div>;

  return (
    <Container>
      <Title>To-Do List</Title>

      <TodoListContainer>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id}>
              <span>{todo.title}</span>
              {/* <DeleteButton
              onClick={}>Delete</DeleteButton> */}
            </TodoItem>
          ))}
        </ul>

        <AddButton
          onClick={() => {
            addMutation.mutate({
              userId: 5,
              title: "아기사자 짱🦁",
              completed: false,
            });
          }}
        >
          Add To-Do
        </AddButton>
      </TodoListContainer>
      <HomeButton onClick={() => navigate("/")}>Home</HomeButton>
    </Container>
  );
};

export default QueryPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: #e5e7eb;
  min-height: 100vh;
  font-family: "Pretendard", sans-serif;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoListContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const DeleteButton = styled.button`
  margin-left: 16px;
  padding: 4px 8px;
  font-size: 0.875rem;
  color: #dc2626;
  background-color: #e5e7eb;
  border-radius: 0.375rem;
  &:hover {
    background-color: #d1d5db;
  }
`;

const AddButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 0.5rem;
  &:hover {
    background-color: #2563eb;
  }
`;

const HomeButton = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 0.375rem;
  &:hover {
    background-color: #f3f4f6;
  }
`;
