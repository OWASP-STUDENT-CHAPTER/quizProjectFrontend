// src/NotFoundPage.js

import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-red-600">404</h1>
				<p className="mt-4 text-lg text-gray-700">Page Not Found</p>
				<p className="mt-2 text-gray-500">
					The page you're looking for does not exist.
				</p>
				<Link
					to="/"
					className="inline-block px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600"
				>
					Go to home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
