import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Kakao SDK 초기화
function initializeKakaoSdk() {
	const kakao = window.Kakao;
	const appKey = import.meta.env.VITE_KAKAO_JS_KEY;
	if (!kakao) {
		console.warn(
			"Kakao SDK가 로드되지 않았습니다. index.html에 스크립트를 확인하세요."
		);
		return;
	}
	if (!appKey) {
		console.warn("VITE_KAKAO_JS_KEY가 설정되지 않았습니다. .env에 설정하세요.");
		return;
	}
	if (!kakao.isInitialized()) {
		kakao.init(appKey);
	}
}

export function Bootstrap() {
	useEffect(() => {
		initializeKakaoSdk();
	}, []);
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Bootstrap />
	</StrictMode>
);
