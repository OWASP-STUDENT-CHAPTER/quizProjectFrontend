import React, { useState, useEffect } from "react";
import Question from "../SubComponents/Question";
import { useNavigate } from "react-router-dom";

const Questions = () => {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState({});

	const navigate = useNavigate();

	useEffect(() => {
		// Simulated data fetching (replace with actual backend integration)
		const fetchQuestions = async () => {
			try {
				// Simulated data (replace with actual API call to fetch questions from backend)
				const data = {
					questions: [
						{
							id: 1,
							question: "Question 1?",
							options: [
								{ id: "a", text: "Option A" },
								{ id: "b", text: "Option B" },
								{ id: "c", text: "Option C" },
							],
						},
						{
							id: 2,
							question: "Question 2?",
							options: [
								{ id: "a", text: "Option A" },
								{ id: "b", text: "Option B" },
								{ id: "c", text: "Option C" },
							],
						},
						// Add more questions here as needed
					],
				};
				setQuestions(data.questions);
				// Initialize answers state with default values
				const initialAnswers = {};
				data.questions.forEach((question) => {
					initialAnswers[question.id] = "";
				});
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
    
	const handleSubmit = () => {
        // Handle submission of quiz (e.g., send selected answers to backend)
		console.log("Submitting quiz answers:", answers);
		// Example logic to validate and process answers
		const correctAnswers = {
			1: "a", // Question 1's correct answer is Option A
			2: "b", // Question 2's correct answer is Option B
			// Add more correct answers here as needed
		};
		let score = 0;
		questions.forEach((question) => {
            if (answers[question.id] === correctAnswers[question.id]) {
                score++;
			}
		});
		console.log("Score:", score);
		// Reset answers or navigate to next screen
		// setAnswers({});
        navigate("/result");
	};

	return (
		<section className="py-12 bg-gray-100">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<h2 className="mb-6 text-3xl font-bold text-gray-800">
					Quiz Questions
				</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{questions.map((question) => (
						<Question
							key={question.id}
							question={question.question}
							options={question.options}
							selectedOption={answers[question.id]}
							onChange={(selectedOption) =>
								handleOptionChange(question.id, selectedOption)
							}
						/>
					))}
				</div>
				<div className="flex justify-center mt-8">
					<button
						onClick={handleSubmit}
						className="px-6 py-3 font-bold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Submit Quiz
					</button>
				</div>
			</div>
		</section>
	);
};

export default Questions;
