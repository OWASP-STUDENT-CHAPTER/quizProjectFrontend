import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Quiz from "./Components/Quiz";
import React from "react";
import Result from "./Components/Result";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</>
	);
};

export default App;
