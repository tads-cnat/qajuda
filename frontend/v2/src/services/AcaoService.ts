import axiosInstance from "./common/AxiosSingleton";
import BaseService from "./common/BaseService";

export interface AcaoFilters {
	categoria?: number;
	criado_por?: number;
	fim?: Date;
	inicio?: Date;
	search?: string;
}

class AcaoService extends BaseService {
	async solicitarParticipacao(id : number): Promise<any> {
		const response = await axiosInstance.post(`acao/${id}/solicitacao/`);
		return response;
	}
}

export default new AcaoService("acao");
