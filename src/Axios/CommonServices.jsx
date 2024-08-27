import { BASE_URL } from "./Helper";
import axios from "axios";
import { toast } from "react-toastify";

export const login = async (email, password) => {
	try {
		const { data } = await axios.post(`${BASE_URL}/auth/login`, {
			email,
			password,
		});
		if (data.statusCode === 500) {
			toast.error("User Doesn't Exist");
		} else if (data.Email && data.Password) {
			toast.success("Logged In Successfully");
		}
		// console.log(data);
		return data;
	} catch (error) {
		toast.error(error);
		return null;
	}
};

export const getMyProfile = async (email) => {
	try {
		const { data } = await axios.get(
			`${BASE_URL}/public/getProfile/${email}`
		);
		if (data.statusCode !== 200) {
			toast.error("Profile Cannot Fetched");
			// console.log(data);
		} else {
			// toast.success("Profile Fetched Successfully");
			// console.log(data);
		}
		// console.log(data);
		return data;
	} catch (error) {
		toast.error(error);
		return null;
	}
};

export const logout = () => {
	sessionStorage.removeItem("token");
	sessionStorage.removeItem("role");
	sessionStorage.removeItem("email");
	sessionStorage.removeItem("quizId");
	sessionStorage.removeItem("score");
};

export const isAuthenticated = () => {
	const token = sessionStorage.getItem("token");
	return !!token;
};

export const isAdmin = () => {
	const role = sessionStorage.getItem("role");
	return role === "ADMIN";
};

export const isUser = () => {
	const role = sessionStorage.getItem("role");
	return role === "USER";
};

export const adminOnly = () => {
	return this.isAuthenticated() && this.isAdmin();
};
