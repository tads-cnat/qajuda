import "./style.css";
import Header from "@/components/Header";

export default function AutorizarVoluntarioAcao() {
    return (
        <>
            <Header />
            <section className="container">
                <div className="d-flex align-items-center">
                    <h2 className="p-2 w-100">Lista de voluntários pendentes</h2>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg p-2 flex-shrink-1"
                    >
                        Voltar
                    </button>
                </div>

                <div>
                    <div
                        className="d-flex justify-content-between align-items-center cartao"
                        // *ngFor="let solic of solicitacoes"
                    >
                        <div className="foto col-1">
                            {/* Sua imagem redonda aqui */}
                        </div>
                        <div className="info col-3">
                            <div>Teste colaborador</div>
                            {/* {{ solic.colaborador.user.first_name }} */}
                        </div>
                        <div className="info col-3">
                            <div>X anos</div>
                            {/* {{ calcularIdade(solic.colaborador.data_nasc) }} anos */}
                        </div>
                        <div className="info col-3">
                            <div>Bairro NOVO</div>
                            {/* {{ solic.colaborador.bairro }} */}
                        </div>
                        <div id="botao col-2">
                            <button
                                type="button"
                                className="botao botao-aceitar"
                                // (click)="
                                //     AceitarSolicitacao(
                                //         solic.id,
                                //         solic.acao.id,
                                //         solic.colaborador.id
                                //     )
                                // "
                            ></button>
                            <button
                                type="button"
                                className="botao botao-recusar"
                            ></button>
                        </div>
                    </div>
                </div>
            </section>
        </>

        )
}