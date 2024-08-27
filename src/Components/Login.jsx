import React, { useEffect, useState } from "react";
import { isAuthenticated, login } from "../Axios/CommonServices";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const userData = await login(email, password);
			if (userData) {
				if (userData.token) {
					sessionStorage.setItem("token", userData.token);
					sessionStorage.setItem("role", userData.role);
					sessionStorage.setItem("email", userData.email);
					if (
						userData.score !== null &&
						userData.score !== undefined
					) {
						sessionStorage.setItem(
							"score",
							"jnd4ns9n49d" + userData.score + "hdn840wns0"
						);
					}
					toast.success("Logged In Successfully");
					// console.log(Email: ${email}, Password: ${password});
					setEmail("");
					setPassword("");
					navigate("/");
				} else {
					toast.error(userData.error);
					navigate("/login");
				}
			}
		} catch (error) {
			toast.error(error);
		}
	};

	useEffect(() => {
		const Authenticated = isAuthenticated();
		if (Authenticated) {
			navigate("/");
		}
	}, []);

	return (
		<>
			<div className="relative min-h-screen flex items-center justify-center bg-gray-900">
				<div className="absolute inset-0">
					<video
						className="w-full h-full object-cover"
						autoPlay
						muted
						loop
						// poster="https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					>
						{/* <source src="https://cdn.pixabay.com/video/2022/12/13/142815-780943566_large.mp4" type="video/mp4" /> */}
						<source
							src="https://res.cloudinary.com/dioelwfec/video/upload/v1724650237/9694810-hd_1920_1080_25fps_n0zwty.mp4"
							type="video/mp4"
							loop
							autoPlay
							muted
						/>
						{/* <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SNc_bPaMeiw63zp8r/black-seamless-animated-background-loop_sxckzlcwe_6a95f5dab72643e101887dc23a3b2e1c_P360.mp4" type="video/mp4" /> */}
						{/* <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/itCjTBE/videoblocks-100-19-black-smooth-glossy-stripes-4k_rolkveudp_68db6bf301394accd5500983ad9fbfbf_P360.mp4" type="video/mp4" /> */}
						{/* <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Vv03xyNwg/black-dramatic-clouds_bfx3g6thl_d864d515f1b0178987470ea71a3bc19c_P360.mp4" type="video/mp4" /> */}
						Your browser does not support the video tag.
					</video>
					{/* <img
						// src="https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724611955/background2_hlpzkh.jpg"
						// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724611956/background3_ey0mav.jpg"
						// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724611957/background_p8lfo6.jpg"
						alt="Background"
						className="w-full h-full object-cover"
					/> */}
				</div>

				<div className="relative z-10  shadow-lg shadow-[#ffffff75] p-8 rounded-lg x max-w-screen-sm h-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
					<div className="flex justify-center items-center">
						<img
							// src="https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724611955/background2_hlpzkh.jpg"
							// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724611957/L_fkunmj.png"
							src="https://res.cloudinary.com/dioelwfec/image/upload/v1724696264/owaspWhite_1_c7miif.png"
							// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724611957/background_p8lfo6.jpg"
							alt="Background"
							className="h-full object-cover w-72"
						/>
					</div>
					<div className="sm:mx-auto sm:w-full sm:max-w-md">
						<h2 className="my-6 text-3xl font-extrabold text-center text-white">
							Sign In
						</h2>
					</div>
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-white"
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
									placeholder="username@email.com"
									onChange={(e) => setEmail(e.target.value)}
									className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
						<div className="mb-6">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-white"
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
									placeholder="**********"
									onChange={(e) =>
										setPassword(e.target.value)
									}
									className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
						<button
							type="submit"
							// className="flex justify-center w-full px-4 py-2 text-md font-medium text-white bg-gray-500	 border border-transparent rounded-xl shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							className="w-full z-30 py-3 bg-gray-400 rounded-md text-white hover:text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-gray-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-xl"
						>
							Sign in
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;