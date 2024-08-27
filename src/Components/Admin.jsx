import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";
import StudentManagementSection from "./Admin/StudentManagementSection";

const Admin = () => {
	return (
		<div className="bg-black">
			<Navbar />
			<StudentManagementSection />
			<Footer />
		</div>
	);
};

export default Admin;
