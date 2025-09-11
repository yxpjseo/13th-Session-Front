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

			// 카카오에서 전달받은 인가 코드가 있는 경우
			if (code) {
				setMessage("카카오 로그인 처리 중...");
				// 여기서 백엔드 API 또는 Supabase Edge Function을 호출하여
				// 인가 코드를 액세스 토큰으로 교환하고 사용자 정보를 가져와야 합니다.
				console.log("Authorization code:", code);
				// TODO: 실제 구현에서는 백엔드 API 호출이 필요합니다.
			}

			// Edge Function이 반환한 oob_code가 쿼리에 있을 수도 있음
			const oob = url.searchParams.get("oob_code");
			const email = url.searchParams.get("email");
			const type = url.searchParams.get("type") || "magiclink";

			// TODO(과제): oob_code와 email이 존재하면 Supabase 세션을 생성하세요.
			// 힌트: supabase.auth.verifyOtp({ email, token: oob, type }) 사용
			// const { error } = await supabase.auth.verifyOtp({ ... })
			if (oob && email) {
				const { error } = await supabase.auth.verifyOtp({
					email,
					token: oob,
					type
				})
			}

			const { data } = await supabase.auth.getSession();
			if (data.session) {
				navigate(next, { replace: true });
			} else {
				setMessage("세션이 없습니다. 다시 로그인 해주세요.");
			}
		})();
	}, [navigate]);

	return <div style={{ padding: 24 }}>{message}</div>;
};

export default AuthCallback;
