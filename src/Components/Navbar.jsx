import "./ComponentsStyles/Navabar.css";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { logout } from "../Axios/CommonServices";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [role, setRole] = useState("");

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	const handleLogout = () => {
		const confirm = window.confirm("Are You Sure You Want To Logout??");
		if (confirm) {
			logout();
		}
	};

	useEffect(() => {
		setRole(sessionStorage.getItem("role"));
	}, []);

	return (
		<nav className="sticky top-0 left-0 text-black bg-[#ffffff80] z-50 shadow-lg shadow-[#ffffff80] w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 ">
			<div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button */}
						<button
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={toggleNavbar}
						>
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
								<svg
									className="block w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							) : (
								<svg
									className="block w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
					<div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
						<div className="flex-shrink-0">
							<h1 className="text-xl font-bold text-white">
								<div>
									<img
										className="object-fill h-10 w-35"
										src="../src/assets/L.png"
										alt="logo"
									></img>
								</div>
							</h1>
						</div>
						<div className="hidden sm:block sm:ml-6">
							<div className="flex my-auto space-x-4">
								<Link
									to="/"
									className="px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
								>
									Home
								</Link>
								{/* <Link
									to="/about"
									className="px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
								>
									About
								</Link> */}
								<Link
									to="/profile"
									className="px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
								>
									Profile
								</Link>
								{!role && (
									<Link
										to="/login"
										className="px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
									>
										Login
									</Link>
								)}
								{role && (
									<>
										{role === "ADMIN" && (
											<>
												<Link
													to="/admin"
													className="px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
												>
													Admin Pannel
												</Link>
												{/* <Link
													to="/register"
													className="px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
												>
													Register
												</Link> */}
											</>
										)}
										<Link
											className="px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
											to="/login"
											onClick={handleLogout}
										>
											Logout
										</Link>
										{/* <Link
											className="Btn"
											to="/login"
											onClick={handleLogout}
										>
											<div className="sign">
												<svg viewBox="0 0 512 512">
													<path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
												</svg>
											</div>
											<div className="text">Logout</div>
										</Link> */}
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu, toggle classes based on menu state */}
			<div
				className={`${isOpen ? "block" : "hidden"} sm:hidden shadow-lg`}
				id="mobile-menu"
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					<Link
						to="/"
						className="block px-5 py-2 text-base font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
					>
						Home
					</Link>
					{/* <Link
						to="/about"
						className="block px-5 py-2 text-base font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
					>
						About
					</Link> */}
					<Link
						to="/profile"
						className="block px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
					>
						Profile
					</Link>
					{!role && (
						<Link
							to="/login"
							className="block px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
						>
							Login
						</Link>
					)}
					{role && (
						<>
							{role === "ADMIN" && (
								<>
									<Link
										to="/admin"
										className="block px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
									>
										Admin Pannel
									</Link>
								</>
							)}
							<Link
								to="/login"
								className="block px-5 py-2 text-sm font-medium rounded-md hover:border-black border-transparent mx-2 border-2"
								onClick={handleLogout}
							>
								Logout
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
