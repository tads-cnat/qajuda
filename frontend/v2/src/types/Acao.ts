import { Categoria } from "./Categoria";
import { Colaborador } from "./Colaborador";
import { Foto } from "./Foto";

export interface Acao {
	id: number;
	nome: string;
	descricao: string;
	criado_em: Date;
	modalidade: number;
	endereco: string;
	tema: string;
	max_volunt: number;
	inicio: Date;
	fim: Date;
	avaliacao: number;
	categoria: Categoria;
	foto: Foto;
	qtd_volunt: number;
	criado_por: Colaborador;
}
