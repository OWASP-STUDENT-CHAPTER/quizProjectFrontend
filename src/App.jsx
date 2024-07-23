import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { isAdmin, isAuthenticated } from "./Axios/CommonServices";

import About from "./Components/About";
import Admin from "./Components/Admin";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Quiz from "./Components/Quiz";
import Register from "./Components/Admin/Register";
import Result from "./Components/Result";
import { ToastContainer } from "react-toastify";

const App = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const Authenticated = isAuthenticated();
		if (!Authenticated) {
			navigate("/login");
		}
	}, []);
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/result" element={<Result />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/about" element={<About />} />
				{isAdmin() && (
					<>
						<Route path="/admin" element={<Admin />} />
						<Route path="/register" element={<Register />} />
					</>
				)}
				<Route path="*" element={<Login />} />
			</Routes>
			<ToastContainer />
		</>
	);
};

export default App;
