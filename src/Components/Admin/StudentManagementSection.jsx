// components/UserManagementPage.js

import React, { useEffect, useState } from "react";
import { deleteStudent, getAllStudent } from "../../Axios/AdminServices";

import { Link } from "react-router-dom";

function StudentManagementSection() {
	const [users, setUsers] = useState([]);
	const [sortConfig, setSortConfig] = useState({
		key: "name",
		direction: "ascending",
	});

	useEffect(() => {
		// Fetch users data when the component mounts
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await getAllStudent();
			setUsers(response.studentList);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	};

	const deleteUser = async (userId) => {
		try {
			// const confirmDelete = window.confirm(
			// 	"Are you sure you want to delete this user?"
			// );
			// if (true) {
			await deleteStudent(userId);
			fetchUsers();
			// }
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

	const requestSort = (key) => {
		let direction = "ascending";
		if (sortConfig.key === key && sortConfig.direction === "ascending") {
			direction = "descending";
		}
		setSortConfig({ key, direction });
	};

	const sortedUsers = [...users].sort((a, b) => {
		if (a[sortConfig.key] < b[sortConfig.key]) {
			return sortConfig.direction === "ascending" ? -1 : 1;
		}
		if (a[sortConfig.key] > b[sortConfig.key]) {
			return sortConfig.direction === "ascending" ? 1 : -1;
		}
		return 0;
	});

	const getRowClassName = (score) => {
		if (score === null || score === undefined) return "bg-red-500"; // Red for score not given
		if (score > 10) return "bg-green-500"; // Green if score is above 10
		if (score >= 5) return "bg-yellow-500"; // Yellow if score is between 5 and 10
		return "bg-blue-500"; // Blue if score is below 5
	};

	return (
		<div className="min-h-screen p-6 text-white user-management-container">
			<h2 className="mb-4 text-2xl font-bold">Student Management Page</h2>

			<div className="mb-6">
				<button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
					<Link to="/register">Add User</Link>
				</button>
			</div>

			<table className="min-w-full text-black bg-white">
				<thead>
					<tr className="bg-gray-200">
						<th className="py-2">Sr. No</th>
						<th
							className="py-2 cursor-pointer"
							onClick={() => requestSort("name")}
						>
							Name
						</th>
						<th
							className="py-2 cursor-pointer"
							onClick={() => requestSort("email")}
						>
							Email
						</th>
						<th
							className="py-2 cursor-pointer"
							onClick={() => requestSort("gender")}
						>
							Gender
						</th>
						<th
							className="py-2 cursor-pointer"
							onClick={() => requestSort("role")}
						>
							Role
						</th>
						<th
							className="py-2 cursor-pointer"
							onClick={() => requestSort("branch")}
						>
							Branch
						</th>
						<th
							className="py-2 cursor-pointer"
							onClick={() => requestSort("rollNo")}
						>
							Roll No
						</th>
						<th
							className="py-2 cursor-pointer"
							onClick={() => requestSort("score")}
						>
							Score
						</th>
						<th className="py-2">Student ID</th>
						<th className="py-2">Actions</th>
					</tr>
				</thead>
				<tbody>
					{sortedUsers.map((user, index) => (
						<tr
							key={index}
							className={`border-b ${getRowClassName(
								user.score
							)}`}
						>
							<td className="px-4 py-2">{index+1}</td>
							<td className="px-4 py-2">{user.name}</td>
							<td className="px-4 py-2">{user.email}</td>
							<td className="px-4 py-2">{user.gender}</td>
							<td
								className={`py-2 px-4 ${
									user.role === "ADMIN" ? "bg-green-500" : ""
								}`}
							>
								{user.role}
							</td>
							<td className="px-4 py-2">{user.branch}</td>
							<td className="px-4 py-2">{user.rollNo}</td>
							<td className="px-4 py-2">
								{(user.score === 0 && "0") ||
									user.score ||
									"Not Given Yet"}
							</td>
							<td className="px-4 py-2">{user.studentId}</td>
							<td className="px-4 py-2">
								<button
									className="px-3 py-1 text-white bg-gray-600 rounded hover:bg-red-600"
									onClick={() => deleteUser(user.studentId)}
								>
									Delete
								</button>
								{/* Uncomment to enable Update functionality
                                <button className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600">
                                    <Link to={`/update-user/${user.studentId}`}>
                                        Update
                                    </Link>
                                </button> */}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default StudentManagementSection;
