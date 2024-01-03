export interface SolicitacaoBanco {
    convite?: string;
    data_convite?: Date;
    solicitacao?: string;
    data_solicitacao?: Date;
    responsavel?: boolean;
    data_responsavel?: Date;
    acao: number;
    colaborador: number;
}