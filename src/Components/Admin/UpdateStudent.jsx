// components/EditStudentPage.js

import React, { useEffect, useState } from "react";
import { getStudentById, updateStudent } from "../../Axios/AdminServices"; // Adjust the import based on your actual file structure
import { useNavigate, useParams } from "react-router-dom";

const branches = [
	"Computer Science",
	"Electrical Engineering",
	"Mechanical Engineering",
	"Civil Engineering",
]; // Hardcoded branch options
const roles = ["USER", "ADMIN"]; // Hardcoded role options
const genders = ["Male", "Female", "Other"]; // Hardcoded gender options

const EditStudentPage = () => {
	const { studentId } = useParams(); // Get student ID from URL parameters
	const navigate = useNavigate(); // For navigation after updating

	const [student, setStudent] = useState({
		name: "",
		email: "",
		gender: "",
		role: "",
		rollNo: "",
		branch: "",
		score: 0,
	});

	useEffect(() => {
		// Fetch student data when the component mounts
		fetchStudent();
	}, [studentId]);

	const fetchStudent = async () => {
		try {
			const response = await getStudentById(studentId);
			setStudent(response.student);
		} catch (error) {
			console.error("Error fetching student:", error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setStudent((prevStudent) => ({
			...prevStudent,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const token = localStorage.getItem("token");
			await updateStudent(studentId, student, token);
			console.log(student);
			navigate("/admin"); // Redirect after updating
		} catch (error) {
			console.error("Error updating student:", error);
		}
	};

	return (
		<div className="min-h-screen p-6 bg-gray-100">
			<h2 className="mb-4 text-2xl font-bold">Edit Student</h2>
			<form
				onSubmit={handleSubmit}
				className="p-6 bg-white rounded shadow-md"
			>
				<div className="mb-4">
					<label htmlFor="name" className="block text-gray-700">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={student.name}
						onChange={handleChange}
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={student.email}
						onChange={handleChange}
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="gender" className="block text-gray-700">
						Gender
					</label>
					<select
						id="gender"
						name="gender"
						value={student.gender}
						onChange={handleChange}
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded"
						required
					>
						<option value="">Select Gender</option>
						{genders.map((gender) => (
							<option key={gender} value={gender}>
								{gender}
							</option>
						))}
					</select>
				</div>
				<div className="mb-4">
					<label htmlFor="role" className="block text-gray-700">
						Role
					</label>
					<select
						id="role"
						name="role"
						value={student.role}
						onChange={handleChange}
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded"
						required
					>
						<option value="">Select Role</option>
						{roles.map((role) => (
							<option key={role} value={role}>
								{role}
							</option>
						))}
					</select>
				</div>
				<div className="mb-4">
					<label htmlFor="branch" className="block text-gray-700">
						Branch
					</label>
					<select
						id="branch"
						name="branch"
						value={student.branch}
						onChange={handleChange}
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded"
						required
					>
						<option value="">Select Branch</option>
						{branches.map((branch) => (
							<option key={branch} value={branch}>
								{branch}
							</option>
						))}
					</select>
				</div>
				<div className="mb-4">
					<label htmlFor="rollNo" className="block text-gray-700">
						Roll No
					</label>
					<input
						type="number"
						id="rollNo"
						name="rollNo"
						value={student.rollNo}
						onChange={handleChange}
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="score" className="block text-gray-700">
						Score
					</label>
					<input
						type="number"
						id="score"
						name="score"
						value={student.score}
						onChange={handleChange}
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded"
					/>
				</div>
				<button
					type="submit"
					className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
				>
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default EditStudentPage;
