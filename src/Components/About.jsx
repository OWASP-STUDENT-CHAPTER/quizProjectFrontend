import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			{/* <Navbar /> */}
			<div className="max-w-4xl px-4 py-8 mx-auto text-white">
				<div className="p-6 bg-[#515151dd] border-2 rounded-xl ">
					<h1 className="mb-4 text-3xl font-bold">
						About Our Society
					</h1>
					<p className="leading-relaxed ">
						Welcome to our society! We are dedicated to [describe
						the purpose or mission of your society]. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nullam eu
						pulvinar risus, id vestibulum est. Donec mattis, turpis
						non euismod luctus, velit lorem fringilla augue, nec
						ornare libero nisi at lectus. Etiam a quam. Creative
						incididunt ut labore et dolore magna aliqua Ut enim ad
						minim veniam quis nostrud exercitation ullamco laboris
					</p>
				</div>
				{/* <div className="mt-8 text-white">
					<h2 className="mb-4 text-2xl font-bold">Our Goals</h2>
					<ul className="list-disc list-inside ">
						<li>Goal 1: [Describe your first goal]</li>
						<li>Goal 2: [Describe your second goal]</li>
						<li>Goal 3: [Describe your third goal]</li>
					</ul>
				</div> */}

				<div className="mt-8 text-white">
					<h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
					<p className="">
						If you have any questions or would like to get involved,
						please reach out to us at{" "}
						<Link
							to="mailto:contact@example.com"
							className="text-blue-500"
						>
							contact@example.com
						</Link>
						.
					</p>
				</div>

				{/* <hr className="my-8 border-gray-300" />

				<div className="flex items-center justify-center space-x-4">
					<Link to="#" className="text-gray-600 hover:text-blue-500">
						<FaFacebook size={24} />
					</Link>
					<Link to="#" className="text-gray-600 hover:text-blue-500">
						<FaTwitter size={24} />
					</Link>
					<Link to="#" className="text-gray-600 hover:text-blue-500">
						<FaInstagram size={24} />
					</Link>
				</div> */}
			</div>
		</>
	);
};

export default About;
