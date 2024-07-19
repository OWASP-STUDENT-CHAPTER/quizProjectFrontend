import React from "react";
import { useNavigate } from "react-router-dom";

const StartQuizButton = () => {
	const navigate = useNavigate();
	const quizCompleted = false;

	const handleStartQuiz = () => {
		// Handle logic for starting the quiz (e.g., navigate to quiz page)
		console.log("Starting quiz...");
		if (quizCompleted) {
			navigate("/result");
		} else {
			navigate("/quiz");
		}
	};

	return (
		<div className="flex justify-center mt-10">
			<button
				onClick={handleStartQuiz}
				className="px-6 py-3 font-bold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				{quizCompleted ? "See Result" : "Start Quiz"}
			</button>
		</div>
	);
};

export default StartQuizButton;