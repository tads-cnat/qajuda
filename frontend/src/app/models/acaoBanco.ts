export interface AcaoBanco {
    categoria: number;
    foto: number;
    criador: number;
    nome: string;
    status: boolean;
    descricao: string;
    //criada_em: Date;
    modalidade: boolean;
    local: string;
    tema: string;
    max_volunt: number;
    url: string;
    inicio: Date;
    fim?: Date;
    avaliacao: any;
    qtd_volunt: number;
}