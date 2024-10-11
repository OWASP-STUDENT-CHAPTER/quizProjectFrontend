import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { isAdmin, isAuthenticated } from "./Axios/CommonServices";

import About from "./Components/About";
import Admin from "./Components/Admin";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Profile from "./Components/Profile";
import Quiz from "./Components/Quiz";
import Register from "./Components/Admin/Register";
import Result from "./Components/Result";
import { ToastContainer } from "react-toastify";
import UpdateStudent from "./Components/Admin/UpdateStudent";

const App = () => {
	const navigate = useNavigate();
	// const [isQuizStarted, setIsQuizStarted] = useState(10);
	useEffect(() => {
		const Authenticated = isAuthenticated();
		if (!Authenticated) {
			navigate("/login");
		}
	}, []);

	useEffect(() => {
		// Function to handle F5 and Ctrl+R key presses
		const handleKeyPress = (event) => {
			if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
				event.preventDefault(); // Prevent the default refresh behavior
				alert("Refreshing is disabled!"); // Optional: Alert the user that refreshing is disabled
			}
		};

		// Function to handle beforeunload (browser refresh or tab close)
		const handleBeforeUnload = (event) => {
			event.preventDefault();
			event.returnValue = ""; // This triggers the browser's default warning dialog
		};

		// Add event listeners
		window.addEventListener("keydown", handleKeyPress);
		window.addEventListener("beforeunload", handleBeforeUnload);

		// Clean up event listeners when the component unmounts
		return () => {
			window.removeEventListener("keydown", handleKeyPress);
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	// console.log(isQuizStarted);
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				{/* {isQuizStarted <= 100 && ( */}
				<Route
					path="/quiz"
					element={
						<Quiz
						// isQuizStarted={isQuizStarted}
						// setIsQuizStarted={setIsQuizStarted}
						/>
					}
				/>
				{/* )} */}
				<Route path="/result" element={<Result />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/about" element={<About />} />
				{isAdmin() && (
					<>
						<Route path="/admin" element={<Admin />} />
						<Route path="/register" element={<Register />} />
						<Route
							path="/update-user/:studentId"
							element={<UpdateStudent />}
						/>
					</>
				)}
				<Route path="*" element={<NotFound />} />
			</Routes>
			<ToastContainer />
		</>
	);
};

export default App;
