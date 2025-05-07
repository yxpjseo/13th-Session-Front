import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ModalPage from "./pages/ModalPage";

function App() {
	// 초기 게시글 배열
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "제목1",
			content: "프론트 아기사자들 이번 과제도 파이팅~~~",
		},
		{
			id: 2,
			title: "제목2",
			content:
				"useState와 props의 심화 연습 과정입니다:) react-router-dom, useEffect, useRef가 어떻게 활용되는지도 꼼꼼히 살펴보시길....",
		},
	]);

	return (
		<BrowserRouter>
			<Routes>
				{/* 홈 화면에서 게시글 보여줘야 하므로 props로 전달 코드 추가하기 */}
				<Route path="/" element={<HomePage />} />
				{/* 작성 화면에서 게시글 배열에 새로운 게시글 추가해야 하므로 props로 전달 코드 추가하기 */}
				<Route path="/create" element={<CreatePage />} />
				<Route path="/modal" element={<ModalPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
