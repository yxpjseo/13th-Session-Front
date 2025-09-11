/* global Deno */
import { createClient } from "jsr:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const KAKAO_CLIENT_ID = Deno.env.get("KAKAO_REST_API_KEY");
const KAKAO_CLIENT_SECRET = Deno.env.get("KAKAO_CLIENT_SECRET");

async function getAccessTokenFromCode(reqUrl) {
	const { searchParams, origin, pathname } = new URL(reqUrl);
	const code = searchParams.get("code");
	if (!code) return null;

	const redirectUri = `${origin}${pathname}`; // 이 함수의 퍼블릭 URL과 동일해야 함
	const body = new URLSearchParams({
		grant_type: "authorization_code",
		client_id: KAKAO_CLIENT_ID,
		redirect_uri: redirectUri,
		code,
	});
	if (KAKAO_CLIENT_SECRET) body.set("client_secret", KAKAO_CLIENT_SECRET);

	const tokenRes = await fetch("https://kauth.kakao.com/oauth/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
		},
		body,
	});
	if (!tokenRes.ok) return null;
	const json = await tokenRes.json();
	return json.access_token || null;
}

export async function handler(req) {
	try {
		let accessToken = null;

		if (req.method === "GET") {
			accessToken = await getAccessTokenFromCode(req.url);
		} else if (req.method === "POST") {
			const body = await req.json().catch(() => ({}));
			accessToken = body.access_token || null;
		}

		if (!accessToken) {
			return new Response("missing token or code", { status: 400 });
		}

		const meRes = await fetch("https://kapi.kakao.com/v2/user/me", {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		if (!meRes.ok) {
			return new Response("kakao userinfo failed", { status: 401 });
		}
		const kakao = await meRes.json();
		const email = kakao?.kakao_account?.email;
		if (!email) {
			return new Response("email required scope", { status: 400 });
		}

		const admin = createClient(SUPABASE_URL, SERVICE_KEY, {
			auth: { autoRefreshToken: false, persistSession: false },
		});

		try {
			const { data } = await admin.auth.admin.getUserByEmail(email);
			if (!data.user) {
				await admin.auth.admin.createUser({
					email,
					email_confirm: true,
					user_metadata: {
						kakao_id: kakao.id,
						nickname:
							kakao?.kakao_account?.profile?.nickname ||
							kakao?.properties?.nickname ||
							"",
						profile_image_url:
							kakao?.kakao_account?.profile?.profile_image_url ||
							kakao?.properties?.profile_image ||
							"",
					},
				});
			}
		} catch (err) {
			console.warn("supabase admin get/create skipped", err);
		}

		const { data: linkData, error: linkErr } =
			await admin.auth.admin.createLink({
				type: "magiclink",
				email,
			});
		if (linkErr || !linkData?.oob_code) {
			return new Response("cannot create link", { status: 500 });
		}

		// GET 요청이면 앱으로 리다이렉트, POST면 JSON 응답
		if (req.method === "GET") {
			const { searchParams } = new URL(req.url);
			const state = decodeURIComponent(searchParams.get("state") || "");
			const back = state || "";
			const next = "/auth/callback";
			const redirectUrl = `${back}${next}?oob_code=${encodeURIComponent(
				linkData.oob_code
			)}&email=${encodeURIComponent(email)}&type=${encodeURIComponent(
				linkData.type
			)}`;
			return new Response(null, {
				status: 302,
				headers: { Location: redirectUrl },
			});
		}

		return new Response(
			JSON.stringify({
				oob_code: linkData.oob_code,
				type: linkData.type,
				email,
			}),
			{ headers: { "Content-Type": "application/json" } }
		);
	} catch (e) {
		console.error(e);
		return new Response("internal error", { status: 500 });
	}
}

Deno.serve(handler);
