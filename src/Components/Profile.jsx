import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getMyProfile } from "../Axios/CommonServices";

function Profile() {
	const [profileInfo, setProfileInfo] = useState({});

	useEffect(() => {
		fetchProfileInfo();
	}, []);

	const fetchProfileInfo = async () => {
		try {
			const email = localStorage.getItem("email"); // Retrieve the token from localStorage
			const { data } = await getMyProfile(email);
			setProfileInfo(data);
			console.log(data);
		} catch (error) {
			console.error("Error fetching profile information:", error);
		}
	};

	return (
		<div className="profile-page-container">
			<h2>Profile Information</h2>
			<p>Name: {profileInfo.name}</p>
			<p>Email: {profileInfo.email}</p>
			{profileInfo.role === "ADMIN" && (
				<button>
					<Link to={`/update-user/${profileInfo.id}`}>
						Update This Profile
					</Link>
				</button>
			)}
		</div>
	);
}

export default Profile;
