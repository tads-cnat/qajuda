import Header from "@/components/Header";
import "./style.css";
import CardAprovacao from "@/components/CardAprovacao";

function AprovarSolicitacao() {
    return (
        <>
            <Header />
            <section className="container">
                <div className="d-flex align-items-center mt-5 mb-5">
                    <h2 className="p-2 w-100">Lista de voluntários pendentes</h2>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg p-2 flex-shrink-1"
                    >
                        Voltar
                    </button>
                </div>

                <div className="mb-4">
                    <CardAprovacao />
                </div>
            </section>

        </>
    )
}

export default AprovarSolicitacao;