import React, { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gray-800 shadow-lg">
			<div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button */}
						<button
							type="button"
							className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
								{/* LOGO */}
								<div><img className="w-35 h-12 object-fill" src="../src/assets/L.png" alt="logo"></img></div>
							</h1>
						</div>
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4">
								{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"
								<a
									href="#"
									className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
								>
									Home
								</a>
								<a
									href="#"
									className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
								>
									About
								</a>
								<a
									href="#"
									className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
								>
									Services
								</a>
								<a
									href="#"
									className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
								>
									Contact
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu, toggle classes based on menu state */}
			<div
				className={`${isOpen ? "block" : "hidden"} sm:hidden`}
				id="mobile-menu"
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					<a
						href="#"
						className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
					>
						Home
					</a>
					<a
						href="#"
						className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
					>
						About
					</a>
					<a
						href="#"
						className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
					>
						Services
					</a>
					<a
						href="#"
						className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
					>
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;