import BaseService from "./common/BaseService";

export interface AcaoFilters {
	categoria?: number;
	criado_por?: number;
	fim?: Date;
	inicio?: Date;
	search?: string;
}

class AcaoService extends BaseService {}

export default new AcaoService("acao");
