import axios, { AxiosInstance } from "axios";

class AxiosSingleton {
	private static instance: AxiosInstance;

	private constructor() {}

	static getInstance(): AxiosInstance {
		console.log(import.meta.env.VITE_API_URL);
		if (!AxiosSingleton.instance) {
			AxiosSingleton.instance = axios.create({
				baseURL: import.meta.env.VITE_API_URL,
			});

			AxiosSingleton.instance.interceptors.request.use(
				(config) => {
					const token = localStorage.getItem("token");
					if (token) {
						config.headers.Authorization = `Bearer ${token}`;
					}
					return config;
				},
				(error) => Promise.reject(error)
			);
		}
		return AxiosSingleton.instance;
	}
}

const axiosInstance = AxiosSingleton.getInstance();

export default axiosInstance;
