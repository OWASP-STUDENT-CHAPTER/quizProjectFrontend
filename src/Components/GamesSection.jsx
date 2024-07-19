import GameCard from "../SubComponents/GameCard";
import React from "react";

const GamesSection = () => {
	// Dummy data for games (replace with actual data)
	const games = [
		{
			id: 1,
			title: "Game 1",
			imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
			link: "#", // Replace with actual game link
		},
		{
			id: 2,
			title: "Game 2",
			imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
			link: "#", // Replace with actual game link
		},
		{
			id: 3,
			title: "Game 3",
			imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
			link: "#", // Replace with actual game link
		},
	];

	return (
		<section className="py-12 bg-white">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<h2 className="mb-6 text-3xl font-bold text-gray-800">
						Featured Games
					</h2>
					<div className="flex flex-wrap -mx-4">
						{games.map((game) => (
							<div
								key={game.id}
								className="w-full px-4 mb-8 sm:w-1/2 md:w-1/3"
							>
								<GameCard
									title={game.title}
									imageUrl={game.imageUrl}
									link={game.link}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default GamesSection;
