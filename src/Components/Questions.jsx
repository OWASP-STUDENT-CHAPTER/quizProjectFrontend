import React, { useEffect, useState } from "react";
import { getQuiz, submitQuizResponses } from "../Axios/StudentServices";

import Question from "../SubComponents/Question";
import { useNavigate } from "react-router-dom";

const Questions = () => {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState({});
	const navigate = useNavigate();

	// Initialize timer state with 600 seconds (10 minutes)
	const [timeLeft, setTimeLeft] = useState(600);

	// Format time as mm:ss
	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${minutes.toString().padStart(2, "0")}:${secs
			.toString()
			.padStart(2, "0")}`;
	};

	useEffect(() => {
		let given = localStorage.getItem("given");
		if (given == "done") {
			navigate("/result");
		}
	});

	useEffect(() => {
		// Set interval to count down every second
		const interval = setInterval(() => {
			setTimeLeft((prevTime) => {
				if (prevTime > 1) {
					return prevTime - 1;
				} else {
					clearInterval(interval);
					handleSubmit(); // Call the function when time is up
					return 0;
				}
			});
		}, 1000);

		// Clear the interval when component unmounts
		return () => {
			clearInterval(interval);
			localStorage.setItem("given", "done");
			// handleSubmit(); // Call the function when time is up
		};
	}, []);

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				const quizId = sessionStorage.getItem("quizId");
				const questions = await getQuiz(quizId);
				setQuestions(questions);

				const initialAnswers = {};
				questions.forEach((question) => {
					initialAnswers[question._id] = "qwertyui"; // Initialize with empty string or null
				});
				// console.log(initialAnswers);
				setAnswers(initialAnswers);
			} catch (error) {
				console.error("Error fetching questions:", error);
			}
		};

		fetchQuestions();
	}, []);

	const handleOptionChange = (questionId, selectedOption) => {
		setAnswers({ ...answers, [questionId]: selectedOption });
	};

	const handleSubmit = async () => {
		try {
			const quizId = sessionStorage.getItem("quizId");
			const responses = questions.map((question) => ({
				id: question.question_id,
				response: answers[question.question_id],
			}));
			// console.log(responses)
			let result = await submitQuizResponses(quizId, responses);
			// console.log(result);
			localStorage.setItem("given", "done");
			navigate("/result"); // Navigate to result page after successful submission
		} catch (error) {
			console.error("Error submitting quiz answers:", error);
			// Handle error appropriately, show error message or retry logic
		}
	};

	return (
		<section className="relative py-12 bg-black">
			<div className="fixed top-0 left-[50%] -translate-x-[50%] flex items-center justify-center">
				<div className="w-full max-w-sm p-3 text-center bg-[#ffffff40] shadow-lg rounded-xl">
					<h1 className="text-xl font-bold text-gray-500 sm:text-2xl md:text-3xl">
						Time Remaining
					</h1>
					<div className="font-mono text-3xl text-black sm:text-4xl md:text-5xl">
						{formatTime(timeLeft)}
					</div>
				</div>
			</div>
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<h2 className="mb-6 text-3xl font-bold text-white">
					Quiz Questions
				</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{questions &&
						questions.map((question, index) => (
							<Question
								key={index}
								id={question.question_id}
								question={question.question}
								option1={question.option1}
								option2={question.option2}
								option3={question.option3}
								option4={question.option4}
								selectedOption={answers[question.question_id]}
								onChange={(selectedOption) =>
									handleOptionChange(
										question.question_id,
										selectedOption
									)
								}
							/>
						))}
				</div>
				<div className="flex justify-center mx-auto mt-8">
					<button
						onClick={handleSubmit}
						className="px-6 w-fit shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 z-10 py-3 bg-gray-400 rounded-md text-white hover:text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-gray-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-xl"
					>
						Submit Quiz
					</button>
				</div>
			</div>
		</section>
	);
};

export default Questions;
