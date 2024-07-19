import React from "react";

const Result = () => {
	return (
		<section className="py-12 h-screen bg-gray-100">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg">
					<h2 className="mb-6 text-3xl font-bold text-gray-800">
						Result Coming Soon!
					</h2>
					<p className="mb-6 text-lg text-gray-700">
						We are processing your quiz answers. Stay tuned for the
						result announcement!
					</p>
					<div className="flex justify-center mb-6 space-x-4">
						{/* Replace '#' with actual social media links */}
						<a
							href="#"
							className="text-gray-600 transition duration-300 hover:text-indigo-600"
							aria-label="Facebook"
						>
							<svg
								className="w-6 h-6 fill-current"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								{/* Facebook icon */}
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M3 2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h9.3v-7.37H9.5V12h2.8v-2.63c0-2.77 1.68-4.29 4.16-4.29 1.2 0 2.23.09 2.53.13v2.9h-1.73c-1.36 0-1.62.65-1.62 1.6V12h3.27l-.43 3.63h-2.84V23h5.56c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3z"
								/>
							</svg>
						</a>
						<a
							href="#"
							className="text-gray-600 transition duration-300 hover:text-indigo-600"
							aria-label="Twitter"
						>
							<svg
								className="w-6 h-6 fill-current"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								{/* Twitter icon */}
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M21.26 5.46c-.75.33-1.56.56-2.4.66.86-.51 1.52-1.32 1.83-2.28-.8.47-1.68.81-2.62 1-1-.86-2.45-1.35-4.04-1.35-3.05 0-5.53 2.47-5.53 5.52 0 .43.05.84.15 1.24-4.6-.23-8.68-2.43-11.42-5.78-.48.82-.76 1.77-.76 2.79 0 1.92.98 3.6 2.47 4.59-.91-.03-1.76-.28-2.5-.7v.07c0 2.68 1.91 4.9 4.44 5.41-.46.12-.95.19-1.45.19-.35 0-.7-.03-1.04-.09.7 2.18 2.73 3.77 5.14 3.82-1.88 1.47-4.24 2.34-6.81 2.34-.44 0-.88-.03-1.31-.08 2.43 1.56 5.3 2.47 8.39 2.47 10.06 0 15.56-8.34 15.56-15.57 0-.24 0-.48-.02-.72 1.07-.77 2-1.73 2.73-2.82z"
								/>
							</svg>
						</a>
						<a
							href="#"
							className="text-gray-600 transition duration-300 hover:text-indigo-600"
							aria-label="LinkedIn"
						>
							<svg
								className="w-6 h-6 fill-current"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								{/* LinkedIn icon */}
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M5 2h14c1.66 0 3 1.34 3 3v14c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3zm9 5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-3 8h6v-2h-6v2z"
								/>
							</svg>
						</a>
					</div>
					<div className="flex justify-center">
						<a
							href="/"
							className="px-6 py-3 font-bold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Back to Home
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Result;
