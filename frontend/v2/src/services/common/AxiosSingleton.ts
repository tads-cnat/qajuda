import axios, { AxiosInstance } from "axios";

class AxiosSingleton {
	private static instance: AxiosInstance;

	private constructor() {}

	static getInstance(): AxiosInstance {
		console.log(import.meta.env.VITE_API_URL);
		if (!this.instance) {
			this.instance = axios.create({
				baseURL: import.meta.env.VITE_API_URL,
			});

			this.instance.interceptors.request.use(
				(config) => {
					const token = localStorage.getItem("token");
					if (token) {
						config.headers.Authorization = `Bearer ${token}`;
						config.headers.accept = "application/json";
					}
					console.log(config.headers.Authorization);
					return config;
				},
				(error) => Promise.reject(error)
			);
		}
		return this.instance;
	}
}

const axiosInstance = AxiosSingleton.getInstance();

export default axiosInstance;
