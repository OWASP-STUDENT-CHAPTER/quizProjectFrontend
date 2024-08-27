import { Link } from "react-router-dom";
import React from "react";

const GameCard = ({ title, imageUrl, link }) => {
	return (
		<div className="overflow-hidden bg-white rounded-lg shadow-lg shadow-black">
			<Link to={link} target="_blank">
				<img
					className="object-cover object-center w-full h-64"
					src={imageUrl}
					alt={title}
				/>
				<div className="p-[1px] bg-black"></div>
				<div className="p-4">
					<h3 className="mb-2 text-xl font-bold text-gray-800">
						{title}
					</h3>
					<Link
						to={link}
						target="_blank"
						className="font-medium text-indigo-600 hover:text-indigo-700"
					>
						Play Now
					</Link>
				</div>
			</Link>
		</div>
	);
};

export default GameCard;
