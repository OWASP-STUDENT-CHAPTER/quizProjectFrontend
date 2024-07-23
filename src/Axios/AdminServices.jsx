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
		const { data } = await axios.get(`${BASE_URL}/admin/getAllStudents`, {
			headers: { Authorization: `Bearer${token}` },
		});
		toast("All Students Fetched Successfully");
		return data;
	} catch (error) {
		toast(error);
		return null;
	}
};

export const getStudentById = async (studentId, token) => {
	try {
		const { data } = await axios.get(
			`${BASE_URL}/admin/get-users/${studentId}`,
			{
				headers: { Authorization: `Bearer${token}` },
			}
		);
		toast("Student Fetched Successfully");
		return data;
	} catch (error) {
		toast(error);
		return null;
	}
};

export const deleteStudent = async (studentId, token) => {
	try {
		const { data } = await axios.delete(
			`${BASE_URL}/admin/delete/${studentId}`,
			{
				headers: { Authorization: `Bearer${token}` },
			}
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
			`${BASE_URL}/admin/update/${studentId}`,
			userData,
			{
				headers: { Authorization: `Bearer${token}` },
			}
		);
		toast("Student Updated Successfully");
		return data;
	} catch (error) {
		toast(error);
		return null;
	}
};
