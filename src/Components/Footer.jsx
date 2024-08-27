import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
	return (
		<footer className="text-white  ">
			<hr />
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="lg:flex lg:items-center lg:justify-between">
					<div className="flex-1 min-w-0">
						<h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
							Footer Title
						</h2>
						<p className="mt-2 text-sm ">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Nulla eget libero laoreet, gravida odio eget,
							congue odio.
						</p>
						<div className="flex mt-4 space-x-3">
							<Link to="#" className=" hover:text-white">
								<span className="sr-only">LinkedIn</span>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3 3h3v12H3V3zm4 0h3v3H7V3zm0 4h3v3H7V7zm0 4h3v3H7v-3zm4-8h3v3h-3V3zm0 4h3v3h-3V7zm0 4h3v3h-3v-3zm4-8h3v3h-3V3zm0 4h3v3h-3V7zm0 4h3v3h-3v-3zm4-8h3v3h-3V3zm0 4h3v3h-3V7zm0 4h3v3h-3v-3zm0 4h3v3h-3v-3zm-8-8h3v3h-3V3zm0 4h3v3h-3V7zm0 4h3v3h-3v-3zm0 4h3v3h-3v-3zm4-12h3v3h-3V3zm0 4h3v3h-3V7zm0 4h3v3h-3v-3zm0 4h3v3h-3v-3z"
									/>
								</svg>
							</Link>
							<Link to="#" className=" hover:text-white">
								<span className="sr-only">Twitter</span>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M21.3 4.6a8.77 8.77 0 01-2.51.68 4.38 4.38 0 001.92-2.42 8.84 8.84 0 01-2.79 1.07 4.4 4.4 0 00-7.5 4.01 12.5 12.5 0 01-9.07-4.6 4.39 4.39 0 001.36 5.85A4.34 4.34 0 012.7 7.9v.05a4.39 4.39 0 003.52 4.3 4.35 4.35 0 01-2.04.08 4.39 4.39 0 004.1 3.05 8.81 8.81 0 01-5.46 1.88 8.83 8.83 0 01-1.05-.06 12.45 12.45 0 006.73 1.97c8.07 0 12.49-6.67 12.49-12.48 0-.19 0-.38-.01-.56a8.94 8.94 0 002.21-2.28l-.02-.01z"
									/>
								</svg>
							</Link>
							<Link to="#" className=" hover:text-white">
								<span className="sr-only">GitHub</span>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.72c-2.79.6-3.37-1.34-3.37-1.34-.46-1.17-1.13-1.48-1.13-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.91 1.55 2.39 1.1 2.98.84.09-.65.35-1.1.64-1.35-2.24-.25-4.59-1.12-4.59-4.97 0-1.1.39-2 1.05-2.71-.1-.25-.46-1.28.1-2.67 0 0 .85-.27 2.78 1.04A9.57 9.57 0 0112 6.15c.85.01 1.71.11 2.5.33 1.93-1.31 2.78-1.04 2.78-1.04.56 1.39.2 2.42.1 2.67.65.71 1.05 1.61 1.05 2.71 0 3.86-2.36 4.72-4.6 4.97.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48C19.13 20.16 22 16.41 22 12c0-5.52-4.48-10-10-10z"
									/>
								</svg>
							</Link>
						</div>
					</div>
					<div className="flex mt-5 lg:mt-0 lg:ml-4 lg:flex-shrink-0">
						<span className="text-sm ">
							&copy; {new Date().getFullYear()} Your Company. All
							rights reserved.
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;