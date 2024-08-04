import { BASE_URL } from "./Helper";
import axios from "axios";
import { toast } from "react-toastify";

export const registerStudent = async (userData) => {
	try {
		const { data } = await axios.post(
			`${BASE_URL}/auth/register`,
			userData
		);
		if (data.statusCode !== 201) {
			toast("User Doesn't Saved");
		} else {
			toast("Registered Successfully");
		}
		// console.log(data);
		return data;
	} catch (error) {
		toast(error);
		return null;
	}
};

export const getAllStudent = async (token) => {
	try {
		const { data } = await axios.get(`${BASE_URL}/public/getAllStudents`);
		toast("All Students Fetched Successfully");
		// console.log(data);
		return data;
	} catch (error) {
		toast(error);
		return null;
	}
};

export const getStudentById = async (studentId) => {
	try {
		const { data } = await axios.get(
			`${BASE_URL}/public/getUser/${studentId}`
		);
		toast("Student Fetched Successfully");
		return data;
	} catch (error) {
		toast(error);
		return null;
	}
};

export const deleteStudent = async (studentId) => {
	try {
		const { data } = await axios.delete(
			`${BASE_URL}/public/delete/${studentId}`
		);
		toast("Student Deleted Successfully");
		return data;
	} catch (error) {
		toast(error);
		return null;
	}
};

export const updateStudent = async (studentId, userData, token) => {
	try {
		const { data } = await axios.put(
			`${BASE_URL}/public/update/${studentId}`,
			userData,
			{
				headers: { Authorization: `Bearer${token}` },
			}
		);
		console.log(data);
		toast("Student Updated Successfully");
		return data;
	} catch (error) {
		toast(error);
		return null;
	}
};
