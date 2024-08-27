// components/UserManagementPage.js

import React, { useEffect, useState } from "react";
import { deleteStudent, getAllStudent } from "../../Axios/AdminServices";

import { Link } from "react-router-dom";

function StudentManagementSection() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		// Fetch users data when the component mounts
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await getAllStudent();
			// console.log(response.studentList);
			setUsers(response.studentList); // Assuming the list of users is under the key 'ourUsersList'
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	};

	const deleteUser = async (userId) => {
		try {
			// Prompt for confirmation before deleting the user
			const confirmDelete = window.confirm(
				"Are you sure you want to delete this user?"
			);

			if (confirmDelete) {
				await deleteStudent(userId);
				// After deleting the user, fetch the updated list of users
				fetchUsers();
			}
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

	return (
		<div className="min-h-screen p-6  text-white user-management-container">
			<h2 className="mb-4 text-2xl font-bold">Student Management Page</h2>

			<div className="mb-6">
				<button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
					<Link to="/register">Add User</Link>
				</button>
			</div>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{users &&
					users.map((user, index) => (
						<div
							key={index}
							className="p-4 bg-white rounded shadow-md"
						>
							
							<h3 className="mb-2 text-xl text-black font-semibold">
								{user.name}
							</h3>
							<p className="mb-1 text-gray-700">
								<strong>Email:</strong> {user.email}
							</p>
							<p className="mb-1 text-gray-700">
								<strong>Gender:</strong> {user.gender}
							</p>
							<p className="mb-1 text-gray-700">
								<strong>Role:</strong> {user.role}
							</p>
							<p className="mb-1 text-gray-700">
								<strong>Branch:</strong> {user.branch}
							</p>
							<p className="mb-1 text-gray-700">
								<strong>Roll No:</strong> {user.rollNo}
							</p>
							<p className="mb-1 text-gray-700">
								<strong>Score:</strong> {(user.score === 0 && "0") || (user.score || "Not Given Yet")}
							</p>
							<p className="mb-4 text-gray-700">
								<strong>Student ID:</strong> {user.studentId}
							</p>
							<div className="flex space-x-2">
								<button
									className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
									onClick={() => deleteUser(user.studentId)}
								>
									Delete
								</button>
								{/* <button className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600">
									<Link to={`/update-user/${user.studentId}`}>
										Update
									</Link>
								</button> */}
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default StudentManagementSection;
