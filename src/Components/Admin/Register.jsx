import React, { useState } from "react";

import Navbar from "../Navbar";
import { registerStudent } from "../../Axios/AdminServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		password: "",
		rollNo: "",
		gender: "",
		email: "",
		branch: "",
		role: "",
	});

	const [errors, setErrors] = useState({});

	const genders = ["Male", "Female", "Other"];
	const branches = [
		"Computer Science",
		"Electrical Engineering",
		"Mechanical Engineering",
		"Civil Engineering",
	];
	const roles = ["USER", "ADMIN"];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Validate form fields
		const validationErrors = {};
		if (!formData.name) {
			validationErrors.name = "Name is required";
			toast("Name is required");
		}
		if (!formData.email) {
			validationErrors.email = "Email is required";
			toast("Email is required");
		}
		if (!formData.password) {
			validationErrors.password = "Password is required";
			toast("Password is required");
		}
		if (!formData.rollNo) {
			validationErrors.rollNo = "Roll Number is required";
			toast("Roll Number is required");
		}
		if (!formData.gender) {
			validationErrors.gender = "Gender is required";
			toast("Gender is required");
		}
		if (!formData.branch) {
			validationErrors.branch = "Branch is required";
			toast("Branch is required");
		}
		if (!formData.role) {
			validationErrors.role = "Role is required";
			toast("Role is required");
		}
		setErrors(validationErrors);
		// If no errors, submit the form
		if (Object.keys(validationErrors).length === 0) {
			// console.log("Form submitted:", formData);
			// Handle form submission logic here (e.g., API call)

			try {
				const token = localStorage.getItem("token");
				await registerStudent(formData, token);

				setFormData({
					name: "",
					password: "",
					rollNo: "",
					gender: "",
					email: "",
					branch: "",
					role: "",
				});

				navigate(-1);
			} catch (error) {
				console.log(error);
				toast(error);
			}
		}
	};

	return (
		<>
			<Navbar />
			<div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
						Register
					</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
						<form className="space-y-6" onSubmit={handleSubmit}>
							{/* Name */}
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									autoComplete="name"
									value={formData.name}
									onChange={handleChange}
									className={`mt-1 block w-full shadow-sm sm:text-sm rounded-md ${
										errors.name
											? "border-red-500 focus:border-red-500"
											: "focus:border-blue-500 border-gray-300"
									}`}
								/>
								{errors.name && (
									<p className="mt-2 text-sm text-red-600">
										{errors.name}
									</p>
								)}
							</div>

							{/* Password */}
							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									autoComplete="current-password"
									value={formData.password}
									onChange={handleChange}
									className={`mt-1 block w-full shadow-sm sm:text-sm rounded-md ${
										errors.password
											? "border-red-500 focus:border-red-500"
											: "focus:border-blue-500 border-gray-300"
									}`}
								/>
								{errors.password && (
									<p className="mt-2 text-sm text-red-600">
										{errors.password}
									</p>
								)}
							</div>

							{/* Roll Number */}
							<div>
								<label
									htmlFor="rollNo"
									className="block text-sm font-medium text-gray-700"
								>
									Roll Number
								</label>
								<input
									type="text"
									name="rollNo"
									id="rollNo"
									autoComplete="rollNo"
									value={formData.rollNo}
									onChange={handleChange}
									className={`mt-1 block w-full shadow-sm sm:text-sm rounded-md ${
										errors.rollNo
											? "border-red-500 focus:border-red-500"
											: "focus:border-blue-500 border-gray-300"
									}`}
								/>
								{errors.rollNo && (
									<p className="mt-2 text-sm text-red-600">
										{errors.rollNo}
									</p>
								)}
							</div>

							{/* Gender */}
							<div>
								<label
									htmlFor="gender"
									className="block text-sm font-medium text-gray-700"
								>
									Gender
								</label>
								<select
									name="gender"
									id="gender"
									autoComplete="gender"
									value={formData.gender}
									onChange={handleChange}
									className={`mt-1 block w-full shadow-sm sm:text-sm rounded-md ${
										errors.gender
											? "border-red-500 focus:border-red-500"
											: "focus:border-blue-500 border-gray-300"
									}`}
								>
									<option value="">Select Gender</option>
									{genders.map((gender) => (
										<option key={gender} value={gender}>
											{gender}
										</option>
									))}
								</select>
								{errors.gender && (
									<p className="mt-2 text-sm text-red-600">
										{errors.gender}
									</p>
								)}
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email address
								</label>
								<input
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									value={formData.email}
									onChange={handleChange}
									className={`mt-1 block w-full shadow-sm sm:text-sm rounded-md ${
										errors.email
											? "border-red-500 focus:border-red-500"
											: "focus:border-blue-500 border-gray-300"
									}`}
								/>
								{errors.email && (
									<p className="mt-2 text-sm text-red-600">
										{errors.email}
									</p>
								)}
							</div>

							{/* Branch */}
							<div>
								<label
									htmlFor="branch"
									className="block text-sm font-medium text-gray-700"
								>
									Branch
								</label>
								<select
									name="branch"
									id="branch"
									autoComplete="branch"
									value={formData.branch}
									onChange={handleChange}
									className={`mt-1 block w-full shadow-sm sm:text-sm rounded-md ${
										errors.branch
											? "border-red-500 focus:border-red-500"
											: "focus:border-blue-500 border-gray-300"
									}`}
								>
									<option value="">Select Branch</option>
									{branches.map((branch) => (
										<option key={branch} value={branch}>
											{branch}
										</option>
									))}
								</select>
								{errors.branch && (
									<p className="mt-2 text-sm text-red-600">
										{errors.branch}
									</p>
								)}
							</div>

							{/* Role */}
							<div>
								<label
									htmlFor="role"
									className="block text-sm font-medium text-gray-700"
								>
									Role
								</label>
								<select
									name="role"
									id="role"
									autoComplete="role"
									value={formData.role}
									onChange={handleChange}
									className={`mt-1 block w-full shadow-sm sm:text-sm rounded-md ${
										errors.role
											? "border-red-500 focus:border-red-500"
											: "focus:border-blue-500 border-gray-300"
									}`}
								>
									<option value="">Select Role</option>
									{roles.map((role) => (
										<option key={role} value={role}>
											{role}
										</option>
									))}
								</select>
								{errors.role && (
									<p className="mt-2 text-sm text-red-600">
										{errors.role}
									</p>
								)}
							</div>

							<div>
								<button
									type="submit"
									className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
