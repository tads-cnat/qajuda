export interface Solicitacao {
    acao: {
        id: number;
        categoria: {
            id: number;
            nome: string;
        },
        foto: {
            id: number;
            foto: string;
            nome: string;
        },
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
    },
    colaborador: {
        id: number;
        user: {
            first_name: string;
            last_name: string;
            email: string;
        },
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
}