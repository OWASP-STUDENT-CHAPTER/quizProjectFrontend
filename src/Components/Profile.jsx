import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import { getMyProfile } from "../Axios/CommonServices";

function Profile() {
	const [profileInfo, setProfileInfo] = useState({});

	const navigate = useNavigate();

	useEffect(() => {
		fetchProfileInfo();
	}, []);

	const fetchProfileInfo = async () => {
		try {
			const email = localStorage.getItem("email"); // Retrieve the email from localStorage
			const data = await getMyProfile(email);
			setProfileInfo(data.student);
			// console.log(data);
		} catch (error) {
			console.error("Error fetching profile information:", error);
		}
	};

	return (
		<>
			<Navbar />
			<div className="px-4 mx-auto mt-5 sm:px-6 lg:px-8">
				<div className="overflow-hidden bg-white shadow sm:rounded-lg">
					<div className="px-4 py-5 sm:px-6">
						<h2 className="text-lg font-medium leading-6 text-gray-900">
							Profile Information
						</h2>
					</div>
					<div className="border-t border-gray-200">
						<dl>
							<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Name
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
									{profileInfo.name}
								</dd>
							</div>
							<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Email
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
									{profileInfo.email}
								</dd>
							</div>
							<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Gender
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
									{profileInfo.gender}
								</dd>
							</div>
							<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Branch
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
									{profileInfo.branch}
								</dd>
							</div>
							<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Role
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
									{profileInfo.role}
								</dd>
							</div>
							<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									RollNo
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
									{profileInfo.rollNo}
								</dd>
							</div>
							{profileInfo.score !== null && (
								<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">
										Score
									</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
										{profileInfo.score}
									</dd>
								</div>
							)}
							{/* {profileInfo.role === "ADMIN" && (
								<div className="px-4 py-4 bg-gray-50 sm:px-6">
									<button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
										<Link
											to={`/update-user/${profileInfo.studentId}`}
										>
											Update This Profile
										</Link>
									</button>
								</div>
							)} */}
						</dl>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
