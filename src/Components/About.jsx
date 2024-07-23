import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import Navbar from "./Navbar";

const About = () => {
	return (
		<>
			<Navbar />
			<div className="max-w-4xl px-4 py-8 mx-auto">
				<h1 className="mb-4 text-3xl font-bold">About Our Society</h1>
				<p className="leading-relaxed text-gray-700">
					Welcome to our society! We are dedicated to [describe the
					purpose or mission of your society]. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam eu pulvinar risus,
					id vestibulum est. Donec mattis, turpis non euismod luctus,
					velit lorem fringilla augue, nec ornare libero nisi at
					lectus. Etiam a quam. Creative incididunt ut labore et
					dolore magna aliqua Ut enim ad minim veniam quis nostrud
					exercitation ullamco laboris
				</p>

				<div className="mt-8">
					<h2 className="mb-4 text-2xl font-bold">Our Goals</h2>
					<ul className="text-gray-700 list-disc list-inside">
						<li>Goal 1: [Describe your first goal]</li>
						<li>Goal 2: [Describe your second goal]</li>
						<li>Goal 3: [Describe your third goal]</li>
					</ul>
				</div>

				<div className="mt-8">
					<h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
					<p className="text-gray-700">
						If you have any questions or would like to get involved,
						please reach out to us at{" "}
						<a
							href="mailto:contact@example.com"
							className="text-blue-500"
						>
							contact@example.com
						</a>
						.
					</p>
				</div>

				<hr className="my-8 border-gray-300" />

				<div className="flex items-center justify-center space-x-4">
					<a href="#" className="text-gray-600 hover:text-blue-500">
						<FaFacebook size={24} />
					</a>
					<a href="#" className="text-gray-600 hover:text-blue-500">
						<FaTwitter size={24} />
					</a>
					<a href="#" className="text-gray-600 hover:text-blue-500">
						<FaInstagram size={24} />
					</a>
				</div>
			</div>
		</>
	);
};

export default About;
