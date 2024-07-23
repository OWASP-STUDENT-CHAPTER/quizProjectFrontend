import React from "react";
import { createQuiz } from "../Axios/StudentServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StartQuizButton = () => {
	const navigate = useNavigate();

	const quizId = localStorage.getItem("score");

	const handleStartQuiz = async () => {
		if (quizId) {
			navigate("/result");
		} else {
			// Handle logic for starting the quiz (e.g., navigate to quiz page)
			try {
				const email = localStorage.getItem("email");
				const data = await createQuiz(email);
				toast(data);
				console.log("Starting quiz...");
				console.log(data);
				localStorage.setItem("quizId", data);
				if (data) {
					navigate("/quiz");
				}
			} catch (error) {
				toast(error);
				console.log(error);
			}
		}
	};

	return (
		<div className="flex justify-center mt-10">
			<button
				onClick={handleStartQuiz}
				className="px-6 py-3 font-bold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				{quizId ? "Result" : "Start Quiz"}
			</button>
		</div>
	);
};

export default StartQuizButton;
