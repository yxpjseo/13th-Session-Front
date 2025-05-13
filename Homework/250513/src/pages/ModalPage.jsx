import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";

const ModalPage = () => {
	//모달창의 열고 닫힌 상태를 관리하는 useState 선언

	// 모달창의 state를 바꾸는 함수 작성 (true <-> false)

	return (
		<Wrapper>
			<TopBar />
			<Text>
				버튼을 클릭하면 모달이 열립니다. <br />
				모달이 열려있을 때 모달 바깥 영역을 클릭하면 모달이 닫힙니다. <br />
				모달 내부를 클릭하면 닫히지 않습니다.
			</Text>
			{/* 모달창을 여는 버튼, 클릭하면 위에서 작성한 함수 호출 */}
			<OpenBtn>모달 열기</OpenBtn>
			{/* 모달창의 state에 따라 Modal 컴포넌트를 조건부 렌더링 */}
			{/* Modal 컴포넌트에 모달 상태 변경 함수 props로 전달 */}
		</Wrapper>
	);
};

export default ModalPage;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Text = styled.div`
	margin-top: 3%;
	text-align: center;
	line-height: 150%;
	font-size: 1.2rem;
	color: gray;
`;

const OpenBtn = styled.button`
	width: 20%;
	margin-top: 3%;
	padding: 10px;
	background-color: lavenderblush;
	border: 0;

	cursor: pointer;
`;
