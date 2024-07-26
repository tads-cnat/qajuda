import { Categoria } from "./categoria";
import { Pessoa } from "./pessoa";

export interface Colaborador {
    id: number;
    user: Pessoa;
    telefone1: string;
    telefone2: string;
    cidade: string;
    bairro: string;
    data_nasc: Date;
    bio: string;
    categoria: Categoria;
}