export interface Colaborador {
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