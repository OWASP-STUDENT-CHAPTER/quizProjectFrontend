import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GamesSection from "./GamesSection";
import StartQuizButton from "../SubComponents/StartQuizButton";

const Home = () => {
	return (
		<div className="App">
			<Navbar />
			<GamesSection />
			<StartQuizButton />
			<Footer />
		</div>
	);
};

export default Home;
