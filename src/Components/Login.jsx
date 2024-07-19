import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here (e.g., send data to server)
		console.log(`Email: ${email}, Password: ${password}`);
		// Reset form fields
		setEmail("");
		setPassword("");
        navigate("/")
	};

	return (
		<div className="flex flex-col justify-center min-h-screen py-12 bg-white sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="px-4 py-8 bg-white  sm:rounded-lg sm:px-10">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email address
							</label>
							<div className="mt-1">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<div className="mt-1">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;