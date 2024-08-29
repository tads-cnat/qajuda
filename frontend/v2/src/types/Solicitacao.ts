import { Colaborador } from "./Colaborador";

export interface Solicitacao {
    id : number;
    colaborador : Colaborador;
    modificado_em : Date;
    status : string;
    solicitado_em : Date;
    acao : number;
}