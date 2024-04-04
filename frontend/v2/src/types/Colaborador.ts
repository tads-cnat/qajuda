import { Usuario } from "./Usuario";

export interface Colaborador {
	id: 4;
	user: Usuario;
	telefone1: string;
	telefone2: string;
	cidade: string;
	bairro: string;
	data_nascimento: Date;
	bio: string;
	categoria: [];
}
