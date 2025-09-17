import { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import styled from "styled-components";

const fetchItems = async (pageParam) => {
  const response = await fetch("/infinityData.json");
  const data = await response.json();

  if (data[pageParam]) {
    console.log(data[pageParam], "fetch 하는 중");
    return data[pageParam];
  } //mock data라 이렇게 생긴 거지 원래는 백엔드에서 다 페이지 잘라서 줍니다!

  throw new Error("No more data");
};

const InfinitePage = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  const {
    data: queryData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["items"],
    queryFn: ({ pageParam = 1 }) => {
      return fetchItems(pageParam);
    },
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total ? lastPage.page + 1 : undefined,
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (queryData) {
      const allItems = queryData.pages.flatMap((page) => page.data);
      setItems(allItems);
    }
  }, [queryData]);

  useEffect(() => {
    if (inView && hasNextPage) {
    }
  }, [inView, hasNextPage]);

  return (
    <Container>
      <Title>무한 스크롤 예제</Title>
      <ContentBox>
        {items.map((item) => (
          <Item key={item.id}>{item.name}</Item>
        ))}

        <div className="text-center">
          {isFetchingNextPage ? (
            <LoadingText>로딩 중...</LoadingText>
          ) : (
            hasNextPage && <Observer ref={ref} />
          )}
        </div>
      </ContentBox>
      <HomeButton onClick={() => navigate("/")}>Home</HomeButton>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </Container>
  );
};

export default InfinitePage;

// Styled Components
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

const ContentBox = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #64748b;
  padding: 16px;
  border-radius: 0.5rem;
`;

const Item = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const LoadingText = styled.p`
  text-align: center;
  color: #333;
`;

const Observer = styled.div`
  height: 20px;
  background-color: transparent;
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
