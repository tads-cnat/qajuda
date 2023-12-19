export interface Acao {
    id: number;
    categoria: {
        id: number;
        nome: string;
    }
    foto: {
        id: number;
        foto: string;
        nome: string;
    }
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
    fim: string;
    avaliacao: any;
    criador: number
}