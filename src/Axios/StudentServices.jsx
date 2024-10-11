import { BASE_URL } from "./Helper";
import axios from "axios";
import { toast } from "react-toastify";

export const createQuiz = async (email, token) => {
	try {
		const { data } = await axios.post(
			`${BASE_URL}/public/quiz/create?category=Aptitude&numQ=10&title=${email}`
		);
		// const data2 = await axios.post(
		// 	`${BASE_URL}/public/quiz/create?category=Aptitude&numQ=5&title=${email+"1"}`
		// );
		// const question = data2.data;
		// const questions = [...data, data2.data];
		// console.log(questions);
		// console.log(data);
		// console.log(data2);
		// console.log(data);
		// toast.success("Quiz Created Successfully");
		return data;
	} catch (error) {
		toast.error(error);
		return null;
	}
};

export const getQuiz = async (quizId) => {
	try {
		const { data } = await axios.get(
			`${BASE_URL}/public/quiz/get/${quizId}`
		);
		// console.log(data);
		// toast.success("Quiz Fetched Successfully");
		return data;
	} catch (error) {
		toast.error(error);
		return null;
	}
};

export const submitQuizResponses = async (quizId, responses) => {
	try {
		// console.log(responses);
		const { data } = await axios.post(
			`${BASE_URL}/public/quiz/submit/${quizId}`,
			responses
		);
		// console.log(data);
		toast.success("Quiz Submitted Successfully");
		return data;
	} catch (error) {
		toast.error(error);
		return null;
	}
};
