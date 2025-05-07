import styled from "styled-components";

import BabyLion from "./BabyLion";

const Modal = ({
	setModal,
	track,
	dataList,
	//App.js에서 보내준 props를 구조분해 할당해줍니다!
}) => {
	return (
		<Wrapper>
			<Container>
				<ModalTitle>{track}</ModalTitle>
				<LionsBox>
					{dataList.map((lion) => (
						<BabyLion
							key={lion.id}
							lion={lion}
							//1. babylion 컴포넌트를 클릭했을 때 해당 ID를 설정할 수 있는 함수와
							//2. 선택되었는지를 확인할 수 있는 isSelected 인자를 조건문을 설정하여 넘겨줍시다!
							//hint✉️`: isSelected = {A == B}의 형태로 일치 여부에 따라 t/f로 전달됩니다.
							//A, B에는 어떤 값이 들어가야 선택되었는지를 확인할 수 있을까요?
						/>
					))}
				</LionsBox>
				<DeletModalBtn onClick={() => setModal(false)}>닫기</DeletModalBtn>
			</Container>
		</Wrapper>
	);
};

export default Modal;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 24px;
	background-color: #f5f5f5;
	padding: 1rem 3rem;

	@media (max-width: 1100px) {
		width: 70%;
	}
	@media (min-width: 1100px) {
		width: 50%;
	}

	// 모달 애니메이션
	animation: modal-show 0.3s;
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: -20px;
		}
		to {
			opacity: 1;
			margin-top: 0;
		}
	}
`;
const ModalTitle = styled.div`
	margin-top: 5%;
	color: #3da0fc;
	font-weight: 700;
	font-size: 18px;
	opacity: 0.8;
	@media (max-width: 1100px) {
		font-size: 20px;
	}
	@media (min-width: 1100px) and (max-width: 1700px) {
		font-size: 24px;
	}
`;

const LionsBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin: 1.2rem 0 0.5rem;
`;

const DeletModalBtn = styled.button`
	margin-top: 4%;
	padding: 0.5rem 2rem;
	font-family: "Pretendard";
	color: #ffffff;
	background: #81a7d3;
	border-radius: 1.3rem;
	border: none;
	font-size: 20px;
`;
