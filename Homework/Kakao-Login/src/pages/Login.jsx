// 과제 안내
// - 아래 login 함수 내부를 구현하세요.
// - 목표: 카카오 인가 URL을 만들어 window.location.href로 리다이렉트합니다.
// - 파라미터:
//   client_id: import.meta.env.VITE_KAKAO_REST_API_KEY (카카오 REST API 키)
//   redirect_uri: `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/kakao-login`
//   response_type: "code"
//   scope: 필요한 동의항목 (예: "account_email,profile_nickname")
//   state: window.location.origin (로그인 완료 후 돌아올 앱 주소)

export default function Login() {
	const login = () => {
		// TODO: 여기에 카카오 authorize URL을 생성하는 코드를 작성하세요.
		// 예시(의사코드):
		// const params = new URLSearchParams({ ...위 파라미터들... })
		// window.location.href = `https://kauth.kakao.com/oauth/authorize?${params.toString()}`
	};

	return <button onClick={login}>카카오로 로그인</button>;
}
