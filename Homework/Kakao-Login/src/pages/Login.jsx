<<<<<<< HEAD
import { supabase } from "../superbase/client";
=======
//import { supabase } from "../superbase/client";
>>>>>>> 9cef1783 (fix: 카카오 로그인 실습 수정본)

export default function Login() {
	const login = async () => {
		// TODO: 아래 주석을 보고 코드를 완성하세요.
		// 1) origin을 구합니다. (힌트: window.location.origin)
		// 2) supabase.auth.signInWithOAuth를 호출합니다.
		//    - provider: 'kakao'
		//    - options.redirectTo: `${origin}/auth/callback?next=/profile`
		//    - options.scopes: 'account_email profile_nickname profile_image'

<<<<<<< HEAD
		const origin = window.location.origin;
		await supabase.auth.signInWithOAuth({
		provider: 'kakao',
			options: {
				redirectTo: `${origin}/auth/callback?next=/profile`,
				scopes: 'account_email profile_nickname profile_image',
			},
		});

		//alert("TODO: 로그인 로직을 구현해 보세요 (파일: Login.jsx)");
=======
		// 예시)
		// const origin = ...;
		// await supabase.auth.signInWithOAuth({
		// 	provider: 'kakao',
		// 	options: {
		// 		redirectTo: `${origin}/auth/callback?next=/profile`,
		// 		scopes: 'account_email profile_nickname profile_image',
		// 	},
		// });

		alert("TODO: 로그인 로직을 구현해 보세요 (파일: Login.jsx)");
>>>>>>> 9cef1783 (fix: 카카오 로그인 실습 수정본)
	};

	return <button onClick={login}>카카오로 로그인</button>;
}