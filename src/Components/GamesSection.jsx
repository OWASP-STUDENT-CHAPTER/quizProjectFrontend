import GameCard from "../SubComponents/GameCard";
import React from "react";

const GamesSection = () => {
	// Dummy data for games (replace with actual data)
	const games = [
		{
			id: 1,
			title: "Connect Dots",
			imageUrl: "https://media.licdn.com/dms/image/C5612AQE9vG8mgDOPgA/article-cover_image-shrink_720_1280/0/1606800609633?e=2147483647&v=beta&t=Xz52GiDg5e_nyXA8TIKfgkTc8azcwNaFNIgcs3mIi9Q", // Replace with actual image URL
			link: "https://connectdots.io/", // Replace with actual game link
		},
		{
			id: 2,
			title: "Hangman",
			imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrPquNDDwq6K1WKG8H7wehLGbOHiji4p8eQ&s", // Replace with actual image URL
			link: "https://www.factmonster.com/games/hangman/comic-characters-marvel", // Replace with actual game link
		},
		{
			id: 3,
			title: "1010 Classic",
			imageUrl: "https://www.factmonster.com/FactMonster/1010Classic/img/menu_back.jpg", // Replace with actual image URL
			link: "https://www.factmonster.com/games/1010classic", // Replace with actual game link
		},
	];

	return (
		<section className="py-12 ">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<h2 className="mb-6 text-3xl font-bold text-white">
						Featured Games
					</h2>
					<div className="flex flex-wrap -mx-4">
						{games.map((game) => (
							<div
								key={game.id}
								className="w-full px-4 mb-8 sm:w-1/2 md:w-1/3 "
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
