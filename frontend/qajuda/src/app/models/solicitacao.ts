import { Categoria } from "./categoria";
import { Foto } from "./foto";
import { Pessoa } from "./pessoa";

export interface Solicitacao {
    acao: {
        id: number;
        categoria: Categoria;
        foto: Foto;
        nome: string;
        status: boolean;
        descricao: string;
        criada_em: Date;
        modalidade: boolean;
        local: string;
        tema: string;
        max_volunt: any;
        url: any;
        inicio: Date;
        fim: Date;
        avaliacao: any;
        criador: 1;
    };
    colaborador: {
        id: number;
        user: Pessoa;
        telefone1: string;
        telefone2: string;
        cidade: string;
        bairro: string;
        data_nasc: Date;
        bio: string;
        categoria: [
            1
        ]
    }
    convite: null;
    data_convite: null;
    solicitacao: string;
    data_solicitacao: Date;
    responsavel: null;
    data_responsavel: null
}