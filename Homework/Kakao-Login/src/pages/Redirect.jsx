import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const Redirect = () => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const kakao = window.Kakao;
		const url = new URL(window.location.href);
		const code = url.searchParams.get("code");
		const errorDesc = url.searchParams.get("error_description");

		if (errorDesc) {
			setError(decodeURIComponent(errorDesc));
			return;
		}

		if (!kakao) {
			setError("Kakao SDK 로드 실패");
			return;
		}

		const accessToken = kakao.Auth.getAccessToken();

		if (!accessToken && code) {
			setError("토큰을 가져오지 못했습니다. 다시 시도하세요.");
			return;
		}

		if (!accessToken) {
			navigate("/", { replace: true });
			return;
		}

		kakao.API.request({ url: "/v2/user/me" })
			.then(async (res) => {
				setProfile(res);

				try {
					const fnUrl = `${
						import.meta.env.VITE_SUPABASE_URL
					}/functions/v1/kakao-login`;
					const r = await fetch(fnUrl, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ access_token: accessToken }),
					});
					if (!r.ok) throw new Error("Edge Function error");
					const { oob_code, type, email } = await r.json();

					const { error } = await supabase.auth.verifyOtp({
						email,
						token: oob_code,
						type,
					});
					if (error) throw error;
				} catch (err) {
					console.error(err);
					setError("Supabase 세션 수립에 실패했습니다.");
				}
			})
			.catch((e) => {
				console.error(e);
				setError("사용자 정보를 가져오지 못했습니다.");
			});
	}, [navigate]);

	if (error) {
		return (
			<div style={{ padding: 24 }}>
				<h3>로그인 실패</h3>
				<p>{error}</p>
				<button onClick={() => navigate("/")}>돌아가기</button>
			</div>
		);
	}

	if (!profile) {
		return <div style={{ padding: 24 }}>로그인 처리 중...</div>;
	}

	const nickname =
		profile?.kakao_account?.profile?.nickname || profile?.properties?.nickname;
	const profileImage =
		profile?.kakao_account?.profile?.profile_image_url ||
		profile?.properties?.profile_image;

	return (
		<div style={{ padding: 24 }}>
			<h3>로그인 성공</h3>
			<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
				{profileImage && (
					<img
						src={profileImage}
						alt="profile"
						style={{ width: 56, height: 56, borderRadius: "50%" }}
					/>
				)}
				<div>
					<div>{nickname || "이름 없음"}</div>
					<div style={{ color: "#666" }}>id: {profile?.id}</div>
				</div>
			</div>
			<div style={{ marginTop: 16 }}>
				<button
					onClick={() => {
						window.Kakao.Auth.logout(() => {
							navigate("/", { replace: true });
						});
					}}>
					로그아웃
				</button>
			</div>
		</div>
	);
};

export default Redirect;
