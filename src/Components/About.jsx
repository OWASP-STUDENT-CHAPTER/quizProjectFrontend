import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			{/* <Navbar /> */}
			<div className="max-w-4xl px-4 py-8 mx-auto text-white">
				<div className="p-6 bg-[#515151dd] border-2 rounded-xl ">
					<h1 className="mb-4 text-3xl font-bold">
						About OWASP - Open Worldwide Application and Security
						Project
					</h1>
					<p className="leading-relaxed ">
						Thapar Institute of Engineering and Technology (TIET)
						has been a steady source of highly skilled talent to the
						nation as well as overseas. A pioneer in engineering
						education, research and innovation. The team of OWASP
						Student Chapter, one of the gilt-edged coding society,
						involves ingenious mind solvers who are eager to make
						the world a better place to live in with their
						innovative techniques and discoveries. By successfully
						organizing many hackathons, tech-talks, workshops and
						coding nights, we have always strived hard to maintain
						the coding culture throughout the campus.
					</p>
				</div>

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
