export interface Acao {
    id?: number;
    foto: string;
    nome: string;
    responsavel: string;
    descricao: string;
    categoria: {
        nome: string;
    }
    local: string;
    inicio: string;
    fim: string;
}