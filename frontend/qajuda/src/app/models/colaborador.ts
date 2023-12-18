export type Colaborador = {
    id?: number;
    foto: string;
    user: {
        first_name: string;
    }
    nome: string;
    idade: number;
    bairro: string;
    status: string; 
}