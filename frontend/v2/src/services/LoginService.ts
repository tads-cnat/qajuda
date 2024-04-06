import axiosInstance from "@/services/common/AxiosSingleton";

class AuthService {
	async getToken(data: any): Promise<any> {
		const response = await axiosInstance.post(`login/`, data);
		return response;
	}
}

export default new AuthService();
