import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../superbase/client";

export default function Profile() {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const { data } = await supabase.auth.getUser();
			setUser(data.user || null);
			setLoading(false);
		})();
	}, []);

	if (loading) return <div style={{ padding: 24 }}>불러오는 중...</div>;

	if (!user) {
		return (
			<div style={{ padding: 24 }}>
				로그인이 필요합니다.
				<div style={{ marginTop: 12 }}>
					<button onClick={() => navigate("/")}>로그인으로</button>
				</div>
			</div>
		);
	}

	const nickname =
		user.user_metadata?.nickname ||
		user.user_metadata?.name ||
		user.user_metadata?.full_name ||
		"닉네임 없음";
	const profileImage =
		user.user_metadata?.profile_image_url ||
		user.user_metadata?.avatar_url ||
		user.user_metadata?.picture ||
		user.user_metadata?.thumbnail_image_url ||
		"";

	return (
		<div style={{ padding: 24 }}>
			<h3>프로필</h3>
			<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
				{profileImage && (
					<img
						src={profileImage}
						alt="profile"
						style={{ width: 56, height: 56, borderRadius: "50%" }}
					/>
				)}
				<div>
					<div>{nickname}</div>
					<div style={{ color: "#666" }}>email: {user.email}</div>
				</div>
			</div>
			<div style={{ marginTop: 16 }}>
				<button
					onClick={async () => {
						await supabase.auth.signOut();
						navigate("/", { replace: true });
					}}>
					로그아웃
				</button>
			</div>
		</div>
	);
}
