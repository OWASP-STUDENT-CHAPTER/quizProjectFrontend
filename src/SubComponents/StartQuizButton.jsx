import React from "react";
import { createQuiz } from "../Axios/StudentServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StartQuizButton = () => {
	const navigate = useNavigate();

	const score = sessionStorage.getItem("score");
	const quizId = sessionStorage.getItem("quizId");

	const handleStartQuiz = async () => {
		if (quizId || score) {
			navigate("/result");
		} else {
			// Handle logic for starting the quiz (e.g., navigate to quiz page)
			try {
				const email = sessionStorage.getItem("email");
				const data = await createQuiz(email);
				// toast(data);
				// console.log("Starting quiz...");
				// console.log(data);
				sessionStorage.setItem("quizId", data);
				// console.log(data)
				if (data) {
					navigate("/quiz");
				}
			} catch (error) {
				toast.error(error);
				// console.log(error);
			}
		}
	};

	return (
		<div className="flex justify-center my-20">
			{/* <button
				onClick={handleStartQuiz}
				className="px-6 py-3 font-bold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				{quizId ? "Result" : "Start Quiz"}
			</button> */}
			<button
				type="button"
				onClick={handleStartQuiz}
				className="px-10 py-3 text-white bg-opacity-0 border border-gray-100 rounded-md shadow-lg shadow-black bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-sm z-30 bg-gray-400 hover:text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-black after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-xl"
			>
				<strong className="strong">
					{score || quizId ? "Result" : "Start Quiz"}
				</strong>
				<div id="container-stars">
					<div id="stars"></div>
				</div>

				<div id="glow">
					<div className="circle"></div>
					<div className="circle"></div>
				</div>
			</button>
		</div>
	);
};

export default StartQuizButton;
