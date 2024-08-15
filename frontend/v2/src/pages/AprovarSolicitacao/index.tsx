import Header from "@/components/Header";
import "./style.css";
import CardAprovacao from "@/components/CardAprovacao";
import { useState } from "react";
import { Colaborador } from "@/types/Colaborador";

function AprovarSolicitacao() {
    const [listVoluntario, setListVoluntario] = useState<Colaborador[]>([]);

    function fetchData() : void {
        
    }

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
                    <CardAprovacao foto="../../assets/img/icones/userpadrao.png" endereco="Mipibu" idade={21} nome="Arthur" />
                </div>
            </section>

        </>
    )
}

export default AprovarSolicitacao;