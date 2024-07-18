import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8080", // Replace with your API base URL
	timeout: 10000, // Timeout in milliseconds (10 seconds)
	headers: {
		"Content-Type": "application/json",
		// You can add other common headers here
	},
});

export default axiosInstance;
