import axiosInstance from "@/services/common/AxiosSingleton";

class AuthService {
	async login(data: any): Promise<any> {
		const response = await axiosInstance.post(`login/`, data);
		return response;
	}
}

export default new AuthService();
