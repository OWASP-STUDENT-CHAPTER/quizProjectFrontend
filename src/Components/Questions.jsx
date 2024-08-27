import React, { useEffect, useState } from "react";
import { getQuiz, submitQuizResponses } from "../Axios/StudentServices";

import Question from "../SubComponents/Question";
import { useNavigate } from "react-router-dom";

const Questions = () => {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState({});
	const navigate = useNavigate();

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

			await submitQuizResponses(quizId, responses);

			navigate("/result"); // Navigate to result page after successful submission
		} catch (error) {
			console.error("Error submitting quiz answers:", error);
			// Handle error appropriately, show error message or retry logic
		}
	};

	return (
		<section className="py-12 bg-black">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<h2 className="mb-6 text-3xl font-bold text-white">
					Quiz Questions
				</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{questions.map((question, index) => (
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
				<div className="flex justify-center mt-8">
					<button
						onClick={handleSubmit}
						className="px-6 shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full z-30 py-3 bg-gray-400 rounded-md text-white hover:text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-gray-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-xl"
					>
						Submit Quiz
					</button>
				</div>
			</div>
		</section>
	);
};

export default Questions;
