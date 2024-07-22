import React, { useEffect, useState } from "react";

import Footer from "./Footer";
import GamesSection from "./GamesSection";
import Navbar from "./Navbar";
import StartQuizButton from "../SubComponents/StartQuizButton";

const Home = () => {
	return (
		<div className="App">
			<Navbar />
			<StartQuizButton />
			<GamesSection />
			<Footer />
		</div>
	);
};

export default Home;
