import React from "react";
import styled from "styled-components";

import TopBar from "../components/Topbar";

// props로 받아올 posts 구조 분해 할당
const HomePage = () => {
	return (
		<Wrapper>
			<TopBar />
			{/* map을 이용해 배열의 요소를 하나씩 렌더링 */}
		</Wrapper>
	);
};

export default HomePage;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
