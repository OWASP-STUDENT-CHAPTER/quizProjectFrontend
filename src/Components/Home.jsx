import About from "./About";
import Footer from "./Footer";
import GamesSection from "./GamesSection";
import Navbar from "./Navbar";
import React from "react";
import StartQuizButton from "../SubComponents/StartQuizButton";

const Home = () => {
	return (
		<div className="relative">
			<div className="absolute inset-0">
				{/* <video
					className="object-cover w-full h-full"
					autoPlay
					muted
					loop
				>
					<source
						src="https://cdn.pixabay.com/video/2022/12/13/142815-780943566_large.mp4"
						type="video/mp4"
					/>
					<source
						src="https://videos.pexels.com/video-files/9694810/9694810-hd_1920_1080_25fps.mp4"
						type="video/mp4"
					/>
					<source
						src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SNc_bPaMeiw63zp8r/black-seamless-animated-background-loop_sxckzlcwe__6a95f5dab72643e101887dc23a3b2e1c__P360.mp4"
						type="video/mp4"
					/>
					<source
						src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/itCjTBE/videoblocks-100-19-black-smooth-glossy-stripes-4k_rolkveudp__68db6bf301394accd5500983ad9fbfbf__P360.mp4"
						type="video/mp4"
					/>
					<source
						src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Vv03xyNwg/black-dramatic-clouds_bfx3g6thl__d864d515f1b0178987470ea71a3bc19c__P360.mp4"
						type="video/mp4"
					/>
					<source src="" type="video/mp4" />
					Your browser does not support the video tag.
				</video> */}
				<img
					// src="https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724611955/background2_hlpzkh.jpg"
					// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724611956/background3_ey0mav.jpg"
					// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724611957/background_p8lfo6.jpg"
					// src="https://t4.ftcdn.net/jpg/02/73/71/39/240_F_273713901_NsBaKqBizJTxzCkRgMUqsh1LCmIRrMR4.jpg"
					// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724865220/88e51123-dfd4-4561-94e3-667d211188c6_j1ynyo.jpg"
					src="https://res.cloudinary.com/dioelwfec/image/upload/v1724865220/fcdfb8dd-9862-45a2-a423-e2f5e0ef5c5f_zvme49.jpg"
					// src="https://res.cloudinary.com/dioelwfec/image/upload/v1724865847/White_hexagon_wallpaper_by_Bertil_Hansen_-_Download_on_ZEDGE___f71d_pkzjmj_a_-90_a_vflip_zhlspy.jpg"
					alt="Background"
					className=" object-cover w-full h-full "
				/>
			</div>
			<div className="relative z-10">
				<Navbar />
				<StartQuizButton />
				<GamesSection />
				<About />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
