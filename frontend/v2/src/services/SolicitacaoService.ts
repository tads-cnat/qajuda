import axiosInstance from "./common/AxiosSingleton";
import BaseService from "./common/BaseService";

class SolicitacaoService extends BaseService {
    async aceitar(id: any): Promise<any> {
		const response = await axiosInstance.post(`solicitacao/${id}/aceitar/`);
		return response;
	}

    async rejeitar(id: any): Promise<any> {
		const response = await axiosInstance.post(`solicitacao/${id}/rejeitar/`);
		return response;
	}
}

export default new SolicitacaoService("solicitacao");