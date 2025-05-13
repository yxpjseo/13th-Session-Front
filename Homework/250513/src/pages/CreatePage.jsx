import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TopBar from "../components/TopBar";

// props로 받아올 posts, setPosts 구조 분해 할당
const CreatePage = () => {
	// 게시글 작성 시 홈 화면으로 이동시키기 위한 네비게이트 함수 선언
	// - 여기에 작성

	// 새로운 게시글을 저장할 useState
	// (제목과 내용 2가지 값을 1개의 useState에서 객체 형식으로 관리)
	const [newPost, setNewPost] = useState({
		id: posts.length + 1,
		title: "",
		content: "",
	});
	// 제목과 내용을 구조 분해 할당으로 풀어쓰기
	const { title, content } = newPost;

	// input의 change 이벤트에 바인딩할 함수 선언
	// (두 input을 모두 관리할 수 있는 통합 함수)
	const onChange = (e) => {
		// input의 name과 value를 구조 분해 할당으로 받아옴
		// - 여기에 작성
		// 새로운 게시글에 input 값을 반영하기
		// 키 이름은 name, 값은 value로
		// - 여기에 작성
	};

	// 제목 입력창에서 엔터를 누르면 내용 입력창으로 포커스가 넘어가는 로직
	const [next, setNext] = useState(false);
	const firstInput = useRef(null);
	const secondInput = useRef(null);
	// 첫 렌더링 시 제목 입력창에 포커스
	// - 여기에 작성
	// next가 변경되면, true인지 검사하고 제목 입력창에 포커스
	// - 여기에 작성

	// 제목 입력창에 submit 이벤트 발생 시 바인딩할 함수
	const onNext = (e) => {
		e.preventDefault();
		if (!title) alert("제목을 입력해주세요.");
		else setNext(true);
	};

	// 내용 입력창에 submit 이벤트 발생 시 바인딩할 함수 정의
	const onSubmit = (e) => {
		e.preventDefault();
		if (!content) alert("내용을 입력해주세요.");
		else {
			setNext(false);
			// App.js에서 정의했던 게시글 배열에 새로운 게시글 추가
			// (힌트 : 스프레드 문법, 프로퍼티 축약 표현)
			// - 여기에 작성
			// 홈 화면으로 이동
			// - 여기에 작성
		}
	};

	return (
		<Wrapper>
			<TopBar />
			<Container>
				<form onSubmit={onNext}>
					<input
						placeholder="제목"
						name="title"
						value={title}
						onChange={onChange}
						ref={firstInput}
					/>
				</form>
				<form onSubmit={onSubmit} className="second-form">
					<input
						placeholder="내용"
						name="content"
						value={content}
						onChange={onChange}
						ref={secondInput}
					/>
					<button type="submit">제출</button>
				</form>
			</Container>
		</Wrapper>
	);
};

export default CreatePage;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	width: 30%;
	margin-top: 3%;
	input {
		outline: 0;
		padding: 5px;
		font-size: 1.2rem;
	}
	input:focus {
		border: 2px solid lightcoral;
	}
	form {
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
	}
	button {
		margin-top: 10px;
		padding: 10px;
		background-color: lavenderblush;
		border: 0;

		cursor: pointer;
	}
`;
