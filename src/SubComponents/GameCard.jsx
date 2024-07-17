import React from "react";

const GameCard = ({ title, imageUrl, link }) => {
	return (
		<div className="overflow-hidden bg-white rounded-lg shadow-lg">
			<img
				className="object-cover object-center w-full h-64"
				src={imageUrl}
				alt={title}
			/>
			<div className="p-4">
				<h3 className="mb-2 text-xl font-bold text-gray-800">
					{title}
				</h3>
				<a
					href={link}
					className="font-medium text-indigo-600 hover:text-indigo-700"
				>
					Play Now
				</a>
			</div>
		</div>
	);
};

export default GameCard;