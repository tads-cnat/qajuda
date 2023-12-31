import { Categoria } from "./categoria";
import { Colaborador } from "./colaborador";
import { Foto } from "./foto";

export interface Acao {
    id: number;
    categoria: Categoria;
    foto?: Foto;
    criador: Colaborador;
    nome: string;
    status: boolean;
    descricao: string;
    criada_em: Date;
    modalidade: boolean;
    local: string;
    tema: string;
    max_volunt: any;
    url: any;
    inicio: string;
    fim: any;
    avaliacao: any;
    qtd_volunt: number;
}