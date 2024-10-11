import "./ComponentsStyles/BlinkingLights.css";

import React, { useEffect, useRef, useState } from "react";

import Questions from "./Questions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Quiz = ({ isQuizStarted, setIsQuizStarted }) => {
	const videoRef = useRef(null);
	const [isCameraActive, setIsCameraActive] = useState(false);
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	// console.log(isQuizStarted, setIsQuizStarted);

	useEffect(() => {
		// Function to get the camera and microphone stream
		const getMediaStream = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true, // Access the camera
					audio: true, // Access the microphone
				});

				// Set the video stream to the videoRef
				if (videoRef.current) {
					videoRef.current.srcObject = stream;
				}
				setIsCameraActive(true);
			} catch (err) {
				console.error("Error accessing camera and microphone:", err);
				setError(
					"Error accessing camera and microphone. Please check permissions."
				);
				setIsCameraActive(false);
			}
		};

		getMediaStream();

		// Clean up the stream when the component unmounts
		return () => {
			if (videoRef.current && videoRef.current.srcObject) {
				const stream = videoRef.current.srcObject;
				const tracks = stream.getTracks();
				tracks.forEach((track) => track.stop()); // Stop all tracks to release camera/mic
			}
		};
	}, [isCameraActive]);

	useEffect(() => {
		if (isCameraActive) {
			toast.warn("You are being invigilated now");
		}
	}, [isCameraActive]);

	return (
		<>
			<div className="fixed top-0 right-0 z-30 flex flex-col items-center justify-center">
				<div className="text-center">
					{error ? (
						<p className="text-red-500">{error}</p>
					) : (
						<div>
							{isCameraActive ? (
								<div>
									<video
										ref={videoRef}
										autoPlay
										playsInline
										style={{
											width: "80px",
											height: "65px",
										}}
									/>
								</div>
							) : (
								<div>
									<p className="text-white">
										Accessing camera and microphone...
									</p>
									<div className="blinking-dots">
										<div className="dot"></div>
										<div className="dot"></div>
										<div className="dot"></div>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			<Questions />
		</>
	);
};

export default Quiz;
