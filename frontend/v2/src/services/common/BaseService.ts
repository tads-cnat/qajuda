import axiosInstance from "./AxiosSingleton";

class BaseService {
	serviceUrl: string = "";

	constructor(serviceUrl: string) {
		this.serviceUrl = serviceUrl;
	}

	async getAll(): Promise<any> {
		const response = await axiosInstance.get(`${this.serviceUrl}/`);
		return response;
	}

	async get(id: number): Promise<any> {
		const response = await axiosInstance.get(`${this.serviceUrl}/${id}/`);
		return response;
	}

	async post(data: any): Promise<any> {
		const response = await axiosInstance.post(`${this.serviceUrl}/`, data);
		return response;
	}

	async put(id: number, data: any): Promise<any> {
		const response = await axiosInstance.put(
			`${this.serviceUrl}/${id}/`,
			data
		);
		return response;
	}

	async patch(id: number, data: FormData): Promise<any> {
		const response = await axiosInstance.patch(
			`${this.serviceUrl}/${id}/`,
			data
		);
		return response;
	}

	async delete(id: number): Promise<any> {
		const response = await axiosInstance.delete(
			`${this.serviceUrl}/${id}/`
		);
		return response;
	}
}

export default BaseService;
