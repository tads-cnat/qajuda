import { Colaborador } from "./Colaborador";
import { Foto } from "./Foto";

export interface Acao {
	id: number;
	nome: string;
	descricao: string;
	criada_em: Date;
	modalidade: number;
	endereco: string;
	tema: string;
	max_volunt: number;
	inicio: Date;
	fim: Date;
	avaliacao: number;
	categoria: number;
	foto: Foto;
	qtd_volunt: number;
	criador: Colaborador;
}
