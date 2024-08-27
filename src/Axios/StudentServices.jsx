import { BASE_URL } from "./Helper";
import axios from "axios";
import { toast } from "react-toastify";

export const createQuiz = async (email, token) => {
	try {
		const { data } = await axios.post(
			`${BASE_URL}/public/quiz/create?category=Programming&numQ=20&title=${email}`
		);
		// console.log(data);
		toast.success("Quiz Created Successfully");
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
