import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthCallback from "./pages/AuthCallback";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/auth/callback" element={<AuthCallback />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	);
}

export default App;
