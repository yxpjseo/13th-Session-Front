import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../superbase/client";

const AuthCallback = () => {
	const navigate = useNavigate();
	const [message, setMessage] = useState("처리 중...");

	useEffect(() => {
		(async () => {
			const url = new URL(window.location.href);
			const error = url.searchParams.get("error");
			const next = url.searchParams.get("next") || "/";
			const code = url.searchParams.get("code");

			if (error) {
				setMessage(`로그인 실패: ${error}`);
				return;
			}

<<<<<<< HEAD
			try {
				// Supabase OAuth 콜백 처리
				setMessage("로그인 처리 중...");
				
				const { data, error: sessionError } = await supabase.auth.getSession();
				
				if (sessionError) {
					console.error("Session error:", sessionError);
					setMessage(`세션 오류: ${sessionError.message}`);
					return;
				}

				if (data.session) {
					console.log("로그인 성공:", data.session.user);
					setMessage("로그인 성공! 리다이렉트 중...");
					setTimeout(() => {
						navigate(next, { replace: true });
					}, 1000);
				} else {
					// URL에서 인증 정보 확인
					const hashParams = new URLSearchParams(window.location.hash.substring(1));
					const urlParams = new URLSearchParams(window.location.search);
					
					if (hashParams.has('access_token') || urlParams.has('code')) {
						setMessage("인증 정보 처리 중...");
						// 잠시 후 다시 세션 확인
						setTimeout(async () => {
							const { data: retryData } = await supabase.auth.getSession();
							if (retryData.session) {
								navigate(next, { replace: true });
							} else {
								setMessage("세션 생성에 실패했습니다. 다시 로그인해 주세요.");
							}
						}, 2000);
					} else {
						setMessage("인증 정보가 없습니다. 다시 로그인해 주세요.");
					}
				}
			} catch (error) {
				console.error("Auth callback error:", error);
				setMessage(`오류가 발생했습니다: ${error.message}`);
=======
			// TODO: 인가코드(code)로 세션을 교환하세요.
			// 힌트: const code = url.searchParams.get('code')
			// 힌트: await supabase.auth.exchangeCodeForSession(code)
			// 에러가 있으면 setMessage로 표시하고 return 하세요.
			// 아래는 예시 형태입니다.
			// const code = url.searchParams.get('code');
			// if (code) {
			// 	const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
			// 	if (exchangeError) {
			// 		setMessage(`세션 생성 실패: ${exchangeError.message}`);
			// 		return;
			// 	}
			// }

			const { data } = await supabase.auth.getSession();
			if (data.session) {
				navigate(next, { replace: true });
			} else {
				setMessage("세션이 없습니다. 다시 로그인 해주세요.");
>>>>>>> 9cef1783 (fix: 카카오 로그인 실습 수정본)
			}
		})();
	}, [navigate]);

	return <div style={{ padding: 24 }}>{message}</div>;
};

export default AuthCallback;
